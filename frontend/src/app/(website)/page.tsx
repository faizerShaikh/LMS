import axios from "axios";
import { Button } from "components/layout/buttons";
import { FAQ } from "components/layout/faq/faq";
import { EventInterface } from "interfaces/event";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import removeTags from "utils/removeTags";
import CarouselCard from "./event/components/CarouselCard";
import { UniversityInterface } from "interfaces";
import { CourseTabs } from "components/home/tabs";
import { ArrowRight } from "@carbon/icons-react";
import { ItCourseTabs } from "components/home/itCoursesTabs";
import Banner from "components/layout/banner";
export let metadata = {};

export const revalidate = 60;
export default async function Home() {
  let FAQData = [];
  const response = await axios.get(
    `${process.env.BASE_API_URL}/configurations/faq`
  );
  FAQData = response.data.data.rows;

  let events: EventInterface[];
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/event/listing`
  );
  events = res.data.data || [];

  let universityData: UniversityInterface[];
  const uniResponse = await axios.get(
    `${process.env.BASE_API_URL}/configurations/university`
  );
  universityData = uniResponse.data.data.rows;
  // if(universityData.metaData){
  //   metadata = universityData.metaData
  // }
  let carouselData = universityData?.map(
    (item: UniversityInterface) => item?.university_image
  );

  let CoursesCatagoriData = [];
  const CatagorieResponse = await axios.get(
    `${process.env.BASE_API_URL}/configurations/course/course-level`
  );
  // console.log(CatagorieResponse.data.data, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  CoursesCatagoriData = CatagorieResponse.data.data;

  const mastersData = CoursesCatagoriData.Master;
  const bachlorssData = CoursesCatagoriData.Bachelor;
  const underGradData = CoursesCatagoriData.underGrad;
  const customCourseData = CoursesCatagoriData.CustomCourse;
  return (
    <>
      <section className=" bg-gray-50 desktop:h-[400px]  py-10 desktop:py-0 tablet:py-0 laptop:py-0">
        <div className="desktop:flex desktop:justify-between desktop:items-center desktop:gap-10  container m-auto">
          <div className="desktop:w-1/2">
            <Image
              width={500}
              height={400}
              alt="test"
              src="/img2/Home Page.jpg"
              className="desktop:w-full object-contain  desktop:!h-[400px] h-[300px] laptop:h-[350px] tablet:h-[350px] w-full"
            />
          </div>
          <div className="desktop:w-1/2  ">
            <h2 className="font-extrabold desktop:text-[52px] desktop:leading-[56px] mb-4">
              Educate, Empower, Elevate & Excel
            </h2>
            <p className="font-medium mb-4 text-xl">
              Elevate your career with RiseBack! Explore our budget-friendly
              professional certificate programs, commencing at just $250, and
              university degree programs starting at an affordable $60 per
              month. Step in to a brighter future with us !
            </p>
          </div>
        </div>
      </section>
      <section className="mt-16 bg-gray-100">
        <div className=" container m-auto  ">
          <Banner></Banner>
        </div>
      </section>
      <section className="container m-auto py-24">
        <div className="desktop:flex laptop:flex tablet-flex justify-between">
          <h2 className="font-semibold desktop:text-4xl">
            Explore courses to enhance your career
          </h2>
          <p className="flex items-center desktop:text-2xl ">
            <Link href="/courses" className="text-black">
              View all courses
            </Link>
            <ArrowRight className="desktop:size-10 ml-5" />
          </p>
        </div>
        <div>
          <ItCourseTabs CoursesData={customCourseData} />
        </div>
      </section>
      <section>
        <div className="container m-auto">
          <h2 className="text-center text-3xl">Our Top University Partners</h2>
          <div className="desktop:w-[1464px] m-auto">
            <CarouselCard data={carouselData}></CarouselCard>
          </div>
        </div>
      </section>
      <section className="container m-auto">
        <div>
          <h2>Master's Degree</h2>
          <div>
            <CourseTabs CoursesData={mastersData} />
          </div>
        </div>
        <div>
          <h2>Bachlor's Degree</h2>
          <div>
            <CourseTabs CoursesData={bachlorssData} />
          </div>
        </div>
        <div>
          <h2>Undergradute's Degree</h2>
          <div>
            <CourseTabs CoursesData={underGradData} />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-24">
        <div className="container m-auto">
          <div>
            <h2 className="font-bold text-3xl m-0 mb-4">FAQ's</h2>
          </div>
          <div>
            {FAQData.map((item: any) => {
              const middleIndex = Math.ceil(item.faqTopic.length / 2);
              const firstHalf = item.faqTopic.slice(0, middleIndex);
              const secondHalf = item.faqTopic.slice(middleIndex);
              return (
                <>
                  <h2 className="font-semibold  m-0  mb-4 text-2xl">
                    {item.question}
                  </h2>
                  <div className="desktop:flex laptop:flex tablet:flex gap-2">
                    <div className="desktop:w-1/2 laptop:w-1/2 tablet:w-1/2  ">
                      {firstHalf.map((item: any) => (
                        <FAQ specialization={item} />
                      ))}
                    </div>
                    <div className="desktop:w-1/2 laptop:w-1/2 tablet:w-1/2">
                      {secondHalf.map((item: any) => (
                        <FAQ specialization={item} />
                      ))}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container m-auto">
        <div className="mb-8 ">
          <h2 className="font-bold text-3xl mb-4">Events</h2>
          <p>Upcoming Education Events to feed your brain</p>
          <p className="border-t-2 border-black w-14"> </p>
        </div>

        {events.length > 3
          ? events.slice(0, 3).map((event: any) => (
              <div className="desktop:flex tablet:flex laptop:flex mb-8">
                <div className="desktop:w-1/4 laptop:w-1/4 tablet:w-1/4">
                  <h2>
                    <span style={{ color: "#ffcc00", fontSize: "60px" }}>
                      {new Date(event.createdAt).getDate()}
                    </span>
                  </h2>
                  <p>
                    {new Date(event.createdAt).toLocaleString("en-US", {
                      month: "long",
                    })}
                  </p>
                </div>
                <div className="desktop:w-1/2 laptop:w-1/2 tablet:w-1/2 px-2">
                  <h2 className="font-bold mb-4 text-lg ">
                    <Link
                      href={`${event.webinarId ? "webinar" : "event"}/${
                        event.slug
                      }`}
                      className="text-black"
                    >
                      {event.name}
                    </Link>
                  </h2>
                  <p className="mb-4">
                    <span className="mr-2">🕒</span>
                    {moment(event.startDayTime).format("h:mm A")} –{" "}
                    {moment(event.endDayTime).format("h:mm A")}
                  </p>
                  <div className="line-clamp-2">
                    {removeTags(event.description)}
                  </div>
                </div>
                <div className="desktop:w-1/4 desktop:m-auto tablet:w-1/4 tablet:m-auto laptop:w-1/4 laptop:m-auto px-2 mt-4 desktop:mt-0 tablet:mt-0 laptop:mt-0">
                  <Image
                    height={150}
                    width={300}
                    src={`${process.env.BASE_MEDIA_URL}${event.eventImage}`}
                    alt=""
                    className="desktop:!w-[300px] tablet:!w-[172px]"
                  />
                </div>
              </div>
            ))
          : events.map((event: any) => (
              <div className="flex mb-8">
                <div className="desktop:w-1/4 laptop:w-1/4 tablet:w-1/4">
                  <h2>
                    <span style={{ color: "#ffcc00", fontSize: "60px" }}>
                      {new Date(event.createdAt).getDate()}
                    </span>
                  </h2>
                  <p>
                    {new Date(event.createdAt).toLocaleString("en-US", {
                      month: "long",
                    })}
                  </p>
                </div>
                <div className="desktop:w-1/2 desktop:px-2 laptop:px-2 tablet:px-2">
                  <h2 className="font-bold mb-4 text-lg ">
                    <Link
                      href={`${event.webinarId ? "webinar" : "event"}/${
                        event.slug
                      }`}
                      className="text-black"
                    >
                      {event.name}
                    </Link>
                  </h2>
                  <p className="mb-4">
                    <span className="mr-2">🕒</span>
                    {moment(event.startDayTime).format("h:mm A")} –{" "}
                    {moment(event.endDayTime).format("h:mm A")}
                  </p>
                  <div className="line-clamp-2">
                    {removeTags(event.description)}
                  </div>
                </div>
                <div className="desktop:w-1/4 desktop:m-auto tablet:w-1/4 tablet:m-auto laptop:w-1/4 laptop:m-auto px-2 mt-4 desktop:mt-0 tablet:mt-0 laptop:mt-0">
                  <Image
                    height={150}
                    width={300}
                    src={`${process.env.BASE_MEDIA_URL}${event.eventImage}`}
                    alt=""
                    className="tablet:!w-[172px]"
                  />
                </div>
              </div>
            ))}
      </section>
    </>
  );
}
