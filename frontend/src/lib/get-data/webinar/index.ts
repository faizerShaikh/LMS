"use server";

import { API } from "configs";
import { WebinarInterface, WebinarResponseInterface } from "interfaces/webinar";

export async function getSingleWebinar(
  slug: string
): Promise<WebinarResponseInterface | null> {
  try {
    const resp = await API.get("configurations/webinar/slug/" + slug);
    return resp?.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
