import { Sunrise, Sun, MoonStar } from "lucide-react";
import Image from "next/image";

type UserPostProps = {
  post: UserPostType;
};

type UserPostType = {
  id: number;
  imagePath: string;
  createdAt: string;
  timeSection: string;
};

export default function UserPost(props: UserPostProps) {
  // const imageUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/storage/${props.post.imagePath}`;
  const imageUrl = props.post.imagePath;

  return (
    <div className="relative aspect-square overflow-hidden">
      <div className="flex items-center absolute top-0 left-0 bg-white text-black text-sm px-2 py-1 border border-slate-300 space-x-2 rounded-lg">
        <p className="font-bold">
          {new Date(props.post.createdAt).getMonth() + 1}/
          {new Date(props.post.createdAt).getDay()}
        </p>
        {props.post.timeSection === "breakfast" ? (
          <Sunrise className="w-4 h-4 text-orange-300" />
        ) : props.post.timeSection === "lunch" ? (
          <Sun className="w-4 h-4 text-red-700" />
        ) : (
          <MoonStar className="w-4 h-4 text-blue-600" />
        )}
      </div>
      <Image
        src={imageUrl}
        width={300}
        height={300}
        alt={`Post${props.post.id}`}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
