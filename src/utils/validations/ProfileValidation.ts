import z from "zod";

export const EditProfileValidation = z.object({
  profile_image_path: z.string().optional(),
  user_name: z.string().min(1, "ユーザー名は必須です。").max(12, "12文字以下で入力してください。"),
  account_id: z.string().min(1, "アカウントIDは必須です。").max(12, "12文字以下で入力してください。"),
  email: z.string().min(1, "メールアドレスは必須です。").email("正しいメールアドレスで入力してください。"),
  is_public: z.string(),
  description: z.string().optional()
})