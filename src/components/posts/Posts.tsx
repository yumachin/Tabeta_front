"use client";

import Image from "next/image";
import EmptyPost from "../Empty/EmptyPost";
import PostHeader from "./postInf/PostHeader";
import PostFooter from "./postInf/PostFooter";
import { usePathname } from "next/navigation";

type PostsProps = {
  type?: string;
  globalPosts?: PostsType[] | null;
  followingPosts?: PostsType[] | null;
}

type PostsType = {
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

export default function Posts(props: PostsProps) {
  const list = props.type === "globalPosts" ? props.globalPosts : props.followingPosts;
  const pathname =usePathname();

  if (!list || list.length === 0) {
    return <EmptyPost flag={props.type} pathname={pathname} />;
  }

  return (
    <div className={`flex flex-col px-2 ${pathname === "/dashboard" && "mb-16"}`}>
      {
        list.map((post: PostsType) => (
          <div key={post.id} className="py-4 border-b border-gray-200">
            <PostHeader postUserInf={post.postUserInf} createdAt={post.createdAt} pathname={pathname} />
            <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
              <Image
                src={post.imagePath}
                width={600}
                height={600}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <PostFooter post={post} userName={post.postUserInf.userName} />
          </div>
        ))
      }
    </div>
  );
}
