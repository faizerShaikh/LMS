import Image from "next/image";
import { BlogCard } from "components/layout/cards/blog-cards";
import axios from "axios";
import { useEffect } from "react";
import { Categories } from "@carbon/icons-react";

export default async function Blogs() {
  // const CategoriesList = () => {

  let BlogCardData: any = [];
  const BlogCardresponse = await axios.get(`${process.env.BASE_API_URL}/blog`);
  BlogCardData = BlogCardresponse.data.data.rows;
  // console.log(BlogCardData)
  let BlogCatagoriData = [];
  const BlogCatagoriResponse = await axios.get(
    `${process.env.BASE_API_URL}/blog/blog-category`
  );
  BlogCatagoriData = BlogCatagoriResponse.data.data.rows;
  // console.log(BlogCatagoriData)

  let FeaturedBlogData: any = [];
  const FeaturedBlogResponse = await axios.get(
    `${process.env.BASE_API_URL}/blog/featured`
  );
  FeaturedBlogData = FeaturedBlogResponse.data.data;
  console.log(FeaturedBlogData);

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
          {FeaturedBlogData.map((item: any) => (
            <BlogCard
              variant="primary"
              key={item.id}
              BlogCardImg={item.blog_image}
              BlogCardHeading={item.title}
            />
          ))}
        </div>
      </section>

      <section className="px-24 py-24">
        <div className="flex">
          <div className="w-[70%] flex flex-wrap justify-between">
            {BlogCardData.map((item: any) => (
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

            {BlogCatagoriData.map((item: any) => (
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
