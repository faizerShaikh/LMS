"use server";

import { cookies } from "next/headers";

export const setCookies = (name: string, value: any) => {
  cookies().set(name, value);
};

export const getCookies = (name: string) => {
  console.log("cookiescookiescookies", name, cookies().get("userData")?.value);
  return cookies().get(name)?.value;
};
