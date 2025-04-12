"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import Header from "@/components/blocks/header/Header";
import Footer from "@/components/blocks/footer/Footer";
import Loading from "@/components/loading/Loading";
import FF from "@/components/ff/FF";
import { assets } from "@/assets/assets";

export default function FFPage() {
  const router = useRouter();
  const sliderRef = useRef<Slider | null>(null);
  const [buttonState, setButtonState] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const imageUrl = assets.defaultUserIcon.src;

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

  const followers = [
    {
      id: 1,
      profileImagePath: imageUrl,
      userName: "きよや",
      accountId: "@K1106",
      description: null,
    },
    {
      id: 2,
      profileImagePath: imageUrl,
      userName: "こーせい",
      accountId: "@k8035004287922",
      description: "大学3年生",
    },
    {
      id: 3,
      profileImagePath: imageUrl,
      userName: "ゆうま",
      accountId: "@Y5141",
      description: "インターンで勉強した内容をアウトプットしていきたい！最近花粉症のせいで、目も鼻もかゆいです。薬とティッシュが欲しいです。",
    },
    {
      id: 4,
      profileImagePath: imageUrl,
      userName: "けいた",
      accountId: "@K418",
      description: "最近は、よく遊びに行ってるよ。",
    },
    {
      id: 5,
      profileImagePath: imageUrl,
      userName: "そうた",
      accountId: "@S1010",
      description: "彼女のことが大好きです。もう愛が止まりません。"
    }
  ];

  const followings = [
    {
      id: 1,
      profileImagePath: imageUrl,
      userName: "きよや",
      accountId: "@K1106",
      description: null
    },
    {
      id: 2,
      profileImagePath: imageUrl,
      userName: "こーせい",
      accountId: "@k8035004287922",
      description: "大学3年生"
    },
    {
      id: 5,
      profileImagePath: imageUrl,
      userName: "そうた",
      accountId: "@S1010",
      description: "彼女のことが大好きです。もう愛が止まりません。"
    }
  ];

  return (
    <>
      <Header
        onNext={() => sliderRef.current?.slickNext()} 
        onPrev={() => sliderRef.current?.slickPrev()} 
        buttonState={buttonState} 
        setButtonState={setButtonState}
      />
        {loading ? <Loading /> : (
          <FF
            followers={followers}
            followings={followings}
            ref={sliderRef}
            buttonState={buttonState}
            setButtonState={setButtonState}
          />
        )}
      <Footer />
    </>
  );
}
