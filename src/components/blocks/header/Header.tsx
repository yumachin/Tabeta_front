"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import AuthButtons from "./AuthButtons";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const buttonState = 0;

  const handleRoute = () => {
    console.log("pathnameは", pathname)
    if (pathname !== "/auth/signUp" && pathname !== "/auth/signIn") {
      router.push("/dashboard");
    } else {
      router.push("/landing");
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-18 p-2">
        <Image
          src={assets.logo}
          alt="Logo"
          className="w-35 h-auto sm:w-50 sm:h-auto"
          priority
          onClick={handleRoute}
        />
        {pathname === "/landing" && <AuthButtons />}
      </div>
      {pathname === "/dashboard" && (
        <div className="flex items-center">
          <button
            className={`flex-1 py-3 font-medium text-center ${
              buttonState === 0 ? "text-orange-500" : "text-gray-500"
            }`}
          >
            最新
          </button>
          <button
            className={`flex-1 py-3 font-medium text-center text-gray-500`}
          >
            フォロー中
          </button>
        </div>
      )}
    </header>
  );
}
