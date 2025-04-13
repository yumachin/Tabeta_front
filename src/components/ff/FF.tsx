import { Dispatch, RefObject, SetStateAction } from "react";
import Slider from "react-slick";
import FFAccounts from "./FFAccounts";
import { SliderSettings } from "@/utils/slider/settings";

type FFProps = {
  followers: FFRelation[] | null;
  followings: FFRelation[] | null;
  ref: RefObject<Slider | null>;
  buttonState: number;
  setButtonState: Dispatch<SetStateAction<number>>;
}

type FFRelation = {
  id: number;
  profileImagePath: string;
  userName: string;
  accountId: string;
  description?: string | null;
}

export default function FF(props: FFProps) {
  const settings = SliderSettings(props.setButtonState);

  return (
    <Slider {...settings} ref={props.ref}>
      <FFAccounts followers={props.followers} />
      <FFAccounts followings={props.followings} />
    </Slider>
  );
}
