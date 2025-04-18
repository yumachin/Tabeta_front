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
    const res = await SignIn(formData);
    const userId = res[0].id;
    const sessionId = res[0].sessionId
    localStorage.setItem("userId", userId);
    localStorage.setItem("sessionId", sessionId);
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