"use client";

import { UserPlus, UserCheck } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [userId, setUserId] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    setUserId(localStorage.getItem("user_id"));
    setSessionId(localStorage.getItem("session_id"));
  }, []);

  return (
    <>
      {props.isFollowing ? (
        <button
          className="flex flex-1 justify-center gap-2 px-4 py-2 font-medium text-center border text-orange-500 bg-white rounded-md hover:border-red-400"
        >
          <UserCheck />
          <p>フォロー中</p>
        </button>
      ) : (
        <button
          className="flex flex-1 justify-center gap-2 px-4 py-2 font-medium text-center text-white bg-orange-500 rounded-md hover:bg-orange-600"
        >
          <UserPlus />
          <p>フォローする</p>
        </button>
      )}
    </>
  );
}
