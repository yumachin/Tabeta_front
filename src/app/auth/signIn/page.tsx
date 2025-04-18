"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Header from "@/components/blocks/header/Header";
import { SignInValidation } from "@/utils/validations/AuthValidations";
import { SignInFormSubmit } from "@/components/forms/functions/SignInFormSubmit";
import SignInForm from "@/components/forms/SignInForm";

type SignInFormType = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const router = useRouter();
  const method = useForm<SignInFormType>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInValidation),
  });

  const onSubmit = async (formData: SignInFormType) => {
    const success = await SignInFormSubmit(formData);
    setTimeout(() => {
      toast.remove();
      if (success) {
        router.push("/dashboard");
      }
    }, 1500);
  };

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

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Header />
        <SignInForm
          onSubmit={method.handleSubmit(onSubmit)}
          control={method.control}
          errors={method.formState.errors}
        />
      </div>
    </>
  );
}
