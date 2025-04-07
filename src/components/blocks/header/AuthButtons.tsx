import { LogIn, UserPlus } from "lucide-react";
import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="flex items-center space-x-4 sm:space-x-10">
      <Link href="/auth/signIn" className="text-orange-600">
        <div className="flex flex-col items-center text-xs">
          <LogIn className="w-4 h-4" />
          ログイン
        </div>
      </Link>
      <Link href="/auth/signUp" className="text-orange-600">
        <div className="flex flex-col items-center text-xs">
          <UserPlus className="w-4 h-4" />
          新規登録
        </div>
      </Link>
    </div>
  );
}
