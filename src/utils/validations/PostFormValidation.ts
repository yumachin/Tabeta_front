import { z } from "zod";

export const PostFormValidation = z.object({
  imagePath: z.string().optional(),
  timeSection: z.string().min(1, "時間帯は必須です。"),
  isPublic: z.string(),
  title: z.string().min(1, "タイトルは必須です。").max(15, "15文字以下で入力してください。"),
  description: z.string().optional()
});