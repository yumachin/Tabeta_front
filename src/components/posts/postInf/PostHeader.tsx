"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";

import { assets } from '@/assets/assets';

type PostHeaderProps = {
  postUserInf: PostedUserInfType;
  createdAt: string;
  pathname?: string;
}

type PostedUserInfType = {
  id: number;
  userName: string;
  profileImagePath: string;
}

export default function PostHeader(props: PostHeaderProps) {
  const [userId, setUserId] = useState<number | null>(null);
  const imagePath = assets.defaultUserIcon.src;

  useEffect(() => {
    const userId = Number(localStorage.getItem("user_id"));
    if (userId) {
      setUserId(userId);
    }
  }, []);

  const redirectUrl = props.pathname === "/LP" ? 
  "/auth/sign-in" : (props.postUserInf.id === userId) ? "/profile" :`/profile/${props.postUserInf.id}`;

  return (
    <div className="flex items-center mb-3">
      <Link href={redirectUrl}>
        <Image
          src={imagePath}
          width={40}
          height={40}
          alt=""
          className="object-cover w-full h-full rounded-full aspect-square"
        />
      </Link>
      <div className="ml-3">
        <Link href={redirectUrl}>
          <p className="font-medium">{props.postUserInf.userName}</p>
        </Link>
        <p className="text-xs text-gray-500">{formatDistanceToNow(new Date(props.createdAt), { locale: ja })}前</p>
      </div>
    </div>
  );
}
