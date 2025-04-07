import { Home, PlusSquare, User } from "lucide-react";
import Link from "next/link";

type NavButtonProps = {
  iconID: number;
  iconName: string;
};

type IconProps = {
  icon: React.ComponentType<{ className: string }>;
};

type IconNameProps = {
  iconName: string;
};

export default function NavButton(props: NavButtonProps) {
  const icons = [Home, PlusSquare, User];
  const icon = icons[props.iconID];
  const links = ["/dashboard", "/post", "/profile"];
  const link = links[props.iconID];

  const Icon = (props: IconProps) => {
    return <props.icon className="w-6 h-6" />;
  };

  const IconName = (props: IconNameProps) => {
    return <span className="mt-1 text-xs font-medium">{props.iconName}</span>;
  };

  return (
    <Link
      href={`${link}`}
      className="flex flex-col items-center justify-center"
    >
      <Icon icon={icon} />
      <IconName iconName={props.iconName} />
    </Link>
  );
}
