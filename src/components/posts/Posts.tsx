import { SliderSettings } from "@/utils/slider/settings";
import { usePathname } from "next/navigation";
import { RefObject } from "react";
import Slider from "react-slick";
import EmptyPost from "../Empty/EmptyPost";
import PostHeader from "./postInf/PostHeader";
import Image from "next/image";
import { assets } from "@/assets/assets";
import PostFooter from "./postInf/PostFooter";

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
  buttonState?: number;
  setButtonState?: (index: number) => void;
  ref?: RefObject<Slider | null>;
}

export default function Posts(props: PostsProps) {
  const pathname = usePathname();
  const settings = SliderSettings(props.setButtonState ?? (() => {}));
  const imagePath = assets.defaultUserIcon.src;

  const globalPosts: Post[] = [
    {
      id: 1,
      postUserInf: {
        id: 1,
        userName: "ゆまちん",
        profileImagePath: "/placeholder.svg?height=40&width=40"
      },
      imagePath: "/placeholder.svg?height=600&width=600",
      createdAt: "2025-03-09T12:34:56Z",
      likes: 114514,
      description: null
    },
    {
      id: 2,
      postUserInf: {
        id: 2,
        userName: "きよさん",
        profileImagePath: "/placeholder.svg?height=40&width=40"
      },
      imagePath: "/placeholder.svg?height=600&width=600",
      createdAt: "2025-03-07T12:34:56Z",
      likes: 4545,
      description: "牡蠣を食べました！"
    },
    {
      id: 3,
      postUserInf: {
        id: 3,
        userName: "こーせい",
        profileImagePath: "/placeholder.svg?height=40&width=40"
      },
      imagePath: "/placeholder.svg?height=600&width=600",
      createdAt: "2025-03-05T12:34:56Z",
      likes: 123,
      description: "React Native使ったよ!"
    }
  ];
  
  return (
    <Slider {...settings} ref={props.ref} >
      <div className='flex flex-col px-2'>
        {globalPosts?.length === 0 ? (
          <EmptyPost pathname={pathname} />
         ) : ( globalPosts.map((post: Post) => (
          <div key={post.id} className="py-4 border-b border-gray-200">
            <PostHeader postUserInf={post.postUserInf} createdAt={post.createdAt} pathname={pathname} />
            <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
            <Image
              src={imagePath}
              width={600}
              height={600}
              alt=""
              className="object-cover w-full h-full"
            />
            </div>
            <PostFooter post={post} userName={post.postUserInf.userName} />
          </div>))
        )}
      </div>
      
      {/* {props.followedPosts && (
        <div className='flex flex-col px-2'>
          {props.posts?.length === 0 ? (
            <EmptyPost pathname={pathname} />
         ) : ( props.followedPosts.map((followedPost: Post) => (
            <div key={followedPost.id} className="py-4 border-b border-gray-200">
              <PostHeader postUserInf={followedPost.postUserInf} createdAt={followedPost.createdAt} />
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
                <Image
                  src={imagePath}
                  width={600}
                  height={600}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <PostFooter post={followedPost} userName={followedPost.postUserInf.userName} />
            </div>))
          )}
        </div>
      )} */}
    </Slider>
  );
}