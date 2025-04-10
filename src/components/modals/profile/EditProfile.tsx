"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Field2 from "@/components/post/_molecules/Body/Field2";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { UpdateProfileType } from "@/types/types";
import { EditProfileValidation } from "@/utils/validations/ProfileValidation";

export function EditProfile(props: ProfileEditProps) {
  const [open, setOpen] = useState(false);
  // const [user_id, setUser_id] = useState<number | null>(null);
  // const [session_id, setSession_id] = useState<string | null>(null);
  // const [selectedImage, setSelectedImage] = useState<string | null>(props.user.profileImagePath);
  // const router = useRouter();
  // const { control, handleSubmit, formState: { errors } } = useForm<UpdateProfileType>({
  //   mode: "onChange",
  //   resolver: zodResolver(EditProfileValidation)
  // });

  // useEffect(() => {
  //   const userId = Number(localStorage.getItem("user_id"));
  //   const sessionId = localStorage.getItem("session_id");
  //   if (userId && sessionId) {
  //     setUser_id(userId);
  //     setSession_id(sessionId);
  //   } else {
  //     console.error("認証されていません");
  //     router.push("/auth/sign-in");
  //   }
  // }, [router]);

  // const urlToFile = async (url: string, fileName: string): Promise<File> => {
  //   const res = await fetch(url);
  //   const blob = await res.blob();
  //   return new File([blob], fileName, { type: "image/png" });
  // };

  // const formSubmit: SubmitHandler<UpdateProfileType> = async (formData) => {
  //   const addedFormData = {...formData, user_id};
  //   delete addedFormData.profile_image_path;

  //   const postData = new FormData();
  //   postData.append("json_data", JSON.stringify(addedFormData));
  //   if (selectedImage) {
  //     const file = await urlToFile(selectedImage, "profile_image.jpg");
  //     postData.append("photo", file);
  //   } else {
  //     postData.append("photo", "");
  //   }

  //   const loadingToast = toast.loading("投稿中...");
  //   try {
  //     // await updateProfile(postData, session_id);
  //     toast.success("プロフィールの更新に成功しました！", { id: loadingToast });
  //     setTimeout(() => {
  //       toast.dismiss(loadingToast);
  //       setOpen(false);
  //     }, 1000);
  //   } catch (error) {
  //     toast.error("プロフィールの更新に失敗しました。",  { id: loadingToast });
  //     console.error("プロフィールの更新に失敗しました:", error);
  //     setOpen(false);
  //   }
  // }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white gap-4 py-5">
          <p className="text-base">編集</p>
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white border-zinc-800">
        {/* <DialogHeader>
          <DialogTitle className="text-lg">プロフィールを編集</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(formSubmit)}>
          <Field2 control={control} errors={errors} user={props.user} selectedImage={selectedImage} setSelectedImage={setSelectedImage} setOpen={setOpen}  /> 
        </form> */}
      </DialogContent>
    </Dialog>
  );
};

type ProfileEditProps = {
  user: TmpUser
}

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