import { Heart } from "lucide-react";

type PostFooterProps = {
  post: Post;
  userName?: string | null;
}

type Post = {
  id: number;
  postUserInf: {
    id: number;
    userName: string;
    profileImagePath: string;
  };
  imagePath: string;
  createdAt: string;
  likes: number;
  description: string | null;
}

export default function PostFooter(props: PostFooterProps) {
  console.log(props.post.likes)
  return (
    <div className="mx-2">
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-700 hover:text-orange-500">
            <Heart className="w-6 h-6" />
          </button>
          <button className="flex items-center text-gray-700 hover:text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>
        <button className="flex items-center text-gray-700 hover:text-orange-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </button>
      </div>
      <span className="mt-1 text-sm">いいね　{props.post.likes ? props.post.likes : 0}件</span>
      <div>
        {props.post.description !== "" && <span className="ml-2 text-xs max-h-[4.5rem] break-words">{props.post.description}</span>}
      </div>
    </div>
  );
}
