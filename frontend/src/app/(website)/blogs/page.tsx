import Image from "next/image";
import { BlogCard } from "components/layout/cards/blog-cards";
import axios from "axios";
import { useEffect } from "react";

export default async function Blogs() {
  const _data = [
    {
      BlogCardImg: "/img2/college-savings-concept_700248-1580.jpg",
      BlogCardDate: "22 September 2023",
      BlogCardHeading:
        "How affordable University education helps individuals, organizations, and the economy?",
      BlogCardtext:
        "Many people would argue current education needs a reboot,I totally agree and online education has the answer to it....",
    },
    {
      BlogCardImg: "/img2/lagos-city-Nigeria (1).jpg",
      BlogCardDate: "27 December 2023",
      BlogCardHeading:
        "How IT University Education can be game changer for Nigeria Startups & IT sector changer for Nigeria Startups &IT sector",
      BlogCardtext:
        "I am excited to announce that I have been appointed as Brand Ambassador Nigeria for RiseBack, an Edtech organization...",
    },
    {
      BlogCardImg: "/img2/college-savings-concept_700248-1580.jpg",
      BlogCardDate: "22 September 2023",
      BlogCardHeading:
        "How affordable University education helps individuals, organizations, and the economy?",
      BlogCardtext:
        "Many people would argue current education needs a reboot,I totally agree and online education has the answer to it....",
    },
    {
      BlogCardImg: "/img2/lagos-city-Nigeria (1).jpg",
      BlogCardDate: "27 December 2023",
      BlogCardHeading:
        "How IT University Education can be game changer for Nigeria Startups & IT sector changer for Nigeria Startups &IT sector",
      BlogCardtext:
        "I am excited to announce that I have been appointed as Brand Ambassador Nigeria for RiseBack, an Edtech organization...",
    },
    {
      BlogCardImg: "/img2/college-savings-concept_700248-1580.jpg",
      BlogCardDate: "22 September 2023",
      BlogCardHeading:
        "How affordable University education helps individuals, organizations, and the economy?",
      BlogCardtext:
        "Many people would argue current education needs a reboot,I totally agree and online education has the answer to it....",
    },
    {
      BlogCardImg: "/img2/lagos-city-Nigeria (1).jpg",
      BlogCardDate: "27 December 2023",
      BlogCardHeading:
        "How IT University Education can be game changer for Nigeria Startups & IT sector changer for Nigeria Startups &IT sector",
      BlogCardtext:
        "I am excited to announce that I have been appointed as Brand Ambassador Nigeria for RiseBack, an Edtech organization...",
    },
  ];

  let data: any = [];

  // const getBlogs = async () => {
  //   return await axios.get("http://localhost:5000/api/v1/blog");
  // };
  console.log(`${process.env.BASE_API_URL}/blog`)
  const response = await axios.get(`${process.env.BASE_API_URL}/blog`)

  data = response.data.data.rows;
  
  

  //   useEffect(()=> {
  // let data = getBlogs();
  //   },[])

  return (
    <>
      <section className="text-center">
        <h2 className="font-bold text-4xl">RiseBack Blogs</h2>
        <p>
          Updates on the latest career opportunities, Online Education, Online
          Universities, <span className="font-medium">& More</span>
        </p>
      </section>
      <section className="px-24 mt-12">
        <h2 className="font-bold">FEATURED BLOG POSTS</h2>
        <span className=" border-b-2 w-8 mb-4"></span>
        <div className="flex">
          <div className="w-[70%] shadow-2xl ">
            <Image
              height={400}
              width={500}
              alt="Test"
              src="/img2/Information-Technology.jpg"
              className="w-full"
            />
            <p className="font-bold py-4 px-4 text-xl">
              Can an Information Technology University degree be the road to
              achieving the American Dream ?
            </p>
          </div>
          <div className="w-[30%] px-8 ">
            <div className="shadow-2xl">
              <Image
                height={150}
                width={150}
                alt="Test"
                src="/img2/motivational-composition-goal-achievement_23-2150490032.jpg"
                className="w-full"
              />
              <p className="p-4 font-bold m-0">
                Unlocking Lucrative Opportunities : IT Courses in AI, ML,
                WebApps, Cloud, and Blockchain for Indonesians
              </p>
            </div>
            <div className="shadow-2xl mt-8">
              <Image
                height={150}
                width={200}
                alt="Test"
                src="/img2/motivational-composition-goal-achievement_23-2150490032.jpg"
                className="w-full"
              />
              <p className="p-4 font-bold m-0">
                Unlocking Lucrative Opportunities : IT Courses in AI, ML,
                WebApps, Cloud, and Blockchain for Indonesians
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-24 py-24">
        <div className="flex">
          <div className="w-[70%] flex flex-wrap justify-between">
            {data.map((item: any) => (
              <BlogCard
                key={item.id}
                BlogCardImg={item.blog_image}
                BlogCardDate={item.createdAt}
                BlogCardHeading={item.title}
                BlogCardtext={item.description}
              />
            ))}
          </div>

          <div className="w-[30%] px-8">
            <input
              type="text"
              placeholder="Search here"
              className="border w-full mb-4 p-3"
            />
            <h2 className="font-bold mb-4">Catagories</h2>
            <p className="my-2 border-b-2 pb-3">Academics</p>

            <p className="my-2 border-b-2 pb-3">Academics</p>

            <p className="my-2 border-b-2 pb-3">Academics</p>

            <p className="my-2 border-b-2 pb-3">Academics</p>

            <p className="my-2 border-b-2 pb-3">Academics</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-700 text-white px-4 py-2">
            Load More
          </button>
        </div>
      </section>
    </>
  );
}
