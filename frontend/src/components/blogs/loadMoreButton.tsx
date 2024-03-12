'use client'
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type prop = {};
export default function LoadMoreButton({}: prop) {
    const [currentpage, setpage] = useState(0)
    const router = useRouter();
    const searchParams = useSearchParams()

    useEffect(() => {
      const limit = searchParams.get('limit')
      const page = searchParams.get("page")

      if (limit === null || page === null) {
          setpage(0); 
      } else {
      }
  }, [searchParams]);


    
    const nextPage = currentpage + 1;
    console.log(router,"<===============router")

    function handleClick() {
        router.push(`/blogs?limit=6&page=${nextPage}`); 
        setpage(nextPage)     
    } 
    

    
  return (
    <div className="flex justify-center">
      <button className="bg-blue-700 text-white px-4 py-2" onClick={handleClick}>Load More</button>
    </div>
  );
}