"use client";

import EditProfile from "@/components/modals/form/EditProfile";
import FFButton from "./buttons/FFButton";
import UserDetails from "./user/UserDetails";
import UserIcon from "./user/UserIcon";
import { GetUserProfile } from "@/utils/api/users/api";
import { useEffect, useState } from "react";

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

export default function UserInf() {
  const [user, setUser] = useState<UserType>();
  const targetUserId = 11;

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = Number(localStorage.getItem("userId"));
      const sessionId = localStorage.getItem("sessionId");

      if (userId && sessionId) {
        const res = await GetUserProfile(targetUserId, userId, sessionId);
        setUser(res[0]);
      }
    };

    fetchProfile();
  }, []);

  // const user: UserType =
  //   {
  //     id: 6,
  //     // デフォルトの写真がこれ
  //     profileImagePath: imageUrl,
  //     userName: "Mike",
  //     accountId: "Mike123",
  //     description: "",
  //     email: "kiyoya@gmail.com",
  //     isPublic: "1",
  //     follower: 98,
  //     follow: 142
  //   };

  return (
    <section className="container px-4 py-6 mx-auto">
      <div className="flex items-start">
        <UserIcon profileImagePath={user?.profileImagePath} />
        {user && <UserDetails user={user} />}
      </div>
      <div className="flex gap-3 mt-6">
        {/* {user ? (
          <FFButton user={user} />
        ) : (
          <EditProfile user={user} />
        )} */}
        {user && <EditProfile user={user} />}
      </div>
      <div className="mt-6">
        <p className="text-sm">{user?.description && user.description}</p>
      </div>
    </section>
  );
}
