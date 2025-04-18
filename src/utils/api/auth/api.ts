import camelcaseKeys from "camelcase-keys";

type SignUpType = {
  userName: string;
  accountId: string;
  email: string;
  password: string;
}

type SignInType = {
  email: string;
  password: string;
}

// ➀ サインアップ
export const SignUp = async (formData: SignUpType) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        account_id: formData.accountId,
        user_name: formData.userName,
        email: formData.email, 
        password: formData.password
      }),
    });

    if (!res.ok) {
      throw new Error("サインアップに失敗しました");
    }

    const data = await res.json();
    const camelDetails = camelcaseKeys(data.details, { deep: true });
    return camelDetails;
  } catch (error) {
    console.error("サインアップAPIのエラー", error);
    throw new Error("サインアップ失敗");
  }
};

// ➁ サインイン
export const SignIn = async (formData: SignInType) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      }),
    });
  
    if (!res.ok) {
      throw new Error("サインインに失敗しました");
    }
  
    const data = await res.json();
    const camelDetails = camelcaseKeys(data.details, { deep: true });
    return camelDetails;
  } catch (error) {
    console.error("サインインAPIのエラー", error);
    throw new Error("サインイン失敗");
  }
};

// ➂ サインアウト
export const SignOut = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sign-out`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (!res.ok) {
      throw new Error("サインアウトに失敗しました");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("サインアウトAPIのエラー", error);
    throw new Error("サインアウト失敗");
  }
};
