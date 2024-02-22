import axios from "axios";
import { EnquiryForm } from "components/enquiry-form";
import { CommonPageInterface, GalleryInterface } from "interfaces/commonPage";
import Image from "next/image";
import Link from "next/link";

export default async function SinglePage({
  params,
}: {
  params: { name: string };
}) {
  let commonPageData: CommonPageInterface;
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configrations/page-content/${params.name}`
  );
  commonPageData = res?.data?.data;


  return (
    <>
      <section className="bg-gray-50 py-24 ">
        <div className="flex justify-between items-center container  gap-10  ">
          <div className="w-1/2 flex flec-col justify-center ">
            <Image
              alt="test"
              width={0}
              height={336}
              sizes="100vw"
              style={{ width: "100%" }}
              src={`${process.env.BASE_MEDIA_URL}/${commonPageData?.coverImage}`}
              className="object-center "
            />
          </div>
          <div className="w-1/2 px-8">
            <h1 className="font-extrabold text-[40px] leading-[56px] mt-0 mb-4">
              {commonPageData?.title}
            </h1>
            <p className="text-lg leading-6 font-Inter mb-7">
              {commonPageData?.titleDescription}
            </p>
            <Link href= "/contact-us"><button className="bg-blue-900  py-2 px-4 font-Inter  text-white font-semibold text-base rounded-md">
              Contact Us
            </button></Link> 
          </div>
        </div>
      </section>
      <section className="py-24 container ">
        <div className="flex justify-between text-center gap-5 flex-warp">
          {commonPageData.gallery.map((item: GalleryInterface) => {
            return (
              <div className="w-1/4  rounded-xl shadow-xl">
                <Image
                  alt="Gallery image"
                  height={180}
                  width={300}
                  src={`${process.env.BASE_MEDIA_URL}${item?.coverImage}`}
                  className="w-full rounded-t-xl"
                />
                <div className="mb-8">
                <h2 className="font-bold text-xl px-1 m-0 mt-2">{item?.name}</h2>
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
        <div className=" items-center flex justify-between container">
          <div className="w-1/2 p-4">
            <p className="font-medium text-2xl">
              {commonPageData?.pageDescription}
            </p>
          </div>
          <EnquiryForm/>
        </div>
      </section>
    </>
  );
}
