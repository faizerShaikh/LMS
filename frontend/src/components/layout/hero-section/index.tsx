import React from "react";
import Image from "next/image";
import Link from "next/link";

interface prop {
  HeroImage: string;
  Herotitle: String;
  description: string;
  viewButton?: boolean;
  linkText?: string;
  buttonText?: string;
}

export function HeroSection({
  HeroImage,
  Herotitle,
  description,
  viewButton = true,
  linkText,
  buttonText,
}: prop) {
  return (
    <section className="bg-gray-50 py-24 ">
      <div className="flex justify-between items-center container  gap-10  m-auto">
        <div className="w-1/2 flex flex-col justify-center ">
          <Image
            alt="test"
            width={0}
            height={336}
            sizes="100vw"
            style={{ width: "100%" }}
            src={HeroImage}
            className="object-center "
          />
        </div>
        <div className="w-1/2 px-8">
          <h1 className="font-extrabold text-[40px] leading-[56px] mt-0 mb-4">
            {Herotitle}
          </h1>
          <div
            className="text-lg leading-6 font-Inter mb-7"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          {viewButton && linkText && (
            <Link href={linkText}>
              <button className="bg-blue-900 cursor-pointer py-2 px-4 font-Inter  text-white font-semibold text-base rounded-md">
                {buttonText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
