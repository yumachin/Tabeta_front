"use client";

import { SliderSettings } from "@/utils/slider/settings";
import { usePathname } from "next/navigation";
import { RefObject } from "react";
import Slider from "react-slick";
import Posts from "./Posts";

type Post = {
  id: number;
  postUserInf: {
    id: number;
    userName: string;
    profileImagePath: string;
  };
  imagePath: string;
  timeSection?: string;
  createdAt: string;
  likes: number;
  description: string | null;
}

type PostsProps = {
  posts: Post[];
  followPosts?: Post[];
  ref?: RefObject<Slider | null>;
  buttonState?: number;
  setButtonState?: (index: number) => void;
}

export default function PostsCarousel(props: PostsProps) {
  const pathname = usePathname();
  const settings = SliderSettings(props.setButtonState ?? (() => {}));
  
  return (
    <Slider {...settings} ref={props.ref} >
      <Posts type="globalPosts" globalPosts={props.posts} />
      {pathname == "/dashboard" && <Posts followPosts={props.followPosts} />}
    </Slider>
  );
}
