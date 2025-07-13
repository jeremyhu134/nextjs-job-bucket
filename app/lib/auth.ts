import { authOptions } from "./authOptions";
import { getServerSession } from "next-auth/next";

export async function auth() {
  return await getServerSession(authOptions);
}