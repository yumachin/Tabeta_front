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

type DashboardPageProps = {
  posts: Post[];
  followPosts: Post[];
}

export default function DashboardPage(props: DashboardPageProps) {
  const [buttonState, setButtonState] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);

  return (
    <>
      <Header
        onNext={() => sliderRef.current?.slickNext()}
        onPrev={() => sliderRef.current?.slickPrev()}
        buttonState={buttonState}
        setButtonState={setButtonState}
      />
      <PostsCarousel
        posts={props.posts}
        followPosts={props.followPosts}
        ref={sliderRef}
        buttonState={buttonState}
        setButtonState={setButtonState}
      />
      <Footer />
    </>
  );
}
