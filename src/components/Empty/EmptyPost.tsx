import Link from "next/link";

type EmptyProps = {
  flag?: string;
  pathname: string;
};

export default function EmptyPost(props: EmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <div className="text-4xl text-gray-400 mb-4">📷</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {props.flag === "globalPosts"
          ? "まだ投稿がありません"
          : "フォロー中のユーザーの投稿はありません"}
      </h2>
      <p className="text-gray-600 mb-8 max-w-xs mx-auto">
        {props.flag === "globalPosts" &&
          "美味しい料理の写真を撮って、みんなとシェアしましょう！"}
      </p>
      <Link
        href={props.pathname === "/landing" ? "/auth/signIn" : "/post"}
        className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full"
      >
        {props.pathname === "/landing" ? "ログインする" : "最初の投稿をする"}
      </Link>
    </div>
  );
}
