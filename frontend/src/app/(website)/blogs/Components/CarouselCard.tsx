"use client";
import { Image } from "components/layout";
import { CustomCarousel } from "components/layout/carousel";
import { relatedBlogInterface } from "interfaces/blog";
import moment from "moment";
import Link from "next/link";

export default function RelatedBlogCarousl({ data }: any) {
  return (
    <>
      <CustomCarousel dots={true} slidesToShow={1} autoplay={false}>
        {data.map((item: relatedBlogInterface) => {
          return (
            <div className="w-[350px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_MEDIA_URL}/${item?.blog_image}`}
                height={200}
                width={250}
                alt=""
                className="w-full h-52 mb-4"
              />
              <Link href={`/blogs/${item.slug}`} className="text-black">
                <h2 className="font-bold px-2 mb-2 m-0 text-lg line-clamp-3">
                  {item.title}
                </h2>
              </Link>
              <p className="px-2">
                {moment(item.createdAt).format("Do MMMM  YYYY")}
              </p>
            </div>
          );
        })}
      </CustomCarousel>
    </>
  );
}
