"use client";
import { Image } from "components/layout";
import { CustomCarousel } from "components/layout/carousel";

export default function CarouselCard({ data }: any) {
  return (
    <>
      <CustomCarousel slidesToShow={4}>
        {data.map((item: string) => {
          return (
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_MEDIA_URL}/${item}`}
              height={150}
              width={200}
              alt="test"
              className="shadow-xl desktop:!w-[279px] laptop:w-[250px] my-10 mx-0 object-none"
            />
          );
        })}
      </CustomCarousel>
    </>
  );
}
