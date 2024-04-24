import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import {
  SingleBlogInterface,
  nextPreviousInterface,
  relatedBlogInterface,
} from "interfaces/blog";
import moment from "moment";
import CarouselCard from "app/(website)/event/components/CarouselCard";
import RelatedBlogCarousl from "../Components/CarouselCard";
import { ChevronLeft, ChevronRight } from "@carbon/icons-react";
export let metadata = {};

export default async function SingleBlog({
  params,
}: {
  params: { slug: string };
}) {
  let data: {
    blog: SingleBlogInterface;
    relatedBlogs: relatedBlogInterface[];
    next: nextPreviousInterface;
    previous: nextPreviousInterface;
    // featuredTab: { next: relatedBlogInterface[]; previous: relatedBlogInterface[] };
  };
  let url = `${process.env.BASE_API_URL}/configurations/blog/blog-detail/${params.slug}`;
  const response = await axios.get(url);
  data = response.data.data;

  if (data.blog.metaData) {
    metadata = data.blog.metaData;
  }
  return (
    <>
      <section className="m-auto">
        <div className="container m-auto">
          <div>
            <Image
              src={`${process.env.BASE_MEDIA_URL}/${data.blog.blog_image}`}
              // layout="fill"
              height={550}
              width={700}
              alt=""
              className="w-full desktop:h-[550px] h-[350px] mt-4 object-fill"
            />
            <h2 className="desktop:mt-4 font-semibold py-4 desktop:text-3xl laptop:text-3xl m-0 text-xl desktop:mb-8">
              {data.blog.title}
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto">
          <div className="flex flex-col desktop:flex-row laptop:flex-row justify-between desktop:items-center laptop:items-center items-start m-0 desktop:mb-8">
            <div className="flex items-center">
              <Image
                src="/img2/Author.svg"
                height={50}
                width={50}
                alt="Author"
                className="size-7 rounded-full mr-4 "
              />

              <p className="pr-8 font-bold">{data.blog.created_by?.name}</p>

              <p className="pr-8">
                {moment(data.blog.createdAt).format("MMMM DD, YYYY")}
              </p>
            </div>
            <div className="flex">
              <p className="pr-4">Share: </p>
              <div className="flex  items-center space-x-2">
                <Link href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7aCc%7C550525804797%7Cb%7Cfacebook%7C&placement=&creative=550525804797&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9062116%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAzJOtBhALEiwAtwj8tlRLfa3D8Xk-IzJia0f_qOBSkzf_lcm107Mv-YvgJLFknd5DKEA7mhoCCwQQAvD_BwE">
                  <Image
                    alt="img"
                    height={100}
                    width={100}
                    src="/img2/Group.svg"
                    className="size-7 bg-blue-900 rounded-full"
                  />
                </Link>
                <Link href="https://twitter.com/?lang=en">
                  <Image
                    alt="img"
                    height={100}
                    width={100}
                    src="/img2/xlogo.svg"
                    className="size-7 bg-blue-900 rounded-full"
                  />
                </Link>
                <Link href="https://in.linkedin.com/">
                  <Image
                    alt="img"
                    height={100}
                    width={100}
                    src="/img2/linkdinlogo.svg"
                    className="size-7 bg-blue-900 rounded-full"
                  />
                </Link>
                <Link href="https://www.instagram.com/accounts/login/?hl=en">
                  <Image
                    alt="img"
                    height={100}
                    width={100}
                    src="/img2/instagramlogo.svg"
                    className="size-7 bg-blue-900 rounded-full"
                  />
                </Link>
                <Link href="https://www.youtube.com/">
                  <Image
                    alt="img"
                    height={100}
                    width={100}
                    src="/img2/youtubeLogo.svg"
                    className="size-7 bg-blue-900 rounded-full"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <div
              dangerouslySetInnerHTML={{ __html: data.blog.description }}
            ></div>
          </div>
        </div>

        <div className="flex mb-4 container m-auto">
          <div className="text-right border-l-2 border-t-2 border-b-2 desktop:px-6 tablet:px-6 px-2 w-1/2">
            <div className="flex items-center justify-between">
              <ChevronLeft className="desktop:hidden size-5 " />
              <p className="desktop:mb-2 text-gray-500 text-lg desktop:text-xl tablet:text-xl font-semibold">
                Previous post
              </p>
            </div>
            <div className="hidden desktop:block">
              <h2 className="font-bold mb-2 text-lg">
                <Link
                  href={`/blogs/${data.previous.slug}`}
                  className="text-black"
                >
                  {data.previous.title}
                </Link>
              </h2>
              <p className="mb-2 text-gray-400 font-semibold">January 3 2023</p>
            </div>
          </div>
          <div className=" border-2 desktop:px-6 tablet:px-6 px-2 w-1/2">
            <div className="flex items-center justify-between">
              <p className="desktop:mb-2 text-gray-500 desktop:text-xl tablet:text-xl text-lg font-semibold">
                Next post
              </p>
              <ChevronRight className="desktop:hidden size-5" />
            </div>
            <div className="hidden desktop:block">
              <h2 className="font-bold mb-2 text-lg ">
                <Link href={`/blogs/${data.next.slug}`} className="text-black">
                  {data.next.title}
                </Link>
              </h2>
              <p className="mb-2 text-gray-400 font-semibold">
                September 9 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" mb-20">
        <div className="container m-auto">
          <h2 className="text-3xl font-bold mb-3">YOU MAY ALSO LIKE</h2>
          <div className="border-b-4 w-12 border-black mb-10"></div>
          <div className="laptop:flex desktop:flex justify-around gap-8 hidden">
            {data.relatedBlogs.length
              ? data.relatedBlogs.map((item: relatedBlogInterface) => {
                  return (
                    <div className="w-[350px]">
                      <Image
                        src={`${process.env.BASE_MEDIA_URL}/${item?.blog_image}`}
                        height={200}
                        width={250}
                        alt=""
                        className="w-[200px] desktop:w-[350px] tablet:w-[200px] h-52 mb-4"
                      />
                      <Link href={`/blogs/${item.slug}`} className="text-black">
                        <h2 className="font-bold px-2 mb-2 m-0 text-lg">
                          {item.title}
                        </h2>
                      </Link>
                      <p className="px-2">
                        {moment(item.createdAt).format("Do MMMM  YYYY")}
                      </p>
                    </div>
                  );
                })
              : ""}
          </div>
          <RelatedBlogCarousl
            data={data.relatedBlogs}
            className="desktop:hidden laptop:hidden"
          />
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
