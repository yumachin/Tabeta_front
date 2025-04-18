"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Header from "@/components/blocks/header/Header";
import { SignUpValidation } from "@/utils/validations/AuthValidations";
import SignUpForm from "@/components/forms/SignUpForm";
import { SignUpFormSubmit } from "@/components/forms/functions/SignUpFormSubmit";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type SignUpFormType = {
  userName: string;
  accountId: string;
  email: string;
  password: string;
};

export default function SignUpPage() {
  const router = useRouter();
  const method = useForm<SignUpFormType>({
    mode: "onSubmit",
    defaultValues: {
      userName: "",
      accountId: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignUpValidation),
  });

  const onSubmit = async (formData: SignUpFormType) => {
    const success = await SignUpFormSubmit(formData);
    setTimeout(() => {
      toast.remove();
      if (success) {
        router.push("/dashboard");
      }
    }, 1200);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Header />
        <SignUpForm
          onSubmit={method.handleSubmit(onSubmit)}
          control={method.control}
          errors={method.formState.errors}
        />
      </div>
    </>
  );
}
