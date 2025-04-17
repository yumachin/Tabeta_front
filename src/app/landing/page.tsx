import Header from "@/components/blocks/header/Header";
import PostsCarousel from "@/components/posts/PostsCarousel";
import { GetAllPosts } from "@/utils/api/posts/get/api";

export default async function LandingPage() {
  const posts = await GetAllPosts();

  return (
    <>
      <Header />
      <PostsCarousel posts={posts} />
    </>
  );
}
