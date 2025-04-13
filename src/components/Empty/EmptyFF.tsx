import { Users, UserX } from "lucide-react";

type EmptyFFProps = {
  flag?: string;
}

export default function EmptyFF(props: EmptyFFProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-6 py-12">
      <div className="w-20 h-20 flex items-center justify-center bg-orange-100 rounded-full mb-6">
        {props.flag === "followers" ? (
          <UserX size={32} className="text-orange-500" />
        ) : (
          <Users size={32} className="text-orange-500" />
        )}
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {props.flag === "followers" 
          ? "まだフォロワーがいません" 
          : "まだ誰もフォローしていません"}
      </h2>
      <p className="text-gray-500 text-center mb-8">
        {props.flag === "followers"
          ? "あなたのプロフィールをシェアして、友達にフォローしてもらいましょう！"
          : "気になるユーザーをフォローして、最新の投稿をチェックしましょう！"}
      </p>
      <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-sm">
        {props.flag === "followers"
          ? "プロフィールをシェア的な機能を実装したい（Xでアカウント情報をツイートするとか）"
          : "ユーザーを探す的なページに飛ばしたい"}
      </button>
    </div>
  );
}
