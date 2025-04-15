import { z } from "zod";

export const PostFormValidation = z.object({
  imagePath: z.any().refine((val) => typeof val === "string", {
    message: "写真は必須です。",
  }),
  timeSection: z.string().min(1, "時間帯は必須です。"),
  isPublic: z.string(),
  title: z.string().min(1, "タイトルは必須です。").max(15, "15文字以下で入力してください。"),
  description: z.string().max(100, "100文字以下で入力してください。").optional()
});