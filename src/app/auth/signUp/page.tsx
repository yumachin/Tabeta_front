"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Header from "@/components/blocks/header/Header";
import { SignUpValidation } from "@/utils/validations/AuthValidations";
import SignUpForm from "@/components/forms/SignUpForm";
import { SignUpFormSubmit } from "@/components/forms/functions/SignUpFormSubmit";

type SignUpFormType = {
  userName: string;
  accountId: string;
  email: string;
  password: string;
};

export default function SignUpPage() {
  const method = useForm<SignUpFormType>({
    mode: "onChange",
    defaultValues: {
      userName: "",
      accountId: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignUpValidation),
  });

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Header />
        <SignUpForm
          onSubmit={method.handleSubmit(SignUpFormSubmit)}
          control={method.control}
          errors={method.formState.errors}
        />
      </div>
    </>
  );
}
