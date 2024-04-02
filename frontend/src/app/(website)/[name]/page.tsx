import axios from "axios";
import { EnquiryForm } from "components/enquiry-form";
import { PageContentInterface, GalleryInterface } from "interfaces/commonPage";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "components/layout/hero-section";
export let metadata = {};
export default async function SinglePage({
  params,
}: {
  params: { slug: string; name: string };
}) {
  let commonPageData: PageContentInterface;
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/page-content/${params.name}`
  );

  commonPageData = res?.data?.data;
  // console.log(
  //   commonPageData,
  //   "<============================================================================hello"
  // );
  // console.log("Name :", params.slug);
  // if (commonPageData.metaData) {
  //   metadata = commonPageData.metaData;
  // }

  return (
    <>
      <HeroSection
        HeroImage={`${process.env.BASE_MEDIA_URL}/${commonPageData?.coverImage}`}
        Herotitle={commonPageData?.title}
        description={commonPageData?.titleDescription}
        linkText="/contact-us"
        buttonText="Contact Us"
      />

      <section className="py-24 ">
        <div className="flex flex-wrap text-center gap-5 m-auto container">
          {commonPageData?.gallery.map((item: GalleryInterface) => {
            return (
              <div className="w-[300px]  rounded-xl shadow-xl ">
                <Image
                  alt="Gallery image"
                  height={180}
                  width={300}
                  src={`${process.env.BASE_MEDIA_URL}/${item?.coverImage}`}
                  className="w-full rounded-t-xl"
                />
                <div className="mb-8">
                  <h2 className="font-bold text-xl px-1 m-0 mt-2">
                    {item?.name}
                  </h2>
                  <p className="px-4 text-sm  mb-4 font-medium text-gray-500">
                    {item?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className=" py-14 bg-slate-100  ">
        <div className=" items-center flex justify-between container m-auto">
          <div className="w-1/2 p-4">
            <p className="font-medium text-2xl">
              {commonPageData?.pageDescription}
            </p>
          </div>
          <EnquiryForm from={params.name} />
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
