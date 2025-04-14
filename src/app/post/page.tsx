"use client";

import Footer from "@/components/blocks/footer/Footer";
import Header from "@/components/blocks/header/Header";
import { formSubmit } from "@/components/forms/functions/formSubmit";
import PostForm from "@/components/forms/PostForm";
import { PostFormValidation } from "@/utils/validations/PostFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type PostFormType = {
  imagePath?: string;
  timeSection: string;
  isPublic: string;
  title: string;
  description?: string;
};

export default function PostPage() {
  const method = useForm<PostFormType>({
    mode: "onChange",
    defaultValues: {
      timeSection: "",
      isPublic: "1",
      title: "",
      description: ""
    },
    resolver: zodResolver(PostFormValidation)
  });

  return (
    <div>
      <Header onSubmit={method.handleSubmit(formSubmit)} />
      <PostForm
        onSubmit={method.handleSubmit(formSubmit)}
        control={method.control}
        errors={method.formState.errors}
      />
      <Footer />
    </div>
  );
}
