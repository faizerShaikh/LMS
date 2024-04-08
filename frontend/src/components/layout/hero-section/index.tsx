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
    <section className="bg-gray-50 desktop:py-24 py-16">
      <div className="flex justify-between items-center container gap-10 desktop:container px-4 desktop:py-8 m-auto flex-col-reverse desktop:flex-row laptop:container laptop:flex-row">
        <div className="desktop:w-1/2 w-full flex flex-col justify-center">
          <Image
            alt="test"
            width={0}
            height={336}
            sizes="100vw"
            style={{ width: "100%" }}
            src={HeroImage}
            className="object-center rounded-xl"
          />
        </div>
        <div className="desktop:w-1/2 w-full">
          <h1 className="desktop:font-extrabold font-semibold text-[40px] leading-[56px] mt-0 mb-4">
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
