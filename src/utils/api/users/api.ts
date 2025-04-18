import camelcaseKeys from "camelcase-keys";

// ➀ プロフィールを取得
export const GetUserProfile = async (targetUserId: number, userId: number | null, sessionId: string | null) => {
  try {
    if (!userId || !sessionId) {
      throw new Error("セッションID, 又はユーザーIDが無効");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": sessionId
      },
      body: JSON.stringify({viewer_id: userId, poster_id: targetUserId}),
    });
    const data = await res.json();
    const camelDetails = camelcaseKeys(data.details, { deep: true });
    return camelDetails;
  } catch(error) {
    console.error("ユーザープロフィール取得APIのエラー", error);
    throw new Error("ユーザープロフィール取得失敗");
  }
};

// ➁ フォロワーを取得
export const getFollowers = async (user_id: number | null, session_id: string | null) => {
  try {
    if (!user_id || !session_id) {
      throw new Error("セッションID, 又はユーザーIDが無効");
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/followed-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": session_id
      },
      body: JSON.stringify({user_id}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch(error) {
    console.error("フォロワー取得APIのエラー", error);
    throw new Error("フォロワー取得失敗");
  }
};

// ➂ フォロー中のユーザーを取得
export const getFollowings = async (user_id: number | null, session_id: string | null) => {
  try {
    if (!user_id || !session_id) {
      throw new Error("セッションID, 又はユーザーIDが無効");
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/following-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": session_id
      },
      body: JSON.stringify({user_id}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch(error) {
    console.error("フォロー中ユーザー取得APIのエラー", error);
    throw new Error("フォロー中ユーザー取得失敗");
  }
};