import { Dispatch, RefObject, SetStateAction } from "react";
import Slider from "react-slick";
import FFAccounts from "./FFAccounts";

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
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    afterChange: (current: number) => {
      if (props.setButtonState) {
        if (current === 0) {
          props.setButtonState(0);
        } else {
          props.setButtonState(1);
        }
      }
    },
  };

  return (
    <Slider {...settings} ref={props.ref}>
      {props.buttonState === 0 ?
        <FFAccounts followers={props.followers} /> : 
        <FFAccounts followings={props.followings} />
      }
    </Slider>
  );
}
