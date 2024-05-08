import { BlogCard } from "components/layout/cards/blog-cards";
import { SingleBlogInterface } from "interfaces/blog";

type props = {
  FeaturedBlogData: SingleBlogInterface[];
};

export default function FeaturedBlog({ FeaturedBlogData }: props) {
  return (
    <>
      <section className="container mt-12 m-auto">
        <h2 className="font-bold mb-2">FEATURED BLOG POSTS</h2>
        <div className=" border-b-4 border-black w-12 mb-4"></div>
        <div className="desktop:grid desktop:grid-cols-3 desktop:gap-8 laptop:grid laptop:grid-cols-3 laptop:gap-8 ">
          {FeaturedBlogData.map((item: any, index: any) => (
            <BlogCard
              variant="primary"
              key={item.id}
              extraClasses={
                index === 0 ? "row-span-2 col-span-2" : "col-span-1 row-span-1"
              }
              specialization={item}
              size={index === 0 ? "l" : "s"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
