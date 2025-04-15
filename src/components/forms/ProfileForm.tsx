import { Control, Controller, FieldErrors } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import ProfilePhoto from "./functions/ProfilePhoto";

type ProfileFormProps = {
  onSubmit: () => void;
  control: Control<UpdateProfileType>;
  errors: FieldErrors<UpdateProfileType>;
}

type UpdateProfileType = {
  profileImagePath?: string | null;
  userName: string,
  accountId: string;
  email: string;
  isPublic: string;
  description?: string;
}

export default function ProfileForm(props: ProfileFormProps) {
  return (
    <form 
      className="container px-4 mx-auto max-w-2xl"
      onSubmit={props.onSubmit}
    >
      <Label htmlFor="profileImagePath" className="mb-3">
        写真
      </Label>
      <Controller
        control={props.control}
        name="profileImagePath"
        render={({ field }) => <ProfilePhoto {...field} />}
      />
      <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
        {props.errors.profileImagePath?.message}
      </p>
      <Label htmlFor="userName" className="my-3">
        ユーザー名
      </Label>
      <Controller
        control={props.control}
        name="userName"
        render={({ field }) => (
          <Input id="userName" type="text" className="w-full" {...field} />
        )}
      />
      <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
        {props.errors.userName?.message}
      </p>
      <Label htmlFor="accountId" className="my-3">
        アカウントID
      </Label>
      <Controller
        control={props.control}
        name="accountId"
        render={({ field }) => (
          <Input id="accountId" type="text" className="w-full" {...field} />
        )}
      />
      <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
        {props.errors.accountId?.message}
      </p>
      <Label htmlFor="email" className="my-3">
        メールアドレス
      </Label>
      <Controller
        control={props.control}
        name="email"
        render={({ field }) => (
          <Input id="email" type="text" className="w-full" {...field} />
        )}
      />
      <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
        {props.errors.email?.message}
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
      <Label htmlFor="description" className="my-3">
        自己紹介
      </Label>
      <Controller
        control={props.control}
        name="description"
        render={({ field }) => (
          <Textarea 
            id="description"
            placeholder="プロフィールに自己紹介を追加する"
            className="w-full h-[140px] resize-none" 
            {...field} 
          />
        )}
      />
      <p className="min-h-[1rem] text-red-400 text-xs my-1 ml-2">
        {props.errors.description?.message}
      </p>
      <div className="flex justify-end">
        <Button onClick={props.onSubmit} className="text-xs bg-orange-500">
          保存
        </Button>
      </div>
    </form>
  );
}
