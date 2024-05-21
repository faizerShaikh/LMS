"use client";

import { useRouter } from "next/navigation";

type Props = {
  CourseCategories: [];
  category: string;
};

export default function CourseCategoryFilter({
  CourseCategories,
  category,
}: Props) {
  const router = useRouter();
  function handleClick(item: any) {
    router.push(`/courses?category=${item.slug}`);
  }

  return CourseCategories.map((item: any) => (
    <>
      <p
        key={item.id}
        onClick={() => handleClick(item)}
        className={`cursor-pointer ${
          category === item.slug
            ? "bg-blue-100 py-3 w-full text-start flex justify-between px-2  text-blue-700  rounded-md"
            : ""
        }  pb-2`}
      >
        {item.name}
      </p>
    </>
  ));
}
