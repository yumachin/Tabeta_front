"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import AuthButtons from "./AuthButtons";
import { usePathname, useRouter } from "next/navigation";
import HeaderToggle from "./HeaderToggle";

type HeaderProps = {
  buttonState: number;
  setButtonState: (state: number) => void;
}

export default function Header(props: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleRoute = () => {
    console.log("pathnameは", pathname);
    if (pathname !== "/auth/signUp" && pathname !== "/auth/signIn") {
      router.push("/dashboard");
    } else {
      router.push("/landing");
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-18 px-4">
        <Image
          src={assets.logo}
          alt="Logo"
          className="w-35 h-auto sm:w-50 sm:h-auto"
          priority
          onClick={handleRoute}
        />
        {pathname === "/landing" && <AuthButtons />}
      </div>
      {(pathname === "/dashboard" || pathname === "/ff") && (
        <HeaderToggle 
          pathname={pathname}
          buttonState={props.buttonState} 
          setButtonState={props.setButtonState}
        />
      )}
    </header>
  );
}
