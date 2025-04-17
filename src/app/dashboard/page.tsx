import { GetAllPosts } from "@/utils/api/posts/get/api";
import DashboardPage from "./client";

export default async function DashboardWrapper() {
  const posts = await GetAllPosts();
  return <DashboardPage posts={posts} />;
}
