import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { SingleBlogInterface, relatedBlogInterface } from "interfaces/blog";
import moment from "moment";

export default async function SingleBlog({
  params,
}: {
  params: { id: string };
}) {
  let data: { blog: SingleBlogInterface; relatedBlogs: relatedBlogInterface[] };
  let url = `${process.env.BASE_API_URL}/configurations/blog/blog-detail/${params.id}/`;
  const response = await axios.get(url);
  data = response.data.data;  
  console.log(data.relatedBlogs.length, data.relatedBlogs)
  return (
    <>
      <section className="m-auto">
        <div className="container  m-auto">
          <div>
            <Image
              src={`${process.env.BASE_MEDIA_URL}/${data.blog.blog_image}`}
              height={550}
              width={500}
              alt=""
              className="w-full mt-4"
            />
            <h2 className="mt-4 font-semibold py-4 text-3xl mb-8">
              {data.blog.title}
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto">
          <div className="flex justify-between items-center  mb-8">
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
            <span dangerouslySetInnerHTML={{ __html: data.blog.description }}></span>
          </div>
        </div>
      </section>

      <section className=" mb-20">
        <div className="container m-auto">
          <h2 className="text-3xl font-bold mb-8">YOU MAY ALSO LIKE</h2>
          <div className="flex justify-between">
            {data.relatedBlogs.length
              ? data.relatedBlogs.map((item: relatedBlogInterface) => {
                  return (
                    <div className="w-[350px]">
                      <Image
                        src={`${process.env.BASE_MEDIA_URL}/${item?.blog_image}`}
                        height={200}
                        width={250}
                        alt=""
                        className="w-full h-52 mb-4"
                      />
                      <Link href={`/blogs/${item.id}`} className="text-black">
                      <h2 className="font-bold mb-2 text-lg">
                        {item.title}
                      </h2>
                      </Link>
                      <p>{moment(item.createdAt).format('Do MMMM  YYYY')}</p>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </section>
    </>
  );
}
