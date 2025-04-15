import { SubmitHandler } from "react-hook-form";

type UpdateProfileType = {
  profileImagePath?: string | null;
  userName: string,
  accountId: string;
  email: string;
  isPublic: string;
  description?: string;
}

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

export const profileFormSubmit: SubmitHandler<UpdateProfileType> = async (formData) => {
  const userId = "userId";
  const addedFormData = { ...formData, userId };
  const profileImagePath = addedFormData.profileImagePath;
  delete addedFormData.profileImagePath;

  const decodedFile = profileImagePath ? base64ToFile(profileImagePath, "decoded-image.png") : undefined;

  const updateData = new FormData();
  updateData.append("json_data", JSON.stringify(addedFormData));

  if (decodedFile) {
    updateData.append("photo", decodedFile);
  } else {
    console.log("photoがありません。");
    updateData.append("photo", "");
  }

  // 必要に応じて fetch 処理などをここに書く
  // await fetch('/api/posts', {
  //   method: 'POST',
  //   body: updateData,
  // });
};
