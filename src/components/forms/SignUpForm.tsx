"use client";

import { Control, Controller, FieldErrors } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Eye, EyeOff, IdCard, Lock, Mail, User } from "lucide-react";
import Link from "next/link";

type SignUpFormProps = {
  onSubmit: () => void;
  control: Control<SignUpFormType>;
  errors: FieldErrors<SignUpFormType>;
}

type SignUpFormType = {
  userName: string;
  accountId: string;
  email: string;
  password: string;
};

export default function SignUpForm(props: SignUpFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="w-full">
        <div className="bg-white rounded-lg p-6">
          <div className="space-y-1 text-center">
            <h2 className="text-xl font-bold text-orange-500">
              アカウント作成
            </h2>
          </div>

          <form
            onSubmit={props.onSubmit}
            className="mt-8 space-y-3"
          >
            <div>
              <Label htmlFor="userName">ユーザー名</Label>
              <div className="relative">
                <div className="absolute top-1/3 left-3 -translate-y-[45%] pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Controller
                  name="userName"
                  control={props.control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="userName"
                      type="text"
                      className="w-full mt-2 pl-10"
                    />
                  )}
                />
                <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
                  {props.errors.userName?.message}
                </p>
              </div>
            </div>
            <div>
              <Label htmlFor="accountId">アカウントID</Label>
              <div className="relative">
                <div className="absolute top-1/3 left-3 -translate-y-[45%] pointer-events-none">
                  <IdCard className="h-5 w-5 text-gray-400" />
                </div>
                <Controller
                  name="accountId"
                  control={props.control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="accountId"
                      type="text"
                      className="w-full mt-2 pl-10"
                    />
                  )}
                />
                <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
                  {props.errors.accountId?.message}
                </p>
              </div>
            </div>
            <div>
              <Label htmlFor="email">メールアドレス</Label>
              <div className="relative">
                <div className="absolute top-1/3 left-3 -translate-y-[45%] pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Controller
                  name="email"
                  control={props.control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      className="w-full mt-2 pl-10"
                      autoComplete="email"
                    />
                  )}
                />
                <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
                  {props.errors.email?.message}
                </p>
              </div>
            </div>
            <div>
              <Label htmlFor="password">パスワード</Label>
              <div className="relative">
                <div className="absolute top-1/3 left-3 -translate-y-[45%] pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Controller
                  name="password"
                  control={props.control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••"
                      className="w-full mt-2 pl-10"
                      autoComplete="current-password"
                    />
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/3 right-4 -translate-y-[45%] text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
                <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
                  {props.errors.password?.message}
                </p>
              </div>
            </div>
            <Button type="submit" className="w-full bg-orange-500 mt-4 font-bold">
              アカウント作成
            </Button>
          </form>

          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-white">または</span>
              </div>
            </div>

            <Button type="button" variant="outline" className="w-full mt-4">
              Googleで登録
            </Button>
          </div>

          <p className="mt-6 text-sm text-center text-gray-500">
            すでにアカウントをお持ちの方は{" "}
            <Link href="/auth/signIn" className="text-orange-500 font-bold">
              ログイン
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
