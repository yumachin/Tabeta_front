import { Control, Controller, FieldErrors } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import PostPhoto from "./functions/PostPhoto";

type PostFormProps = {
  onSubmit: () => void;
  control: Control<PostFormType>;
  errors: FieldErrors<PostFormType>;
};

type PostFormType = {
  imagePath?: string;
  timeSection: string;
  isPublic: string;
  title: string;
  description?: string;
};

export default function PostForm(props: PostFormProps) {
  return (
    <form 
      className="container px-4 py-6 mx-auto max-w-2xl"
      onSubmit={props.onSubmit}
    >
      <Label htmlFor="ImagePath" className="mb-3">
        写真
      </Label>
      <Controller
        control={props.control}
        name="imagePath"
        render={({ field }) => <PostPhoto {...field} />}
      />
      <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
        {props.errors.imagePath?.message}
      </p>
      <Label htmlFor="timeSection" className="my-3">
        時間帯
      </Label>
      <Controller
        control={props.control}
        name="timeSection"
        render={({ field }) => (
          <Select {...field} onValueChange={field.onChange}>
            <SelectTrigger id="timeSection" className="w-full py-5">
              <SelectValue placeholder="時間帯を選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="w-full py-3" value="breakfast">
                朝
              </SelectItem>
              <SelectItem className="w-full py-3" value="lunch">
                昼
              </SelectItem>
              <SelectItem className="w-full py-3" value="dinner">
                晩
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      />
      <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
        {props.errors.timeSection?.message}
      </p>
      <Label className="my-3">公開設定</Label>
      <Controller
        control={props.control}
        name="isPublic"
        render={({ field }) => (
          <RadioGroup
            value={field.value?.toString()}
            onValueChange={(val) => field.onChange(val)}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1" id="isPublic" />
              <Label htmlFor="isPublic" className="font-normal text-gray-700">
                公開
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="0" id="isPrivate" />
              <Label htmlFor="isPrivate" className="font-normal text-gray-700">
                非公開
              </Label>
            </div>
          </RadioGroup>
        )}
      />
      <p className="min-h-[1rem]"></p>
      <Label htmlFor="title" className="my-3">
        タイトル
      </Label>
      <Controller
        control={props.control}
        name="title"
        render={({ field }) => (
          <Input id="title" type="text" className="w-full" {...field} />
        )}
      />
      <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
        {props.errors.title?.message}
      </p>
      <Label htmlFor="description" className="my-3">
        説明
      </Label>
      <Controller
        control={props.control}
        name="description"
        render={({ field }) => (
          <Textarea
            id="description"
            placeholder="説明を入力"
            className="w-full h-[200px] resize-none"
            {...field}
          />
        )}
      />
      <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
        {props.errors.description?.message}
      </p>
    </form>
  );
}
