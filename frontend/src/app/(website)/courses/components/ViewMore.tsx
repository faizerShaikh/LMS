"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type prop = {};
export default function ViewMore({}: prop) {
  let [currentLimit, newLimit] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const limit = searchParams.get("limit");

    if (limit === null) {
      newLimit(6);
    } else {
    }
  }, [searchParams]);

  const newState = currentLimit + 6;
  function handleClick() {
    router.push(`/courses?limit=${newState}`);
    newLimit(newState);
  }

  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-700 text-white px-4 py-2"
        onClick={handleClick}
      >
        Load More
      </button>
    </div>
  );
}
