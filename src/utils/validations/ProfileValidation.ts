import z from "zod";

export const EditProfileValidation = z.object({
  profileImagePath: z.string().optional().nullable(),
  userName: z.string().min(1, "ユーザー名は必須です。").max(12, "12文字以下で入力してください。"),
  accountId: z.string().min(1, "アカウントIDは必須です。").max(12, "12文字以下で入力してください。"),
  email: z.string().min(1, "メールアドレスは必須です。").email("正しいメールアドレスで入力してください。"),
  isPublic: z.string(),
  description: z.string().max(100, "100文字以下で入力してください。").optional()
})