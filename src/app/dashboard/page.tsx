import { GetAllPosts, GetFollowedAllPosts } from "@/utils/api/posts/get/api";
import DashboardPage from "./client";
import { assets } from "@/assets/assets";
// import { cookies } from "next/headers";

export default async function DashboardWrapper() {
  // const cookieStore = await cookies();
  // const userId = cookieStore.get("user_id")?.value;
  // const sessionId = cookieStore.get("session_id")?.value;
  const userId = "11";
  const sessionId = "0e143a97585d74b8f754e523cfae4a60";

  const posts = await GetAllPosts();
  
  // const followPosts = await GetFollowedAllPosts(userId, sessionId);
  const defaultPostImagePath = assets.defaultPostImage.src;
  const defaultUserIconPath = assets.defaultUserIcon.src;
  
  const followPosts = [
    {
      id: 1,
      postUserInf: {
        id: 1,
        userName: "John Doe",
        profileImagePath: defaultUserIconPath,
      },
      imagePath: defaultPostImagePath,
      createdAt: "2023-10-01T12:00:00Z",
      timeSection: "2 hours ago",
      likes: 10,
      description: "This is a sample post description.",
    },
  ]
  
  return <DashboardPage posts={posts} followPosts={followPosts} />;
}
