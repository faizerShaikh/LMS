"use client";
import { Image } from "components/layout";
import { useState, useEffect } from "react";

function LinkPreview({ url }: any) {
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const title = doc.querySelector("title")?.textContent || "";
        const description =
          doc
            .querySelector('meta[name="description"]')
            ?.getAttribute("content") || "";
        const image =
          doc
            .querySelector('meta[property="og:image"]')
            ?.getAttribute("content") || "";

        setPreviewData({ image });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!previewData) {
    return (
      <Image
        height={200}
        width={200}
        // layout="fill"
        alt="tets"
        src="/img2/Untitled-1.jpg"
        className="mb-4 w-full"
      />
    );
  }

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      {previewData?.image && (
        <Image
          src={previewData?.image}
          height={200}
          width={200}
          alt="Link Preview"
          className="w-full mb-4"
        />
      )}
    </div>
  );
}

export default LinkPreview;
