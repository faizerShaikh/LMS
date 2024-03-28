"use client";
import { Image } from "components/layout";
import { CustomCarousel } from "components/layout/carousel";

export default function CarouselCard({ data }: any) {
  return (
    <>
      <CustomCarousel>
        {data.map((item: string) => {
          return (
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_MEDIA_URL}/${item}`}
              height={150}
              width={200}
              alt="test"
              className="shadow-2xl !w-auto my-10 object-none"
            />
          );
        })}
      </CustomCarousel>
    </>
  );
}
