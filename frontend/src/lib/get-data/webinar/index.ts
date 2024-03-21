"use server";

import { API } from "configs";
import { WebinarInterface } from "interfaces/webinar";

export async function getSingleWebinar(
  slug: string
): Promise<WebinarInterface | null> {
  try {
    const resp = await API.get("configurations/webinar/slug/" + slug);
    // console.log(resp?.data.data, "<<<<<<<<<<<<<<<<<<<<<<<<<<");
    return resp?.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
