"use server";

import { API } from "configs";
import { GlobalPartnerInterface } from "interfaces/globalPartner";

export async function getSingleGlobalPartner(
  slug: string
): Promise<GlobalPartnerInterface | null> {
  try {
    const resp = await API.get("/configurations/global-partner/slug/" + slug);
    return resp?.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getGlobalPartners() {
  try {
    const resp = await API.get("/configurations/global-partners");
    return resp?.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
