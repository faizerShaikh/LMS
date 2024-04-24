import { GlobalPartnerInterface } from "interfaces/globalPartner";
import { getGlobalPartners } from "lib";
import Image from "next/image";
import Link from "next/link";
import { FaFistRaised } from "react-icons/fa";

export default async function AboutUs() {
  let data: GlobalPartnerInterface[];
  let response = await getGlobalPartners();
  data = response.rows;
  return (
    <>
      <section className="bg-gray-100 flex flex-col desktop:flex-row desktop:justify-between tablet:flex-row  desktop:h-[400px] ">
        <div className="container flex flex-col desktop:flex-row  m-auto ">
          <div className="w-full desktop:w-1/2  ">
            <Image
              width={500}
              height={400}
              src={"/img2/About-Us-page.jpg"}
              alt="IMG"
              className="w-full desktop:w-[500px] desktop:h-[400px] h-[300px]"
            />
          </div>
          <div className="flex items-center w-full desktop:w-1/2">
            <p className="text-2xl desktop:text-4xl desktop:leading-[48px]">
              Inspired by the Native American adage{" "}
              <span className="font-bold">"RiseBack like Phoenix”</span>, the
              platform embodies renewal, hope, and empowerment.
            </p>
          </div>
        </div>
      </section>
      <section className="my-10 desktop:my-32 text-center">
        <div className="container m-auto">
          <h2 className="text-3xl desktop:text-4xl font-bold mt-0 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            Inspired by the Native American adage "RiseBack like Phoenix”, the
            platform embodies renewal, hope, and empowerment. Founded by
            Dr.Tausif Malik in 2015, RiseBack initially addressed the need to
            empower Americans with IT skills for career growth. Amidst the
            global pandemic, the landscape of education under went as ignificant
            digital transformation.
          </p>
          <p className="text-xl text-gray-700 mb-4">
            Recognizing this shift, redefined its mission. Today, RiseBack
            stands as the first EdTech platform connecting Indian universities
            with students worldwide.
          </p>
          <p className="text-xl text-gray-700 mb-4">
            This evolution prompted intensive research and discussion swith
            Indian universities, as the RiseBack team seized the opportunity to
            bridge the global education gap.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 desktop:py-32 py-10">
        <div className="container  m-auto">
          <div className="flex flex-col-reverse desktop:flex-row  mb-24 items-center">
            <div className="w-full desktop:w-2/4  text-center  desktop:pr-12 flex flex-col  items-center ">
              <h2 className="text-3xl desktop:text-4xl font-bold mb-2 ">
                Vision
              </h2>
              <p className="text-xl text-gray-700 desktop:px-8">
                Our vision at RiseBack is to create a world where access to
                affordable education empowers individuals, transcending barriers
                and unlocking bound less opportunities for personal and
                professional growth.
              </p>
            </div>
            <div className="w-full desktop:w-2/4 text-center">
              <Image
                width={500}
                height={400}
                src="/img2/businessman-big-office.jpg"
                className=" w-full rounded-lg h-[300px] desktop:w-full desktop:h-[400px]"
                alt="img"
              />
            </div>
          </div>
          <div className="flex flex-col desktop:flex-row  items-center">
            <div className="w-full desktop:w-2/4 text-center">
              <Image
                width={500}
                height={400}
                src="/img2/motivational-composition-goal.jpg"
                className="w-full rounded-lg  h-[300px] desktop:w-full desktop:h-[400px]"
                alt="img"
              />
            </div>
            <div className="w-full desktop:w-2/4 text-center desktop:pl-12">
              <h2 className="text-3xl desktop:text-4xl font-bold mb-6 ">
                Mission
              </h2>
              <p className="text-xl text-gray-700 desktop:px-8">
                Our mission is to empower students and professional swith
                affordable education, fostering a pathway to knowledge and
                success..
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-900 desktop:py-32 py-10">
        <div className=" text-center text-white container  m-auto">
          <h2 className="desktop:pb-8 text-3xl desktop:text-4xl m-0">
            Our Core Values
          </h2>
          <div className="grid laptop:grid-cols-2 desktop:grid-cols-4 tablet:grid-cols-2 gap-5 justify-center items-center desktop:flex-row ">
            <div className="w-2/4 desktop:m-auto  tablet:m-auto ">
              <h2 className="text-xl desktop:text-2xl font-medium	">
                Empowerment
              </h2>
              <Image
                width={150}
                height={150}
                alt="test"
                src="/img2/Empowerment.svg"
              />
            </div>
            <div className="w-2/4 desktop:m-auto  tablet:m-auto ">
              <h2 className="text-xl desktop:text-2xl font-medium	">
                Development
              </h2>
              <Image
                width={150}
                height={150}
                alt="test"
                src="/img2/Developement.svg"
              />
            </div>
            <div className="w-2/4 desktop:m-auto  tablet:m-auto ">
              <h2 className="text-xl desktop:text-2xl font-medium	">
                Entrepreneurship
              </h2>
              <Image
                width={150}
                height={150}
                alt="test"
                src="/img2/Entrepreneurship.svg"
              />
            </div>
            <div className="w-2/4 desktop:m-auto  tablet:m-auto  ">
              <h2 className="text-xl desktop:text-2xl font-medium	">Growth</h2>
              <Image
                width={150}
                height={150}
                alt="test"
                src="/img2/Growth.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" text-center desktop:py-32 py-10">
        <div className="container m-auto">
          <h2 className="text-2xl desktop:text-4xl  m-0">Global Partnership</h2>
          <p className="text-xl text-gray-700 pb-8">
            pursuit of our commitment to affordable education, RiseBack has
            forged partnerships with individuals and organizations worldwide,
            extending our reach and impact across countries such as the USA,
            Egypt, Nigeria, Indonesia, Ethiopia, and the Philippines. <br />
            <br />
            Our dedication to fostering global connectivity between Indian
            universities and students is inspired by the transformative
            symbolism of the phoenix.Through these collaborations, RiseBack
            strives to make quality education accessible to everyone,
            transcending geographical boundaries and creating a global network
            for knowledged is semination and empowerment.
          </p>
          <div className="flex flex-wrap justify-center gap-10 mb-8">
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
          </div>
          <button className="bg-blue-900 py-2 px-6 text-white text-lg cursor-pointer rounded-md">
            Join us in making a diffrence in people's lives.
          </button>
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
