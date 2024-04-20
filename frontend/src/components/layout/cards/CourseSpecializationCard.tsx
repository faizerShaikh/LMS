import React from "react";
import { Button, Image } from "..";
import { CourseSpecializationInterface } from "interfaces";
import { CustomCarousel } from "../carousel";
import { useGetAll } from "hooks";
import Variants from "components/home/skeleton";

export const CourseSpecializationCard = (item: any) => {
  const { data, isLoading } = useGetAll({
    key: `/configurations/course-specialization?category=${item.item.slug}`,
  });
  return (
    <section className="w-full px-10 pb-10">
      {isLoading && (
        <CustomCarousel infinite={false} slidesToShow={3}>
          <Variants></Variants>
          <Variants></Variants>
          <Variants></Variants>
        </CustomCarousel>
      )}
      {!isLoading && (!data || !data?.rows.length) && (
        <div>No Course For Selected Category</div>
      )}
      {!isLoading && !!data?.rows?.length && (
        <CustomCarousel
          infinite={data.rows.length >= 3}
          slidesToShow={data.rows.length >= 3 ? 3 : data.rows.length}
        >
          {data.rows.map((item: CourseSpecializationInterface) => {
            return (
              <div className="border !w-[350px] h-[470px] rounded-2xl  shadow-lg  m-0">
                <div className="border-b-2 mb-3 ">
                  <Image
                    width={200}
                    height={180}
                    src={`${process.env.NEXT_PUBLIC_BASE_MEDIA_URL}/${item.cover_image}`}
                    alt=""
                    className="rounded-t-2xl w-full"
                  />
                  <div className="flex items-center h-[68px]">
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
      )}
    </section>
  );
};
