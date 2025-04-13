import { SliderSettings } from "@/utils/slider/settings";
import { usePathname } from "next/navigation";
import { RefObject } from "react";
import Slider from "react-slick";
import { assets } from "@/assets/assets";
import Posts from "./Posts";

type Post = {
  id: number;
  postUserInf: {
    id: number;
    userName: string;
    profileImagePath: string;
  };
  imagePath: string;
  createdAt: string;
  likes: number;
  description: string | null;
}

type PostsProps = {
  ref?: RefObject<Slider | null>;
  buttonState?: number;
  setButtonState?: (index: number) => void;
}

export default function PostsCarousel(props: PostsProps) {
  const pathname = usePathname();
  const settings = SliderSettings(props.setButtonState ?? (() => {}));

  // const globalPosts: Post[] = [
  //   {
  //     id: 1,
  //     postUserInf: {
  //       id: 1,
  //       userName: "ゆまちん",
  //       profileImagePath: "/placeholder.svg?height=40&width=40"
  //     },
  //     imagePath: "/placeholder.svg?height=600&width=600",
  //     createdAt: "2025-03-09T12:34:56Z",
  //     likes: 114514,
  //     description: null
  //   },
  //   {
  //     id: 2,
  //     postUserInf: {
  //       id: 2,
  //       userName: "きよさん",
  //       profileImagePath: "/placeholder.svg?height=40&width=40"
  //     },
  //     imagePath: "/placeholder.svg?height=600&width=600",
  //     createdAt: "2025-03-07T12:34:56Z",
  //     likes: 4545,
  //     description: "牡蠣を食べました！"
  //   },
  //   {
  //     id: 3,
  //     postUserInf: {
  //       id: 3,
  //       userName: "こーせい",
  //       profileImagePath: "/placeholder.svg?height=40&width=40"
  //     },
  //     imagePath: "/placeholder.svg?height=600&width=600",
  //     createdAt: "2025-03-05T12:34:56Z",
  //     likes: 123,
  //     description: "React Native使ったよ!"
  //   }
  // ];

  // const followingPosts: Post[] = [
  //   {
  //     id: 2,
  //     postUserInf: {
  //       id: 2,
  //       userName: "きよさん",
  //       profileImagePath: "/placeholder.svg?height=40&width=40"
  //     },
  //     imagePath: "/placeholder.svg?height=600&width=600",
  //     createdAt: "2025-03-07T12:34:56Z",
  //     likes: 4545,
  //     description: "牡蠣を食べました！"
  //   },
  //   {
  //     id: 3,
  //     postUserInf: {
  //       id: 3,
  //       userName: "こーせい",
  //       profileImagePath: "/placeholder.svg?height=40&width=40"
  //     },
  //     imagePath: "/placeholder.svg?height=600&width=600",
  //     createdAt: "2025-03-05T12:34:56Z",
  //     likes: 123,
  //     description: "React Native使ったよ!"
  //   }
  // ];

  const globalPosts: {
    id: number,
    postUserInf: {
      id: number,
      userName: string,
      profileImagePath: string
    },
    imagePath: string,
    createdAt: string,
    likes: number,
    description: null
  } [] = [];

  const followingPosts: {
    id: number,
    postUserInf: {
      id: number,
      userName: string,
      profileImagePath: string
    },
    imagePath: string,
    createdAt: string,
    likes: number,
    description: null
  } [] = [];
  
  return (
    <Slider {...settings} ref={props.ref} >
      <Posts type="globalPosts" globalPosts={globalPosts} />
      {pathname == "/dashboard" && <Posts followingPosts={followingPosts} />}
    </Slider>
  );
}