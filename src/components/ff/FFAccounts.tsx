import Image from "next/image";
import Link from "next/link";
import EmptyFF from "../Empty/EmptyFF";

type FFAccountsProps = {
  followers?: FFRelation[] | null;
  followings?: FFRelation[] | null;
}

type FFRelation = {
  id: number;
  profileImagePath: string;
  userName: string;
  accountId: string;
  description?: string | null;
}

export default function FFAccounts(props: FFAccountsProps) {
  const list = props.followings || props.followers;
  // const list = props.followers || props.followings;

  // if (!props.followers || props.followers.length === 0) {
  //   return <EmptyFF flag="followers" />;
  // } else if (!props.followings || props.followings.length === 0) {
  //   return <EmptyFF />;
  // }

  return (
    <div className="flex flex-col px-2">
      {
        list?.map((user: FFRelation) => (
          <Link href={`/profile/${user.id}`} key={user.id}>
            <div className="py-4 border-b border-gray-200">
              <div className="flex items-start">
                <Image
                  src={user.profileImagePath}
                  width={60}
                  height={60}
                  alt={`${user.userName}'s avatar`}
                  className="object-cover rounded-full aspect-square mr-3"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <p className="font-bold">{user.userName}</p>
                      </div>
                      <p className="text-gray-500 text-sm">
                        {user.accountId}
                      </p>
                    </div>
                  </div>
                  {user.description && <p className="mt-2 text-sm">{user.description}</p>}
                </div>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  );
}
