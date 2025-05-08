import { NextRequest, NextResponse } from "next/server";
// import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    // const cookieStore = await cookies();
    // const userId = cookieStore.get("user_id")?.value;
    const userId = "11";

    if (!userId) {
      return NextResponse.json({ error: "ユーザー認証が必要です。" }, { status: 401 });
    }

    const formData = await req.formData();
    const json_data = formData.get("json_data") as string;
    const photo = formData.get("photo") as Blob;

    const parsedData = JSON.parse(json_data);
    const finalData = {
      ...parsedData,
      userId: Number(userId),
    };

    console.log("保存するデータ:", finalData);
    console.log("写真データ:", photo);

    // TODO: 最終的にここでDB保存 or 外部APIに送信する

    return NextResponse.json({ message: "投稿完了" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
