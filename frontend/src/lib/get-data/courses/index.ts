"use server";

import { API } from "configs";
import { CourseSpecializationInterface } from "interfaces";

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
