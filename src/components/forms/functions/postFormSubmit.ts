import { SubmitHandler } from "react-hook-form";

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

export const postFormSubmit: SubmitHandler<PostFormType> = async (formData) => {
  const userId = "userId";
  const addedFormData = { ...formData, userId };
  const imagePath = addedFormData.imagePath;
  delete addedFormData.imagePath;

  const decodedFile = imagePath ? base64ToFile(imagePath, "decoded-image.png") : undefined;

  const postData = new FormData();
  postData.append("json_data", JSON.stringify(addedFormData));

  if (decodedFile) {
    postData.append("photo", decodedFile);
  } else {
    console.log("photoがありません。");
    postData.append("photo", "");
  }

  // 必要に応じて fetch 処理などをここに書く
  // await fetch('/api/posts', {
  //   method: 'POST',
  //   body: postData,
  // });
};
