import EditProfile from "@/components/modals/form/EditProfile";
import FFButton from "./buttons/FFButton";
import UserDetails from "./user/UserDetails";
import UserIcon from "./user/UserIcon";

export default function UserInf(props: UserInfProps) {
  const me = false;

  return (
    <section className="container px-4 py-6 mx-auto">
      <div className="flex items-start">
        <UserIcon profileImagePath={props.user.profileImagePath} />
        <UserDetails user={props.user} />
      </div>
      <div className="flex gap-3 mt-6">
        {me ? (
          <FFButton user={props.user} />
        ) : (
          <EditProfile user={props.user} />
        )}
      </div>
      <div className="mt-6">
        <p className="text-sm">{props.user.description}</p>
      </div>
    </section>
  );
}

type UserInfProps = {
  user: TmpUser;
};

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
};
