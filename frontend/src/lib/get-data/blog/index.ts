"use server";

import { API } from "configs";
import { BasePaginatedDataInterface } from "interfaces";
import { BlogDetailsInterface } from "interfaces/blog";
import { BlogCategory } from "interfaces/blogCategory";


export async function getSingleBlog(slug:string):Promise<BlogDetailsInterface|null> {
    try {
      const resp = await API.get("/configurations/blog/blog-detail/"+slug);
      // console.log(resp,"<,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
      return resp?.data?.data || {};
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  
export async function getBlogCategories():Promise<BasePaginatedDataInterface<BlogCategory>> {
  try {
    const resp = await API.get("/configurations/blog/blog-category");
    // console.log(resp);
    
    return resp?.data?.data || [];
  } catch (error) {
    console.log(error);
    return {rows:[],count:0} ;
  }
}
