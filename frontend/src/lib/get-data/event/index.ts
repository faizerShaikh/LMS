"use server";

import { API } from "configs";
import { EventInterface } from "interfaces/event";

export async function getSingleEvent(
  slug: string
): Promise<EventInterface | null> {
  try {
    const resp = await API.get("configurations/event/slug/" + slug);
    // console.log(resp?.data.data,"<<<<<<<<<<<<<<<<<<<<<<<<<<")
    return resp?.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
