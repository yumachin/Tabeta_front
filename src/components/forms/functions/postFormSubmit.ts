// import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

type PostFormType = {
  imagePath?: string;
  timeSection: string;
  isPublic: string;
  title: string;
  description?: string;
};

const base64ToFile = (base64: string, fileName: string): File => {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] || "image/png";
  const bstr = atob(arr[1]); // Base64をバイナリにデコード
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, { type: mime });
};

export const PostFormSubmit = (router: ReturnType<typeof useRouter>): SubmitHandler<PostFormType> => {
  return async (formData) => {
    const userId = "11";
    const { imagePath, ...cleanFormData } = formData;
    
    const decodedFile = imagePath ? base64ToFile(imagePath, "decoded-image.png") : undefined;
    
    const postData = new FormData();
    postData.append("jsonData", JSON.stringify(cleanFormData));
    
    if (decodedFile) {
      postData.append("photo", decodedFile);
    } else {
      console.log("photoがありません。");
      postData.append("photo", "");
    }
    console.log("送信するデータ:", postData);
    
    const loadingToast = toast.loading("投稿中...");
    try {
      console.log("通ったよ111")
      const res = await fetch("api/post", {
        method: "POST",
        body: postData,
      })
      console.log("resには", res)
      if (!res.ok) throw new Error("投稿失敗");
    
      toast.success("投稿しました！", { id: loadingToast });
      setTimeout(() => {
        toast.dismiss(loadingToast);
        router.push("/");
      }, 1000);
    } catch (error) {
      toast.error("投稿に失敗しました。",  { id: loadingToast });
      console.error("投稿に失敗しました:", error);
    }
  }
};
  // const cookieStore = await cookies();
  // const userId = Number(cookieStore.get("user_id")?.value);
