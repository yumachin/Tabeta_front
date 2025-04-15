"use client";

import { UserPlus, UserCheck } from "lucide-react";
import { useState } from "react";

export type TmpUser = {
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

type FFButtonProps = {
  user: TmpUser;
  isFollowing?: boolean | null;
}

export default function FFButton(props: FFButtonProps) {
  const [isFollowing, setIsFollowing] = useState(true);

  return (
    <>
      {isFollowing ? (
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className="flex flex-1 justify-center gap-2 px-4 py-2 font-medium text-center border text-orange-500 bg-white rounded-md"
        >
          <UserCheck className="w-6 h-6" />
          <p>フォロー中</p>
        </button>
      ) : (
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className="flex flex-1 justify-center gap-2 px-4 py-2 font-medium text-center border text-white bg-orange-500 rounded-md"
        >
          <UserPlus className="w-6 h-6" />
          <p>フォローする</p>
        </button>
      )}
    </>
  );
}
