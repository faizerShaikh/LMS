import Image from "next/image";
import { BlogCard } from "components/layout/cards/blog-cards";
import axios from "axios";
import { useEffect } from "react";
import { Categories } from "@carbon/icons-react";

export default async function Blogs() {
  // const CategoriesList = () => {

  let data: any = [];
  console.log(`${process.env.BASE_API_URL}/blog`);
  const response = await axios.get(`${process.env.BASE_API_URL}/blog`);
  data = response.data.data.rows;

  let data2 = [];
  const response2 = await axios.get(
    `${process.env.BASE_API_URL}/blog/blog-category`
  );
  data2 = response2.data.data.rows;
  // console.log(data2);

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
          {data.map((item: any) => {
            <BlogCard
              variant="primary"
              key={item.id}
              BlogCardImg={item.blog_image}
              BlogCardHeading={item.title}
            />;
          })}
        </div>
      </section>

      <section className="px-24 py-24">
        <div className="flex">
          <div className="w-[70%] flex flex-wrap justify-between">
            {data.map((item: any) => (
              <BlogCard
                variant="secondary"
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

            {data2.map((item: any) => (
              <p key={item.id}>{item.name}</p>
            ))}
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
