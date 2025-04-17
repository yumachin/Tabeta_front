"use client";

import { useRef, useState } from "react";
import Header from "@/components/blocks/header/Header";
import Footer from "@/components/blocks/footer/Footer";
import PostsCarousel from "@/components/posts/PostsCarousel";
import Slider from "react-slick";

type Post = {
  id: number;
  postUserInf: PostedUserInfType;
  imagePath: string;
  createdAt: string;
  timeSection?: string;
  likes: number;
  description: string | null; 
}

export type PostedUserInfType = {
  id: number;
  userName: string;
  profileImagePath: string;
}

export default function DashboardPage({ posts }: { posts: Post[] }) {
  const [buttonState, setButtonState] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);

  // const posts: GetLPPost[] = [
  //   {
  //     id: 1,
  //     post_user_inf: {
  //       id: 1,
  //       user_name: "ゆまちん",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: "/placeholder.svg?height=600&width=600",
  //     created_at: "2025-03-09T12:34:56Z",
  //     likes: 114514,
  //     description: null
  //   },
  //   {
  //     id: 2,
  //     post_user_inf: {
  //       id: 2,
  //       user_name: "きよさん",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: "/placeholder.svg?height=600&width=600",
  //     created_at: "2025-03-07T12:34:56Z",
  //     likes: 4545,
  //     description: "牡蠣を食べました！"
  //   },
  //   {
  //     id: 3,
  //     post_user_inf: {
  //       id: 3,
  //       user_name: "こーせい",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: "/placeholder.svg?height=600&width=600",
  //     created_at: "2025-03-05T12:34:56Z",
  //     likes: 123,
  //     description: "React Native使ったよ!"
  //   }
  // ];

  return (
    <>
      <Header
        onNext={() => sliderRef.current?.slickNext()}
        onPrev={() => sliderRef.current?.slickPrev()}
        buttonState={buttonState}
        setButtonState={setButtonState}
      />
      <PostsCarousel
        posts={posts}
        ref={sliderRef}
        buttonState={buttonState}
        setButtonState={setButtonState}
      />
      <Footer />
    </>
  );
}
