"use server"
import { cookies } from "next/headers";
async function setTokenCookie(token: string) {
  
  const cookieStore = await cookies();
  cookieStore.set({
    name: "token",
    value: token,
    maxAge: 259200,
  });
}

export default setTokenCookie;