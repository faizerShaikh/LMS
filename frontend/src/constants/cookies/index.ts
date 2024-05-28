import { cookies } from "next/headers";

export default function cookie() {
  const cookieStore = cookies();
  return cookieStore;
}
