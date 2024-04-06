import React from "react";
import { Button, Image } from "..";
import { CourseSpecializationInterface } from "interfaces";
import { CustomCarousel } from "../carousel";

export interface CourseSpecializationCardProps {
  data: CourseSpecializationInterface[];
}
export const CourseSpecializationCard = ({
  data,
}: CourseSpecializationCardProps) => {
  // console.log(data, "datadata");
  return (
    <section className="">
      <CustomCarousel>
        {data.map((item) => {
          return (
            <div className="border w-[320px] h-[500px] rounded-2xl  shadow-lg z-20 m-10">
              <div className="border-b-2 mb-3">
                <Image
                  width={200}
                  height={180}
                  src={`${process.env.NEXT_PUBLIC_BASE_MEDIA_URL}/${item.cover_image}`}
                  alt=""
                  className="rounded-t-2xl w-full"
                />
                <div className="flex items-center">
                  <Image
                    width={100}
                    height={100}
                    src={`${process.env.NEXT_PUBLIC_BASE_MEDIA_URL}/${item.university?.university_image}`}
                    alt=""
                    className="w-32 h-16 "
                  />
                  <h2 className="border-l-2 border-black px-2 font-bold text-lg">
                    {item.university?.name}
                  </h2>
                </div>
              </div>
              <div>
                <div className="mb-3 px-4">
                  <p className="flex  ">
                    <Image
                      width={100}
                      height={100}
                      src="/img2/time_7093820.png"
                      alt=""
                      className="size-6 mr-2 mb-2"
                    />
                    {item.duration}
                  </p>
                  <p className="flex  ">
                    <Image
                      width={100}
                      height={100}
                      src="/img2/Star.png"
                      alt=""
                      className="size-6 mr-2 mb-2"
                    />
                    {item.university?.no_of_courses}
                  </p>
                  <p className="flex  ">
                    <Image
                      width={100}
                      height={100}
                      src="/img2/certificate.png"
                      alt=""
                      className="size-6 mr-2 mb-2"
                    />
                    WES Regonised
                  </p>
                </div>
                <div className="flex justify-between px-3 mb-3">
                  <Button className="px-1 py-2 border-2 w-[49%] rounded-lg ">
                    View program
                  </Button>
                  <Button className="px-1 py-2 border-2 w-[49%] rounded-lg bg-blue-900 text-white ">
                    Syllabus
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </CustomCarousel>
    </section>
  );
};
