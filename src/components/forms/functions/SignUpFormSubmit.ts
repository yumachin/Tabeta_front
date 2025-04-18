import { SignUp } from "@/utils/api/auth/api";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

type SignUpFormType = {
  userName: string;
  accountId: string;
  email: string;
  password: string;
};

export const SignUpFormSubmit: SubmitHandler<SignUpFormType> = async (formData: SignUpFormType) => {
  const loadingToast = toast.loading("アカウント作成中...");

  try {
    await SignUp(formData);
    toast.success("アカウントを作成しました！", { id: loadingToast });
    return true;
  } catch (error) {
    toast.error("アカウントの作成に失敗しました。", { id: loadingToast });
    console.error(error);
    return false;
  }
};