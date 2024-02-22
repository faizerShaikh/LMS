import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { SingleBlogInterface } from "interfaces/blog";
import moment from 'moment';

export default async function SingleBlog({
  params,
}: {
  params: { id: string };
}) {
  let data: SingleBlogInterface;
  let url = `${process.env.BASE_API_URL}/blog/${params.id}/`;
  const response = await axios.get(url);
  data = response.data.data;
  // console.log(data)

  return (
    <>
      <section className="px-36">
        <div>
          <Image
            src={`${process.env.BASE_MEDIA_URL}${data.blog_image}`}
            height={550}
            width={500}
            alt=""
            className="w-full mt-4"
          />
          <h2 className="mt-4 font-semibold py-4 text-3xl mb-8">
            {data.title}
          </h2>
        </div>
      </section>
      <section className="px-36 mb-20">
        <div className="flex justify-between mb-8">
          <div className="flex">
            <i className="pr-8"></i>
            <p className="pr-8">
                {data.created_by.name}
              {/* By <span className="font-bold">Tausif Malik</span>{" "} */}
            </p>
            <p className="pr-8">{moment(data.createdAt).format('MMMM DD, YYYY')}</p>
          </div>
          <div className="flex">
            <p className="pr-4">Share: </p>
            <Link href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7aCc%7C550525804797%7Cb%7Cfacebook%7C&placement=&creative=550525804797&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9062116%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAzJOtBhALEiwAtwj8tlRLfa3D8Xk-IzJia0f_qOBSkzf_lcm107Mv-YvgJLFknd5DKEA7mhoCCwQQAvD_BwE" />
            <Image
              alt="img"
              height={20}
              width={20}
              src="/img2/Facebook.png"
              className="size-9 mr-3 bg-blue-800 rounded-full"
            />
            <Link href="https://twitter.com/?lang=en" />
            <Image
              alt="img"
              height={30}
              width={30}
              src="/img2/Twitter.png"
              className="size-9 mr-3 bg-blue-800 rounded-full"
            />
            <Link href="https://in.linkedin.com/" />
            <Image
              alt="img"
              height={30}
              width={30}
              src="/img2/Linkedin.png"
              className="size-9 mr-3 bg-blue-800 rounded-full"
            />
            <Link href="https://www.instagram.com/accounts/login/?hl=en" />
            <Image
              alt="img"
              height={30}
              width={30}
              src="/img2/Instagram.png"
              className="size-9 mr-3 bg-blue-800 rounded-full"
            />
          </div>
        </div>

        <div className="mb-14">
          <p>{data.description}</p>
        </div>
{/* 
        <div className="flex mb-4">
          <div className="text-right border-2 px-6 w-1/2">
            <p className="mb-2">Previous post</p>
            <h2 className="font-bold mb-2 text-lg">
              <a href="#" className="text-black">
                How IT University Education can be game changer for Nigeria
                Startups & IT sector
              </a>
            </h2>
            <p className="mb-2">January 3 2023</p>
          </div>
          <div className=" border-2 px-6 w-1/2">
            <p className="mb-2">Previous post</p>
            <h2 className="font-bold mb-2 text-lg">
              <a href="#" className="text-black">
                Unlocking Lucrative Opportunities: IT Courses in Al, ML, Web
                Apps, Cloud, and Blockchain for Indonesians
              </a>
            </h2>
            <p className="mb-2">September 9 2023</p>
          </div>
        </div> */}
      </section>

      <section className="px-36 mb-20">
        <h2 className="text-3xl font-bold mb-8">YOU MAY ALSO LIKE</h2>

        <div className="flex justify-between">
          <div className="w-[350px]">
            <Image
              src="/img2/ncept-with-robot-arms-23-2149739749.jpeg"
              height={200}
              width={250}
              alt=""
              className="w-full h-52 mb-4"
            />
            <h2 className="font-bold mb-2 text-lg">
              Time Magazine Recognizes Desi and Indian-Origin Techies in
              Inaugural 'TIME100 AI List
            </h2>
            <p>9 September 2023</p>
          </div>
          <div className="w-[350px]">
            <Image
              src="/img2/motivational-composition-goal-achievement_23-2150490032.jpg"
              height={200}
              width={250}
              alt=""
              className="w-full h-52 mb-4"
            />
            <h2 className="font-bold mb-2 text-lg">
              Unlocking Lucrative Opportunities: IT Courses in AI, ML, Web Apps,
              Cloud, and Blockchain for Indonesians
            </h2>
            <p>9 September 2023</p>
          </div>
          <div className="w-[350px]">
            <Image
              src="/img2/lagos-city-Nigeria (1).jpg"
              height={200}
              width={250}
              alt=""
              className="w-full h-52 mb-4"
            />
            <h2 className="font-bold mb-2 text-lg">
              How IT University Education can be game changer for Nigeria
              Startups & IT sector
            </h2>
            <p>27 December 2022</p>
          </div>
        </div>
      </section>
    </>
  );
}
