import axios from "axios";
import { CommonPageInterface } from "interfaces/commonPage";
import { ImgProps } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

// export interface CommonPageProps {
//   heroText: string;
//   belowText: string;
//   heroImgSrc?: string;
//   rowImg1?: string;
//   rowImg2?: string;
//   rowImg3?: string;
//   rowImg4?: string;
//   rowHeading1: string;
//   rowHeading2: string;
//   rowHeading3: string;
//   rowHeading4: string;
//   rowtext1: string;
//   rowtext2: string;
//   rowtext3: string;
//   rowtext4: string;
// }

export interface CommonPageProps {
  specialization: CommonPageInterface;
  rowImg1?: string;
    rowImg2?: string;
    rowImg3?: string;
    rowImg4?: string;
    rowHeading1: string;
    rowHeading2: string;
    rowHeading3: string;
    rowHeading4: string;
    rowtext1: string;
    rowtext2: string;
    rowtext3: string;
    rowtext4: string;
}

export async function CommonPage({
  specialization, rowImg1,rowImg2,rowImg3,rowImg4,rowHeading1,rowHeading2,rowHeading3,rowHeading4,rowtext1,rowtext2,rowtext3,rowtext4
}: CommonPageProps) {

  let data: any = [];
  const res = await axios.get(`${process.env.BASE_API_URL}/configrations/page-content`);
data = res.data.row;
console.log(data)
  return (
    <>
      <section className="bg-gray-50 py-8 h-[400px]">
        <div className="flex justify-between items-start container  gap-10">
          <div className="w-1/2 ">
            <Image
              alt="test"
              width={0}
              height={336}
              sizes="100vw"
              style={{ width: "100%" }}
              src={specialization.coverImage}
              className="object-center "

            />
          </div>
          <div className="w-1/2 px-8 ">
            <h2 className="font-semibold text-5xl mt-0 mb-4">
              {specialization.title}
            </h2>
            <p className="font-medium mb-4 text-xl">{specialization.titleDescription}</p>
            <button className="bg-blue-900 py-1 px-4 text-white font-medium text-lg">
              Contact us
            </button>
          </div>
        </div>
      </section>
      <section className="py-24 container ">
        <div className="flex justify-between text-center">
          <div className="w-[300px]  rounded-xl shadow-xl h-[436px]">
            <Image
              alt="test"
              height={180}
              width={300}
              src={rowImg1}
              className="w-full rounded-t-xl"
            />
            <h2 className="font-bold text-xl my-2">{'rowHeading1'}</h2>
            <p className="px-4 text-sm  mb-4 font-medium text-gray-500">
              {'rowtext1'}
            </p>
          </div>
          <div className="w-[300px] rounded-xl shadow-xl h-[436px]">
            <Image
              alt="test"
              height={180}
              width={300}
              src={'rowImg2'}
              className="w-full rounded-t-xl"
            />
            <h2 className="font-bold text-xl px-1 my-2">{'rowHeading2'}</h2>
            <p className="px-4 text-sm  mb-4 font-medium text-gray-500">
              {rowtext2}
            </p>
          </div>
          <div className="w-[300px] rounded-xl shadow-xl h-[436px]">
            <Image
              alt="test"
              height={180}
              width={300}
              src={rowImg3}
              className="w-full rounded-t-xl"
            />
            <h2 className="font-bold text-xl my-2">{rowHeading3}</h2>
            <p className="px-4 text-sm  mb-4 font-medium text-gray-500">
              {rowtext3}
            </p>
          </div>
          <div className="w-[300px] rounded-xl shadow-xl h-[436px]">
            <Image
              alt="test"
              height={180}
              width={300}
              src={rowImg4}
              className="w-full rounded-t-xl"
            />
            <h2 className="font-bold text-xl my-2">{rowHeading4}</h2>
            <p className="px-4 text-sm mb-4 font-medium text-gray-500">
              {rowtext4}
            </p>
          </div>
        </div>
      </section>
      <section className=" py-14 bg-slate-100  ">
        <div className=" items-center flex justify-between container">
          <div className="w-1/2 p-4">
            <p className="font-medium text-2xl">{specialization.pageDescription}</p>
          </div>
          <div className="flex flex-col w-[500px] text-center">
            <form action="" className="border border-black bg-white p-12">
              <p className="font-semibold mt-0 mb-4">
                Please complete and submit the Enquiry form, one of our team
                member would contact you.
              </p>
              <input
                type="text"
                placeholder="Name "
                required
                className="w-full mb-4 border-2 rounded-md p-2"
              />
              <br />
              <input
                type="text"
                placeholder="Organization: "
                required
                className="w-full mb-4 border-2 rounded-md p-2"
              />
              <br />
              <input
                type="text"
                placeholder="Title/Designation: "
                required
                className="w-full mb-4 border-2 rounded-md p-2"
              />
              <br />
              <input
                type="email"
                placeholder="Email (only offical email): "
                required
                className="w-full mb-4 border-2 rounded-md p-2"
              />
              <br />
              <select className="w-full mb-4 border-2 rounded-md p-2">
                <option value="" disabled selected hidden>
                  Type of traning
                </option>
                <option value="#">abc</option>
                <option value="#">abc</option>
                <option value="#">abc</option>
              </select>
              <br />
              <input
                type="submit"
                className="w-full bg-blue-900 text-white py-1 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
