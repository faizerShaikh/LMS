import axios from "axios";
import { EnquiryForm } from "components/enquiry-form";
import { PageContentInterface, GalleryInterface } from "interfaces/commonPage";
import Image from "next/image";
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

  if (commonPageData.metaData) {
    metadata = commonPageData.metaData;
  }

  return (
    <>
      <HeroSection
        HeroImage={`${process.env.BASE_MEDIA_URL}/${commonPageData?.coverImage}`}
        Herotitle={commonPageData?.title}
        description={commonPageData?.titleDescription}
        linkText="/contact-us"
        buttonText="Contact Us"
      />

      <section className="desktop:py-24 py-10">
        {/* <div className="desktop:flex desktop:flex-wrap desktop:justify-between flex flex-col justify-center items-center text-center flex-wrap gap-5 m-auto  container"> */}
        <div className=" grid desktop:grid-cols-4 tablet:grid-cols-2  text-center gap-5 m-auto   container ">
          {commonPageData?.gallery.map((item: GalleryInterface) => {
            return (
              <div className="w-[300px] mx-auto rounded-xl shadow-[rgba(17,_17,_26,_0.3)_0px_0px_16px] ">
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
      <section className="py-8 desktop:py-14 bg-slate-100  ">
        <div className=" items-center flex flex-col desktop:flex-row laptop:flex-row justify-between container m-auto">
          <div className="desktop:w-1/2 laptop:w-1/2 w-full p-4">
            <p className="font-medium desktop:text-3xl laptop:text-2xl text-xl">
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
