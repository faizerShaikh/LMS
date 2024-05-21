import Image from "next/image";
import { Button } from "..";
import { useGetAll } from "hooks";
import { CustomCourseInterface } from "interfaces";
import Link from "next/link";
import { CustomCarousel } from "components/layout/carousel";

export const ItCoursesCard = (item: any) => {
  // console.log(item, "<<<<<<<<<<<<<<<<<<<<item");

  // let { data, isLoading } = useGetAll({
  //   key: `/configurations/course-specialization?category=${item.item.slug}`,
  // });
  // console.log(data, "<<<<<<<<data");

  return (
    <>
      <CustomCarousel
        infinite={item.item.specializations.length > 1 ? true : false}
        slidesToShow={1}
      >
        {item.item.specializations.map((item: CustomCourseInterface) => {
          return (
            <div className="desktop:!flex  desktop:flex-row flex flex-col-reverse items-center border border-black rounded-2xl w-full">
              <div className="desktop:w-1/2 py-4 !px-4">
                <h2 className="font-bold desktop:text-4xl m-0 mb-2">
                  {item.name}
                </h2>
                <div
                  className="font-medium desktop:text-lg mb-6"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
                <div className="flex bg-gray-200 py-2 rounded-md mb-8">
                  <div className="flex items-center w-1/2 px-4">
                    <Image
                      src="/img2/Star.png"
                      alt=""
                      width={100}
                      height={100}
                      className="size-12 mr-4"
                    />
                    <div>
                      <p className="m-0 mb-1">Duration</p>
                      <div
                        className="font-bold m-0"
                        dangerouslySetInnerHTML={{ __html: item.days }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center desktop:w-1/2 px-4">
                    <Image
                      src="/img2/Star.png"
                      alt=""
                      width={100}
                      height={100}
                      className="size-12 mr-4"
                    />
                    <div>
                      <p className="m-0 mb-1">Heighest salary</p>
                      <p className="font-bold m-0">10 LPA &#x20B9;</p>
                    </div>
                  </div>
                </div>

                <div className="desktop:flex justify-between">
                  <Button className="border desktop:py-3  text-white text-center desktop:w-[49%] w-full rounded-md mb-4">
                    <Link
                      href={`/courses/${item?.slug}`}
                      className="text-white"
                    >
                      Know More
                    </Link>
                  </Button>
                  <div className="border border-black rounded-md desktop:h-[51px] desktop:w-[49%]">
                    <Button className=" desktop:py-3 bg-white text-black text-center w-full rounded-md">
                      Book a Free Live Session
                    </Button>
                  </div>
                </div>
              </div>
              <div className="desktop:w-1/2  p-4">
                <Image
                  width={500}
                  height={400}
                  alt="test"
                  src={`${process.env.NEXT_PUBLIC_BASE_MEDIA_URL}/${item.cover_image}`}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          );
        })}
      </CustomCarousel>
    </>
  );
};
