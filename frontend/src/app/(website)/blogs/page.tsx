import { BlogCard } from "components/layout/cards/blog-cards";
import axios from "axios";
import BlogCategoryFilter from "components/blogs/blog-category";
import FeaturedBlog from "components/blogs/fratured-blog";
import { BlogCategory } from "interfaces/blogCategory";
import LoadMoreButton from "components/blogs/loadMoreButton";

interface BlogSearchParams {
  category?: string;
  limit?: string;
  page?: string;
}

async function getFeaturedBlogs() {
  const FeaturedBlogResponse = await axios.get(
    `${process.env.BASE_API_URL}/configurations/blog/featured`
  );
  return FeaturedBlogResponse.data.data;
}

export default async function Blogs({
  searchParams: { category, limit, page },
}: {
  searchParams: { category: string; limit: string; page: string };
}) {
  let BlogCardData: any = [];
  let LoadMoreButtondata = false;

  try {
    const queryParams: BlogSearchParams = {};
    if (category) queryParams.category = category;
    if (limit) queryParams.limit = limit;
    if (page) queryParams.page = page;

    let BlogCardresponse = await axios.get(
      `${process.env.BASE_API_URL}/configurations/blog/not-featured`,
      {
        params: queryParams,
      }
    );

    BlogCardData = BlogCardresponse.data.data.blogs;
    LoadMoreButtondata = BlogCardresponse.data.data.hasMore;
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
  let BlogCatagoriData = [];
  const BlogCatagoriResponse = await axios.get(
    `${process.env.BASE_API_URL}/configurations/blog/blog-category`,
    {
      params: category ? { category } : "",
    }
  );
  BlogCatagoriData = BlogCatagoriResponse.data.data.rows;

  let FeaturedBlogData: any = await getFeaturedBlogs();

  const selectedCategory = BlogCatagoriData.find(
    (item: BlogCategory) => item.slug === category
  );

  return (
    <>
      <section className="text-center container m-auto mb-6">
        <h2 className="font-extrabold text-5xl leading-[56px]">
          RiseBack Blogs
        </h2>
        <p className="font-semibold text-xl">
          Updates on the latest career opportunities, Online Education, Online
          Universities, <span className="font-medium">& More</span>
        </p>
      </section>
      {!category && (
        <FeaturedBlog FeaturedBlogData={FeaturedBlogData}></FeaturedBlog>
      )}

      <section className="container pb-24 pt-12 m-auto">
        {category ? (
          <h2 className="font-semibold text-xl font-Inter mb-12 text-gray-600 m-0">
            {`Showing Blogs of ${selectedCategory.name}`}
          </h2>
        ) : (
          <>
            <h2 className="font-semibold text-xl text-gray-600 font-Inter uppercase mb-3">
              Latest Blogs
            </h2>
            <div className=" border-b-4 border-black w-12 mb-10"></div>
          </>
        )}

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
            <h2 className="font-bold mb-4">Categories</h2>

            <BlogCategoryFilter
              category={category}
              blogCategories={BlogCatagoriData}
            ></BlogCategoryFilter>
          </div>
        </div>
        {LoadMoreButtondata ? <LoadMoreButton /> : ""}
      </section>
    </>
  );
}

export const revalidate = 60;
