import { Flag } from "@carbon/icons-react";
import { HeroSection } from "components/layout/hero-section";
import { GlobalPartnerInterface } from "interfaces/globalPartner";
import { getGlobalPartners } from "lib";
import Image from "next/image";
import Link from "next/link";

export default async function ContactUs() {
  let data: GlobalPartnerInterface[];
  let response = await getGlobalPartners();
  data = response.rows;
  return (
    <>
      <HeroSection
        HeroImage="/img2/Contact-Us-Page.jpg"
        Herotitle="Contact RiseBack"
        description="RiseBack.org stands as the world's premier affordable EdTech platform, pioneering accessible online university degree programs encompassing both undergraduate ,graduate studies and, specialized IT courses are available for as low as $250, ensuring quality education is with in reach for aspiring learners around the world."
        viewButton={false}
      ></HeroSection>

      <section className=" text-center bg-slate-100">
        <div className="desktop:py-12 py-6 px-10 container m-auto">
          <h2 className="font-semibold text-4xl m-0 pb-12">Enquiries</h2>
          {/* <div className="flex flex-wrap items-center justify-around"> */}
          <div className="desktop:flex flex-wrap items-center justify-around laptop:grid laptop:grid-cols-2 gap-5">
            <div className=" flex flex-col items-center mb-8 w-[100%] desktop:w-96 bg-white py-4 shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px] rounded-md">
              <div className="bg-blue-900 rounded-full size-20 mt-4">
                <Image
                  src="/img2/University-Degree.png"
                  alt=""
                  width={50}
                  height={50}
                  className="object-cover mt-3  "
                />
              </div>
              <h2 className="mb-3">University Degrees</h2>
              <Link href="/for-universities" className="text-blue-700">
                Know More{" "}
                <Image
                  src="/img2/know More.png"
                  alt="test"
                  width={13}
                  height={13}
                />
              </Link>
            </div>
            <div className=" flex flex-col items-center mb-8 w-[100%] desktop:w-96 bg-white py-4 shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px] rounded-md">
              <div className="bg-blue-900 rounded-full size-20 mt-4 ">
                <Image
                  alt="hehje"
                  src="/img2/Professional-IT-Course.png"
                  width={50}
                  height={50}
                  className="object-cover mt-3 "
                />
              </div>
              <h2 className="mb-3">Professional IT Courses</h2>
              <Link href="/courses" className="text-blue-700">
                Know More{" "}
                <Image
                  src="/img2/know More.png"
                  alt="test"
                  width={13}
                  height={13}
                />
              </Link>
            </div>
            <div className=" flex flex-col items-center mb-8 w-[100%] desktop:w-96 bg-white py-4 shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px] rounded-md">
              <div className="bg-blue-900 rounded-full size-20 mt-4 ">
                <Image
                  alt="hehje"
                  src="/img2/Government.png"
                  width={50}
                  height={50}
                  className="object-cover mt-3 "
                />
              </div>
              <h2 className="mb-3">Government</h2>
              <Link href="/for-government" className="text-blue-700">
                Know More{" "}
                <Image
                  src="/img2/know More.png"
                  alt="test"
                  width={13}
                  height={13}
                />
              </Link>
            </div>
            <div className=" flex flex-col items-center  mb-8 w-[100%] desktop:w-96 bg-white py-4 shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px] rounded-md">
              <div className="bg-blue-900 rounded-full size-20 mt-4 ">
                <Image
                  alt="hehje"
                  src="/img2/Corporate-Training.png"
                  width={50}
                  height={50}
                  className="object-cover mt-3 "
                />
              </div>
              <h2 className="mb-3">Corporate Training</h2>
              <Link href="/for-placement" className="text-blue-700">
                Know More{" "}
                <Image
                  src="/img2/know More.png"
                  alt="test"
                  width={13}
                  height={13}
                />
              </Link>
            </div>
            <div className=" flex flex-col items-center  mb-8 w-[100%] desktop:w-96 bg-white py-4 shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px] rounded-md">
              <div className="bg-blue-900 rounded-full size-20 mt-4 ">
                <Image
                  alt="hehje"
                  src="/img2/Organization.png"
                  width={50}
                  height={50}
                  className="object-cover mt-3 "
                />
              </div>
              <h2 className="mb-3">Organizations</h2>
              <Link href="/for-organization" className="text-blue-700">
                Know More{" "}
                <Image
                  src="/img2/know More.png"
                  alt="test"
                  width={13}
                  height={13}
                />
              </Link>
            </div>
            <div className=" flex flex-col items-center  mb-8 w-[100%] desktop:w-96 bg-white py-4 shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px] rounded-md">
              <div className="bg-blue-900 rounded-full size-20 mt-4 ">
                <Image
                  alt="hehje"
                  src="/img2/Partnership.png"
                  width={50}
                  height={50}
                  className="object-cover mt-3 "
                />
              </div>
              <h2 className="mb-3">Partnership</h2>
              <Link href="/for-partnership" className="text-blue-700">
                Know More{" "}
                <Image
                  src="/img2/know More.png"
                  alt="test"
                  width={13}
                  height={13}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="container text-center pb-24 m-auto">
          <h2 className=" text-4xl m-0 py-16 font-semibold">Global Offices</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {data.map((item: GlobalPartnerInterface) => {
              return (
                <div>
                  <Link href={`global-partner/${item.slug}`}>
                    <Image
                      alt="hehje"
                      width={200}
                      height={200}
                      src={`${process.env.BASE_MEDIA_URL}/${item.coverImage}`}
                      className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer"
                    />
                    <p className="text-black font-bold mt-2 text-lg">
                      {item.name}
                    </p>
                  </Link>
                </div>
              );
            })}

            {/* <div>
              <Link href={"./ethopia-event"}>
                <Image
                  alt="hehje"
                  width={200}
                  height={200}
                  src="/img2/Indonesia.jpg"
                  className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer"
                />
                <p className="text-black font-bold mt-2 text-lg">Indonesia</p>
              </Link>
            </div>
            <div>
              <Link href={"./ethopia-event"}>
                <Image
                  alt="hehje"
                  width={200}
                  height={200}
                  src="/img2/Nigeria.jpg"
                  className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer"
                />
                <p className="font-bold mt-2 text-lg text-black">Nigeria</p>
              </Link>
            </div>
            <div>
              <Link href={"./ethopia-event"}>
                <Image
                  alt="hehje"
                  width={400}
                  height={400}
                  src="/img2/Ethiopia.jpg"
                  className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer "
                />
                <p className="font-bold mt-2 text-lg text-black">Ethopia</p>
              </Link>
            </div>
            <div>
              <Link href={"./ethopia-event"}>
                <Image
                  alt="hehje"
                  width={300}
                  height={300}
                  src="/img2/Egypt.jpg"
                  className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer"
                />
                <p className="text-black font-bold mt-2 text-lg ">Egypt</p>
              </Link>
            </div>
            <div>
              <Link href={"./ethopia-event"}>
                <Image
                  alt="hehje"
                  width={200}
                  height={200}
                  src="/img2/Philippines.jpg"
                  className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer"
                />
                <p className="text-black font-bold mt-2 text-lg ">
                  Philippines
                </p>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
