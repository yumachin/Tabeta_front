"use client";

import Header from "@/components/blocks/header/Header";
import Footer from "@/components/blocks/footer/Footer";
import UserInf from "@/components/profile/userInf/UserInf";
import UserPosts from "@/components/profile/userPost/UserPosts";
import { assets } from "@/assets/assets";

type UserType = {
  id: number;
  profileImagePath: string;
  userName: string;
  accountId: string;
  description: string;
  email: string;
  isPublic: string;
  follower: number;
  follow: number;
}

export default function ProfilePage() {
  const imageUrl = assets.defaultUserIcon.src;

  const user: UserType =
    {
      id: 6,
      // デフォルトの写真がこれ
      profileImagePath: imageUrl,
      userName: "Mike",
      accountId: "Mike123",
      description: "",
      email: "kiyoya@gmail.com",
      isPublic: "1",
      follower: 98,
      follow: 142
    };

  const posts = [
    {
      id: 10,
      imagePath: imageUrl,
      createdAt: "2025-03-06T12:34:56.789Z",
      timeSection: "lunch"
    },
    {
      id: 9,
      imagePath: imageUrl,
      createdAt: "2025-03-06T08:34:56.789Z",
      timeSection: "breakfast"
    },
    {
      id: 8,
      imagePath: imageUrl,
      createdAt: "2025-03-05T19:34:56.789Z",
      timeSection: "evening"
    },
    {
      id: 7,
      imagePath: imageUrl,
      createdAt: "2025-03-05T12:34:56.789Z",
      timeSection: "lunch"
    }
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <UserInf user={user} />
        <UserPosts userName={user.userName} posts={posts} />
        <Footer />
      </div>
    </>
  );
}
