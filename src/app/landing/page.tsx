"use client";

import { useState } from "react";
import Header from "@/components/blocks/header/Header";
import Loading from "@/components/loading/Loading";
import Posts from "@/components/posts/Posts";

export default function LandingPage() {
  const [loading] = useState<boolean>(false);
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

  return (
    <>
      <Header />
      {loading ? <Loading /> : <Posts />}
    </>
  );
}
