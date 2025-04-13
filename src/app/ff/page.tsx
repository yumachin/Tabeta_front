"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import Header from "@/components/blocks/header/Header";
import Footer from "@/components/blocks/footer/Footer";
import Loading from "@/components/loading/Loading";
import FFCarousel from "@/components/ff/FFCarousel";

export default function FFPage() {
  const router = useRouter();
  const sliderRef = useRef<Slider | null>(null);
  const [buttonState, setButtonState] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  useEffect(() => {
    const fetchFFData = async () => {
      try {
        // if (!user_id || !session_id) {
        //   console.error("認証されていません");
        //   setLoading(false);
        //   router.push("/auth/sign-in");
        //   return;
        // }
        // if (!name || !id) {
        //   console.error("URLにパラメーターが入っていません");
        //   router.push("/auth/sign-in");
        //   return;
        // }

        // const followersData = await getFollowers(user_id, session_id);
        // const followingsData = await getFollowings(user_id, session_id);
        
        setLoading(false);
      } catch (error) {
        console.error("FFの取得に失敗しました:", error);
      }
    };
    fetchFFData();
  }, [router, id, name]);
  
  return (
    <>
      <Header
        onNext={() => sliderRef.current?.slickNext()}
        onPrev={() => sliderRef.current?.slickPrev()}
        buttonState={buttonState} 
        setButtonState={setButtonState}
      />
      {loading ? <Loading /> : (
      <FFCarousel
        ref={sliderRef}
        buttonState={buttonState}
        setButtonState={setButtonState}
      />
      )}
      <Footer />
    </>
  );
}
