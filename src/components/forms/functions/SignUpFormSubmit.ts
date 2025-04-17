import { SubmitHandler } from "react-hook-form";

type SignUpFormType = {
  userName: string;
  accountId: string;
  email: string;
  password: string;
};

export const SignUpFormSubmit: SubmitHandler<SignUpFormType> = async (formData) => {
  // const loadingToast = toast.loading("アカウント作成中...");
  // try {
  //   // const res = await signUp(formData);
  //   // const ID = res.details[0].id;
  //   // const session_id = res.details[0].session_id;
  //   // localStorage.setItem("user_id", ID);
  //   // localStorage.setItem("session_id", session_id);

  //   toast.success("アカウントを作成しました！", { id: loadingToast });
  //   setTimeout(() => {
  //     toast.remove();
  //     router.push("/dashboard");
  //   }, 1000);
  // } catch (error) {
  //   toast.error("アカウントの作成に失敗しました。", { id: loadingToast });
  //   console.error(error);
  // }
};