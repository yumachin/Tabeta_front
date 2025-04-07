"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, IdCard, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/blocks/header/Header";
import { SignUpValidation } from "@/utils/validations/AuthValidations";

type SignUpFormType = {
  userName: string;
  accountId: string;
  email: string;
  password: string;
};

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    mode: "onChange",
    defaultValues: {
      userName: "",
      accountId: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignUpValidation),
  });

  // 認証状態の場合、元いたページにリダイレクト
  // useEffect(() => {
  //   const session_id = localStorage.getItem("session_id");
  //   const user_id = localStorage.getItem("user_id");
  //   if (session_id || user_id) {
  //     window.history.back();
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // }, []);
  // if (isAuthenticated === null) {
  //   return null;
  // }

  const formSubmit: SubmitHandler<SignUpFormType> = async (formData) => {
    const loadingToast = toast.loading("アカウント作成中...");
    try {
      // const res = await signUp(formData);
      // const ID = res.details[0].id;
      // const session_id = res.details[0].session_id;
      // localStorage.setItem("user_id", ID);
      // localStorage.setItem("session_id", session_id);

      toast.success("アカウントを作成しました！", { id: loadingToast });
      setTimeout(() => {
        toast.remove();
        router.push("/dashboard");
      }, 1000);
    } catch (error) {
      toast.error("アカウントの作成に失敗しました。", { id: loadingToast });
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full">
            <div className="bg-white rounded-lg p-6">
              <div className="space-y-1 text-center">
                <h2 className="text-xl font-bold text-orange-500">
                  アカウント作成
                </h2>
              </div>

              <form
                onSubmit={handleSubmit(formSubmit)}
                className="mt-8 space-y-3"
              >
                <div>
                  <label htmlFor="userName">ユーザー名</label>
                  <div className="relative">
                    <div className="absolute top-1/3 left-3 -translate-y-[45%] pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Controller
                      name="userName"
                      control={control}
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
                      {errors.userName?.message}
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
                      control={control}
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
                      {errors.accountId?.message}
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
                      control={control}
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
                      {errors.email?.message}
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
                      control={control}
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
                      {errors.password?.message}
                    </p>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-orange-500 mt-4">
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
                <Link href="/auth/signIn" className="text-orange-500">
                  ログイン
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
