"use client";

import Image from "next/image";
import EmptyPost from "../Empty/EmptyPost";
import PostHeader from "./postInf/PostHeader";
import PostFooter from "./postInf/PostFooter";
import { usePathname } from "next/navigation";
import { assets } from "@/assets/assets";
import { useState } from "react";

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
  const defaultPostImage = assets.defaultPostImage.src;
  const list = props.type === "globalPosts" ? props.globalPosts : props.followingPosts;
  const pathname =usePathname();

  if (!list || list.length === 0) {
    return <EmptyPost flag={props.type} pathname={pathname} />;
  }

  return (
    <div className={`flex flex-col px-2 ${pathname === "/dashboard" && "mb-16"}`}>
      {
        list.map((post: PostsType) =>  {
          const [imgSrc, setImgSrc] = useState(
            `${process.env.NEXT_PUBLIC_API_URL}/storage/${post.imagePath}`
          );

          return (
            <div key={post.id} className="py-4 border-b border-gray-200">
              <PostHeader postUserInf={post.postUserInf} createdAt={post.createdAt} pathname={pathname} />
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
                <Image
                  src={imgSrc}
                  width={600}
                  height={600}
                  alt="Post Image"
                  className="object-cover w-full h-full"
                  onError={() => setImgSrc(defaultPostImage)}
                />
              </div>
              <PostFooter post={post} userName={post.postUserInf.userName} />
            </div>
          )
        })
      }
    </div>
  );
}
