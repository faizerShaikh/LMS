
import { BlogCard } from "components/layout/cards/blog-cards";
import { SingleBlogInterface } from "interfaces/blog";

type props = {
  FeaturedBlogData: SingleBlogInterface[];
};

export default function FeaturedBlog({ FeaturedBlogData }: props) {

  return (
  <>
    <section className="container mt-12 m-auto">
    <h2 className="font-bold">FEATURED BLOG POSTS</h2>
    <span className=" border-b-2 w-8 mb-4"></span>
    <div className="grid grid-cols-3 gap-8">
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
 )
}


