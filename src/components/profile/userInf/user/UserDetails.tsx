import Link from "next/link";

type UserDetailsProps = {
  user: TmpUser;
}

export type TmpUser = {
  id: number;
  profileImagePath: string;
  userName: string;
  accountId: string;
  description: string;
  email: string;
  isPublic: string;
  follower: number;
  follow: number;
}

export default function UserDetails(props: UserDetailsProps) {
  console.log("UserDetails", props.user);
  return (
    <div className="flex-1">
      <div className="flex items-end space-x-2">
        <h2 className="text-xl font-bold">{props.user.userName}</h2>
        <h4>{props.user.isPublic ? "(公開)": "(非公開)"}</h4>
      </div>
      <p className="text-sm text-gray-500">{`ID: ${props.user.accountId}`}</p>
      <div className="flex mt-2 space-x-4 text-sm">
        <Link href="/ff">
          <span className="font-semibold">{props.user.follower}</span> <span className="text-gray-500">フォロワー</span>
        </Link>
        <Link href="/ff">
          <span className="font-semibold">{props.user.follow}</span> <span className="text-gray-500">フォロー中</span>
        </Link>
      </div>
    </div>
  );
}
