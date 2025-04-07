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
import { SignInValidation } from "@/utils/validations/AuthValidations";

type SignInType = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInValidation),
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

  const formSubmit: SubmitHandler<SignInType> = async (formData) => {
    const loadingToast = toast.loading("ログイン中...");
    try {
      // const res = await signUp(formData);
      // const ID = res.details[0].id;
      // const session_id = res.details[0].session_id;
      // localStorage.setItem("user_id", ID);
      // localStorage.setItem("session_id", session_id);

      toast.success("ログイン処理に成功しました！", { id: loadingToast });
      setTimeout(() => {
        toast.remove();
        router.push("/dashboard");
      }, 1000);
    } catch (error) {
      toast.error("ログイン処理に失敗しました。", { id: loadingToast });
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
                <h2 className="text-xl font-bold text-orange-500">ログイン</h2>
              </div>

              <form
                onSubmit={handleSubmit(formSubmit)}
                className="mt-8 space-y-3"
              >
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
                  ログイン
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
                  Googleでログイン
                </Button>
              </div>

              <p className="mt-6 text-sm text-center text-gray-500">
                アカウントをお持ちでない方は{" "}
                <Link href="/auth/signUp" className="text-orange-500">
                  新規登録
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
