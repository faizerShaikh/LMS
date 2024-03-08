"use client";
import { BlogCategory } from "interfaces/blogCategory";
import { useRouter } from "next/navigation";

type Props = {
  blogCategories: BlogCategory[];
  category: string;
};

export default function BlogCategoryFilter({
  blogCategories,
  category,
}: Props) {
  const router = useRouter();
  function handleClick(item: BlogCategory) {
    console.log(router);
    router.push(`/blogs?category=${item.slug}`);
  }

  return blogCategories.map((item: any) => (
    <>
      <p
        key={item.id}
        onClick={() => handleClick(item)}
        className={`cursor-pointer ${
          category === item.slug ? "font-semibold text-primary" : ""
        } border-b-2 pb-2` }
      >
        {item.name}
      </p>

    </>
  ));
}
