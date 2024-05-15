import { dataTagSymbol } from "@tanstack/react-query";
import { SingleBlogInterface } from "interfaces/blog";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import removeTags from "utils/removeTags";

export interface BlogCardProps {
  specialization: SingleBlogInterface;
  size?: "l" | "s";
  extraClasses?: string;
  variant: "primary" | "secondary";
}

const sizes = {
  l: { containerWidth: "w-[70%]", imageHeight: 350, fontSize: "text-3xl" },
  s: { containerWidth: "w-[30%]", imageHeight: 130, fontSize: "text-sm" },
};

export function BlogCard({
  specialization,
  size = "s",
  extraClasses,
  variant,
}: BlogCardProps) {
  if (variant === "primary") {
    return (
      <div
        className={`w-full shadow-2xl mb-6 desktop:mb-0 laptop:mb-0 ${extraClasses}`}
      >
        <Image
          height={sizes[size].imageHeight}
          width={500}
          alt="Test"
          src={`${process.env.BASE_MEDIA_URL}${specialization.blog_image}`}
          className="w-full bg-cover bg-center object-center"
        />
        <div className="px-4 pb-4">
          <Link href={`/blogs/${specialization.slug}`}>
            {" "}
            <h2
              className={`font-bold text-xl line-clamp-2 desktop:line-clamp-3 text-black py-2 m-auto ${sizes[size].fontSize}`}
            >
              {specialization.title}
            </h2>
          </Link>
        </div>
      </div>
    );
  } else if (variant === "secondary") {
    return (
      <div className="desktop:w-[45%] laptop:w-[45%] w-full shadow-2xl rounded pb-2 desktop:pb-0 laptop:pb-0 mb-10">
        <Image
          height={250}
          width={400}
          alt="Test"
          src={`${process.env.BASE_MEDIA_URL}${specialization.blog_image}`}
          className="w-full mb-4 rounded-t-md object-center object-cover desktop:h-[250px] laptop:h-[250px]  "
        />
        <div className="px-4">
          <p className="text-gray-500 !mb-1 m-0">
            {moment(specialization.createdAt).format("MMMM DD, YYYY")}
          </p>
          <Link href={`/blogs/${specialization.slug}`}>
            <h2 className="mb-4 text-black font-bold mt-0 line-clamp-3">
              {specialization.title}
            </h2>
          </Link>
          <div
            className="mb-8 line-clamp-4"
            dangerouslySetInnerHTML={{ __html: specialization.description }}
          ></div>
        </div>
      </div>
    );
  }
}
