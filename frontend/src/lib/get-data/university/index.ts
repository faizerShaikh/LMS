"use server";

import { API } from "configs";
import { BasePaginatedDataInterface, UniversityInterface } from "interfaces";

export async function GetUniversity(): Promise<
  BasePaginatedDataInterface<UniversityInterface>
> {
  try {
    const resp = await API.get("configurations/university");
    return resp?.data.data;
  } catch (error) {
    console.log(error);
    return { rows: [], count: 0 };
  }
}
