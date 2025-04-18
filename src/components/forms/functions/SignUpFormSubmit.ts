import { ToastStyle } from "@/styles/ToastStyle";
import { SignUp } from "@/utils/api/auth/api";
import toast from "react-hot-toast";

type SignUpFormType = {
  userName: string;
  accountId: string;
  email: string;
  password: string;
};

export const SignUpFormSubmit = async (formData: SignUpFormType) => {
  const loadingToast = toast.loading("アカウント作成中...");

  try {
    await SignUp(formData);
    toast.success(
      "アカウントを作成しました！",
      {
        style: ToastStyle,
        duration: 1200,
        id: loadingToast,
      }
    );
    return true;
  } catch (error) {
    toast.error(
      "アカウントの作成に失敗しました。",
      {
        style: ToastStyle,
        duration: 1200,
        id: loadingToast,
      }
    );
    console.error(error);
    return false;
  }
};