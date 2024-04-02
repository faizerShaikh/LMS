"use server";

import { cookies } from "next/headers";

export const setCookies = (name: string, value: any) => {
  cookies().set(name, value);
};
