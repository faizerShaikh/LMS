import Image from "next/image";
import { Button } from "..";

export const ItCoursesCard = () => {
  return (
    <>
      <div className="desktop:flex desktop:flex-row flex flex-col-reverse items-center border border-black rounded-2xl">
        <div className="desktop:w-1/2 py-4 !px-4">
          <h2 className="font-bold desktop:text-4xl m-0 mb-2">Data Science</h2>
          <p className="font-medium desktop:text-lg mb-6">
            This Data Science, Artificial Intelligence, and Machine learning
            using python course dives into the basices of machine learning using
            an approchable, and well known, programming language
          </p>
          <div className="flex bg-gray-200 py-2 rounded-md mb-8">
            <div className="flex items-center w-1/2 px-4">
              <Image
                src="/img2/Star.png"
                alt=""
                width={100}
                height={100}
                className="size-12 mr-4"
              />
              <div>
                <p className="m-0 mb-1">Duration</p>
                <p className="font-bold m-0">4 Month</p>
              </div>
            </div>
            <div className="flex items-center desktop:w-1/2 px-4">
              <Image
                src="/img2/Star.png"
                alt=""
                width={100}
                height={100}
                className="size-12 mr-4"
              />
              <div>
                <p className="m-0 mb-1">Heighest salary</p>
                <p className="font-bold m-0">10 LPA &#x20B9;</p>
              </div>
            </div>
          </div>

          <div className="desktop:flex justify-between">
            <Button className="border desktop:py-3  text-white text-center desktop:w-[49%] w-full rounded-md mb-4">
              Know More
            </Button>
            <div className="border border-black rounded-md desktop:h-[51px] desktop:w-[49%]">
              <Button className=" desktop:py-3 bg-white text-black text-center w-full rounded-md">
                Book a Free Live Session
              </Button>
            </div>
          </div>
        </div>
        <div className="desktop:w-1/2  p-4">
          <Image
            width={500}
            height={400}
            alt="test"
            src="/img2/Home Page.jpg"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </>
  );
};
