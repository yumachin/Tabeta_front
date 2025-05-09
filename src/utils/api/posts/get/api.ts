import camelcaseKeys from "camelcase-keys";

// ➀ すべての投稿を取得
export const GetAllPosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/all-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({}),
      cache: "no-store"
    });
    const data = await res.json();
    const camelDetails = camelcaseKeys(data.details, { deep: true });
    return camelDetails;
  } catch (error) {
    console.error("全投稿取得APIのエラー", error);
    throw new Error("全投稿取得失敗");
  }
};

// ➁ フォローしている人の投稿を取得
export const GetFollowedAllPosts = async (userId: string | undefined, sessionId: string | undefined) => {
  try {
    if (!sessionId || !userId) {
      throw new Error("セッションID, 又はユーザーIDが無効");
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/follow-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": sessionId
      },
      body: JSON.stringify({ user_id: userId }),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch (error) {
    console.error("フォロー中ユーザーの投稿取得APIのエラー", error);
    throw new Error("フォロー中ユーザーの投稿取得失敗");
  }
};

// ➂ 個人の投稿を取得
export const getIndividualPosts = async (target_user_id: number, user_id: number | null, session_id: string | null) => {
  try {
    if (!session_id || !user_id) {
      throw new Error("セッションID, 又はユーザーIDが無効");
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": session_id
      },
      body: JSON.stringify({viewer_id: user_id, poster_id: target_user_id}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch (error) {
    console.error("個人の投稿取得APIのエラー", error);
    throw new Error("個人の投稿取得失敗");
  }
};