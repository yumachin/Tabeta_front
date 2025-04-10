import Link from "next/link";
import UserPost from "./UserPost";

type UserPostProps = {
  userName: string;
  posts: UserPostType[];
};

type UserPostType = {
  id: number;
  imagePath: string;
  createdAt: string;
  timeSection: string;
};

export default function UserPosts(props: UserPostProps) {
  return (
    <section className="container px-4 pb-20 mx-auto">
      <div className="pb-2 mb-4 border-b border-gray-200">
        <h2 className="text-lg font-bold">投稿</h2>
      </div>
      <div>
        {props.posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-16 px-4">
            <div className="text-4xl text-gray-400 mb-4">📷</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              まだ投稿がありません
            </h2>
            <p className="text-gray-600 mb-8 max-w-xs mx-auto">
              美味しい料理の写真を撮って、みんなとシェアしましょう！
            </p>
            <Link
              href="/post"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full"
            >
              投稿をする
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-1">
            {props.posts.map((post: UserPostType, index: number) => (
              <Link
                href={`/edit/${post.id}?user_name=${props.userName}`}
                key={index}
              >
                <UserPost post={post} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
