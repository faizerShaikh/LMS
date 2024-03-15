import { BlogDetailsInterface, SingleBlogInterface } from "interfaces/blog";
import { getBlogCategories, getSingleBlog } from "lib";
import React from "react";
import BlogForm from "../_components/blogForm";
import { PageHeader } from "components/layout/pageHeader";

type Props = {
  params: { slug: string };
};

const SingleBlog = async ({ params: { slug } }: Props) => {
  const isUpdate = slug !== "add";
  let initialValues: SingleBlogInterface = {
    slug: "",
    title: "",
    description: "",
    is_featured: false,
    blog_image: "",
    blog_category_id: "",
  };

  const categoryData = await getBlogCategories();

  let data :BlogDetailsInterface|null= null;
  if (isUpdate) {
    data = await getSingleBlog(slug);
    
    if(data){
      initialValues = {...initialValues,...data.blog}
    }

    
  }


  return (
    <>
      <PageHeader title={"Add Blog"}></PageHeader>
      <BlogForm categoryData={categoryData.rows} initialValues={initialValues} slug={slug} isUpdate={isUpdate}/>
    </>
  );
};

export default SingleBlog;
