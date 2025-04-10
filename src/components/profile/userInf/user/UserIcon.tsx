import Image from "next/image";

import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { assets } from "@/assets/assets";

type UserIconProps = {
  profileImagePath: string;
}

export default function UserIcon(props: UserIconProps) {
  // const imageUrl = props.profileImagePath;
  const imageUrl = assets.defaultUserIcon.src;

  return (
    <div className="flex-shrink-0 mr-6">
      <Dialog>
        <DialogTrigger>
          {imageUrl ? (
            <Image 
              src={imageUrl}
              width={70}
              height={70}
              alt="UserIcon" 
              className="object-cover rounded-full aspect-square"
            />
          ) : (
            <Image 
              src="placeholder.svg"
              width={70}
              height={70}
              alt="UserIcon" 
              className="rounded-full border-1"
            />
          )}
        </DialogTrigger>
        <DialogContent className="rounded-full">
          {/* sr-only: 視覚的に消す */}
          <DialogTitle className="sr-only">User Icon</DialogTitle>
          <Image 
            src={imageUrl}
            width={100}
            height={100}
            alt="UserIcon" 
            className="object-cover w-full h-full rounded-full aspect-square"
          />
          <DialogClose className="sr-only" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
