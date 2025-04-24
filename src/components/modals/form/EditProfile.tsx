"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { EditProfileValidation } from "@/utils/validations/ProfileValidation";
import ProfileForm from "@/components/forms/ProfileForm";
import { ProfileFormSubmit } from "@/components/forms/functions/profileFormSubmit";

type ProfileEditProps = {
  user: TmpUser;
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

type UpdateProfileType = {
  profileImagePath?: string | null;
  userName: string,
  accountId: string;
  email: string;
  isPublic: string;
  description?: string;
}

export default function EditProfile(props: ProfileEditProps) {
  const [open, setOpen] = useState(false);
  const method = useForm<UpdateProfileType>({
    mode: "onChange",
    defaultValues: {
      userName: props.user.userName,
      accountId: props.user.accountId,
      email: props.user.email,
      isPublic: props.user.isPublic,
      description: props.user.description
    },
    resolver: zodResolver(EditProfileValidation)
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white gap-4">
          <p className="font-bold">編集</p>
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-orange-500 text-lg">プロフィールを編集</DialogTitle>
        </DialogHeader>
        <ProfileForm
          onSubmit={method.handleSubmit(ProfileFormSubmit)}
          control={method.control}
          errors={method.formState.errors}
        />
      </DialogContent>
    </Dialog>
  );
}
