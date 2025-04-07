// import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";

export default async function HomePage() {
  // const session = await getServerSession();
  // const session = true;
  const session = false;
  
  if (session) {
    redirect('/dashboard');
  } else {
    redirect('/landing');
  }
};