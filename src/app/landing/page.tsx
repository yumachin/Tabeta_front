import { GetAllPosts } from "@/utils/api/posts/get/api";
import LandingPage from "./client";

export default async function LandingWrapper() {
  const posts = await GetAllPosts();
  return <LandingPage posts={posts} />;
}
