import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { CoursesCard } from "components/layout/cards/CourseCard";

export default async function courses() {
  let CoursesCatagoriData = [];
  const CatagorieResponse = await axios.get(
    `${process.env.BASE_API_URL}/configurations/course/`
  );
  CoursesCatagoriData = CatagorieResponse.data.data.rows;

  let CoursesCardData: any = [];
  const response = await axios.get(
    `${process.env.BASE_API_URL}/configurations/course-specialization`
  );
  CoursesCardData = response.data.data.rows;
  // console.log(CoursesCardData);

  return (
    <>
      <section className="bg-gray-100 h-[400px] ">
        <div className="flex container ">
          <div className="w-2/4 flex justify-around">
            <Image
              height={400}
              width={450}
              src="/img2/IT-Course-page.jpg"
              alt=""
            />
          </div>
          <div className="w-2/4 px-8 ">
            <h2 className="ffont-extrabold text-5xl leading-[56px]  mb-4">Popular IT Courses</h2>
            <p className="font-medium text-xl mb-4">
              Explore a world of possibilities in the digital realm with our IT
              courses designed to unlock global opportunities.
            </p>
            <p className="font-medium text-xl mb-4">
              Divein to cutting-edge technologies such as AI, ML, web
              applications, cloud computing, and blockchain, and gain the skills
              needed to navigate the dynamic digital landscape.
            </p>
            <button className="bg-blue-900 py-2 text-xl px-4 text-white">
              Explore Professional Courses
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-center my-16">
            <h2 className="font-semibold text-4xl mb-4">
              Start a Brand-New Career in as few as Six Weeks !
            </h2>
            <p className="font-medium text-2xl">
              Accelerate Your Future : Acquire In-Demand IT Technologies
            </p>
          </div>

          <div className="flex">
            <div className="w-3/4 flex flex-wrap">
              {CoursesCardData.map((item: any) => {
                console.log(CoursesCardData)
                return <CoursesCard specialization={item} />;
              })}
              
            </div>

            <div className="w-1/4 shadow-2xl mb-4 rounded-md p-4 border-2">
              <h2 className="text-xl font-bold m-0 ">Categories</h2>
              <ul className="p-0">
                <button className="bg-blue-100 py-3 w-full text-start  text-blue-700  rounded-md">
                  Most Popular
                </button>
                {CoursesCatagoriData.map((item: any) => (
                  <p key={item.id}>{item.name}</p>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-evenly my-12">
            <button className="bg-blue-900 text-white py-2 px-4 rounded-md">
              View all(14 more)
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container py-16">
          <div className="mb-8">
            <h2 className="text-center font-semibold text-3xl mb-6 ">
              Unlocking Global Opportunities: Navigating the Digital Landscape
              with IT Courses
            </h2>
            <p className="font-medium text-xl">
              In this era driven by digital advancements, there is a growing
              demand for IT professionals well-versed in cutting-edge
              technologies worldwide. As the digital ecosystem rapidly expands,
              industries globally embrace artificial intelligence (AI), machine
              learning (ML), web applications, cloud computing, and blockchain,
              creating an unprecedented need for skilled professionals on a
              global scale. Explore the significance of IT courses in these
              domains and sheds light on the income potential for individuals
              pursuing careers in these groundbreaking fields.
            </p>
          </div>
          <div>
            <h2 className="text-center font-semibold text-3xl mb-6 ">
              The Growing Relevance of IT Courses
            </h2>
            <p className="font-medium text-xl mb-4">
              <span className="font-bold">Al and ML:</span> Globally
              transforming industries, Al and ML drive innovation and efficiency
            </p>
            <p className="font-medium text-xl mb-4">
              <span className="font-bold">Web Applications:</span> In a world
              reliant on web-based solutions, proficiency in web application
              development is invaluable, meeting the high demand in areas like
              e-commerce, social networking, and enterprise software
            </p>
            <p className="font-medium text-xl mb-4">
              <span className="font-bold">Cloud Computing:</span>{" "}
              Revolutionizing business operations, cloud technology offers
              scalability, cost-efficiency, and flexibility, propelling the
              demand for IT professionals skilled in platforms like AWS, Azure,
              or Google Cloud
            </p>
            <p className="font-medium text-xl mb-4">
              <span className="font-bold">Blockchain: </span>Providing
              transparency, security, and efficiency, blockchain technology
              finds applications in finance, supply chain, healthcare, and
              emerging sectors globally.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="text-center">
          <button className=" border-2 bg-white border-blue-900  px-4 text-lg rounded-3xl">
            <Link href = "/webinar" className="text-blue-900">Webinar</Link>
          </button>
        </div>
      </section>
    </>
  );
}
