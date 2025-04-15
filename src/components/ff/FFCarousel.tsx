import { Dispatch, RefObject, SetStateAction } from "react";
import Slider from "react-slick";
import FFAccounts from "./FFAccounts";
import { SliderSettings } from "@/utils/slider/settings";
import { assets } from "@/assets/assets";

type FFProps = {
  ref: RefObject<Slider | null>;
  buttonState: number;
  setButtonState: Dispatch<SetStateAction<number>>;
}

export default function FFCarousel(props: FFProps) {
  const settings = SliderSettings(props.setButtonState);
  const imageUrl = assets.defaultUserIcon.src

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

  // const followers: {
  //   id: number;
  //   profileImagePath: string;
  //   userName: string;
  //   accountId: string;
  //   description: string | null;
  // } [] = [];

  // const followings: {
  //   id: number;
  //   profileImagePath: string;
  //   userName: string;
  //   accountId: string;
  //   description: string | null;
  // } [] = [];

  return (
    <Slider {...settings} ref={props.ref}>
      <FFAccounts type="followers" followers={followers} />
      <FFAccounts followings={followings} />
    </Slider>
  );
}
