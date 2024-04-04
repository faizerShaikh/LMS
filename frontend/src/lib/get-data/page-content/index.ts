"use server";

import { API } from "configs";
import { PageContentInterface } from "interfaces";

export async function getSinglePage(
  slug: string
): Promise<PageContentInterface | null> {
  try {
    const response = await API.get("/configurations/page-content/" + slug);
    return response?.data?.data || {};
  } catch (error) {
    console.log(error);
    return null;
  }
}
