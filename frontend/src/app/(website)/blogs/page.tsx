import { BlogCard } from "components/layout/cards/blog-cards";
import axios from "axios";


export default async function Blogs() {

  let BlogCardData: any = [];
  const BlogCardresponse = await axios.get(`${process.env.BASE_API_URL}/configurations/blog/not-featured`);
  BlogCardData = BlogCardresponse.data.data;
  

  let BlogCatagoriData = [];
  const BlogCatagoriResponse = await axios.get(`${process.env.BASE_API_URL}/configurations/blog/blog-category`);
  BlogCatagoriData = BlogCatagoriResponse.data.data.rows;

  let FeaturedBlogData: any = [];
  const FeaturedBlogResponse = await axios.get(`${process.env.BASE_API_URL}/configurations/blog/featured`);
  FeaturedBlogData = FeaturedBlogResponse.data.data;

  return (
    <>
      <section className="text-center container m-auto">
        <h2 className="font-extrabold text-5xl leading-[56px]">RiseBack Blogs</h2>
        <p>
          Updates on the latest career opportunities, Online Education, Online
          Universities, <span className="font-medium">& More</span>
        </p>
      </section>
      <section className="container mt-12 m-auto">
        <h2 className="font-bold">FEATURED BLOG POSTS</h2>
        <span className=" border-b-2 w-8 mb-4"></span>
        <div className="grid grid-cols-3 gap-8">

        {FeaturedBlogData.map((item : any, index: any) => (
            <BlogCard
              variant="primary"
              key={item.id}
              extraClasses={index === 0?'row-span-2 col-span-2':'col-span-1 row-span-1'}
              specialization={item}
              size= {index === 0?"l":"s"}
            />
          
        ))}
        </div>
      </section>

      <section className="container py-24 m-auto">
        <div className="flex">
          <div className="w-[70%] flex flex-wrap justify-between">
            {BlogCardData.map((item: any) => (
              <BlogCard
                variant="secondary"
                key={item.id}
                specialization={item}
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
