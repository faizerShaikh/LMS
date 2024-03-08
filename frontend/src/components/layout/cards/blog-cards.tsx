import { SingleBlogInterface } from "interfaces/blog";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import removeTags from "utils/removeTags";



export interface BlogCardProps {
  specialization: SingleBlogInterface;
  size?: "l" | "s" ;
  extraClasses ?: string
  variant : "primary" | "secondary"
}

const sizes = {
  l: {containerWidth:"w-[70%]",imageHeight: 200,fontSize:"text-3xl" },
  s: {containerWidth:"w-[30%]",imageHeight: 100,fontSize:"text-sm" },
};

export function BlogCard({
  specialization,
  size = "s",
  extraClasses,
  variant
}: BlogCardProps) {
  // console.log(BlogCardImg ,BlogCardDate, BlogCardHeading, BlogCardtext, variant);

  if (variant === "primary") {
    return (
      <div className={`w-full shadow-2xl ${extraClasses}`}>
        <Image
          height={sizes[size].imageHeight}
          width={500}
          alt="Test"
          src={`${process.env.BASE_MEDIA_URL}${specialization.blog_image}`}
          className="w-full bg-cover bg-center object-center"
        />
        <div className="px-4 pb-4">
        <Link href= {`/blogs/${specialization.slug}`}> <h2 className={`font-bold text-xl text-black py-2 m-auto ${sizes[size].fontSize}`}>{specialization.title}</h2></Link>
        </div>
      </div>
    );
  } else if (variant === "secondary") {
    return (
      <div className="w-[45%] shadow-2xl rounded-lg mb-10">
        <Image
          height={200}
          width={400}
          alt="Test"
          src={`${process.env.BASE_MEDIA_URL}${specialization.blog_image}`}
          className="w-full mb-4 rounded-t-lg object-center"
        />
        <div className="px-4">
          <p className="text-gray-400 mb-4 m-0">{moment(specialization.createdAt).format("MMMM DD, YYYY")}</p>
          <Link href={`/blogs/${specialization.id}`}><h2 className="mb-4 text-black font-bold truncate-lines h-20">{specialization.title.slice(0, 50)}...</h2></Link>
          <p className="mb-8 truncate-lines">{ removeTags(specialization.description.slice(0, 90))}...</p>
        </div>
      </div>
    );
  }
}
