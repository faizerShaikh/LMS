"use server";

import { API } from "configs";
import {
  BasePaginatedDataInterface,
  Course,
  CourseSpecializationInterface,
} from "interfaces";

export async function getSingleCourse(
  slug: string
): Promise<CourseSpecializationInterface | null> {
  try {
    const resp = await API.get(
      "configurations/course-specialization/slug/" + slug
    );
    return resp?.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function GetCourse(): Promise<BasePaginatedDataInterface<Course>> {
  try {
    const resp = await API.get("configurations/course");

    return resp?.data.data;
  } catch (error) {
    console.log(error);
    return { rows: [], count: 0 };
  }
}
