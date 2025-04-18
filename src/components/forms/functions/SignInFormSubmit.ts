import { ToastStyle } from "@/styles/ToastStyle";
import { SignIn } from "@/utils/api/auth/api";
import toast from "react-hot-toast";

type SignInFormType = {
  email: string;
  password: string;
};

export const SignInFormSubmit = async (formData: SignInFormType) => {
  const loadingToast = toast.loading("ログイン中...");

  try {
    await SignIn(formData);
    toast.success(
      "ログイン処理に成功しました！",
      {
        style: ToastStyle,
        duration: 1500,
        id: loadingToast,
      }
    );
    return true;
  } catch (error) {
    toast.error(
      "ログイン処理に失敗しました。",
      {
        style: ToastStyle,
        duration: 1500,
        id: loadingToast,
      }
    );
    console.error(error);
    return false;
  }
}