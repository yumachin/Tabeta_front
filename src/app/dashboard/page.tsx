"use client";

import { useRef, useState } from "react";
import Header from "@/components/blocks/header/Header";
import Loading from "@/components/loading/Loading";
import Footer from "@/components/blocks/footer/Footer";
import PostsCarousel from "@/components/posts/PostsCarousel";
import Slider from "react-slick";

export default function DashboardPage() {
  const [loading] = useState<boolean>(false);
  const [buttonState, setButtonState] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);

  // useEffect(() => {
  //   const fetchLPPosts = async () => {
  //     try {
  //       const allPosts = await getAllPosts();
  //       setPosts(allPosts);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("投稿の取得に失敗しました:", error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchLPPosts();
  // }, [router]);

  // // 認証状態の場合、元いたページにリダイレクト
  // useEffect(() => {
  //   const session_id = localStorage.getItem("session_id");
  //   const user_id = localStorage.getItem("user_id");
  //   if (session_id || user_id) {
  //     window.history.back();
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // }, []);
  // if (isAuthenticated === null) {
  //   return null;
  // }

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
      {loading ? (
        <Loading />
      ) : (
        <PostsCarousel
          ref={sliderRef}
          buttonState={buttonState}
          setButtonState={setButtonState}
        />
      )}
      <Footer />
    </>
  );
}
