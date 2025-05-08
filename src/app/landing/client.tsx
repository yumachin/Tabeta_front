import Header from "@/components/blocks/header/Header";
import PostsCarousel from "@/components/posts/PostsCarousel";

type Post = {
  id: number;
  postUserInf: PostedUserInfType;
  imagePath: string;
  createdAt: string;
  timeSection?: string;
  likes: number;
  description: string | null; 
}

export type PostedUserInfType = {
  id: number;
  userName: string;
  profileImagePath: string;
}

export default async function LandingPage({ posts }: { posts: Post[] }) {
  return (
    <>
      <Header />
      <PostsCarousel posts={posts} />
    </>
  );
}
