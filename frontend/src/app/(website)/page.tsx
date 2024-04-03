import axios from "axios";
import { Button } from "components/layout/buttons";
import { FAQ } from "components/layout/faq/faq";
import { EventInterface } from "interfaces/event";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import removeTags from "utils/removeTags";
import CarouselCard from "./event/components/CarouselCard";
import { CourseSpecializationInterface, UniversityInterface } from "interfaces";
import { Tabs } from "components/layout";
import CourseSpecializationCard from "components/layout/cards/CourseSpecializationCard";

export const revalidate = 60;
export default async function Home() {
  let FAQData = [];
  const response = await axios.get(
    `${process.env.BASE_API_URL}/configurations/faq`
  );
  FAQData = response.data.data.rows;
  console.log(FAQData);

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
  let carouselData = universityData?.map(
    (item: UniversityInterface) => item?.university_image
  );

  // let CourseSpecializationCardData: CourseSpecializationInterface[];
  // const specializationResponse = await axios.get(
  //   "/configurations/course-specialization"
  // );
  // CourseSpecializationCardData = specializationResponse.data.data.rows;
  return (
    <>
      <section className=" bg-gray-100 h-[400px] ">
        <div className="flex justify-between items-center gap-10 container m-auto">
          <div className=" ">
            <Image
              width={500}
              height={400}
              alt="test"
              src="/img2/Home Page.jpg"
              className="w-3/4"
            />
          </div>
          <div className="w-1/2 ">
            <h2 className="font-extrabold text-[52px] leading-[56px] mb-4">
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

      <section className="container m-auto py-24">
        <div className="flex items-center border border-black rounded-2xl">
          <div className="w-1/2 p-8">
            <h2 className="font-bold text-4xl m-0 mb-2">Data Science</h2>
            <p className="font-medium text-lg mb-6">
              This Data Science, Artificial Intelligence, and Machine learning
              using python course dives into the basices of machine learning
              using an approchable, and well known, programming language
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
              <div className="flex items-center w-1/2 px-4">
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

            <div className="flex justify-between">
              <Button className="border py-3  text-white text-center w-[49%] rounded-md">
                Know More
              </Button>
              <div className="border border-black  w-[49%]">
                <Button className=" py-3 bg-white text-black text-center w-full rounded-md">
                  Book a Free Live Session
                </Button>
              </div>
            </div>
          </div>
          <div className="w-1/2  p-8">
            <Image
              width={500}
              height={400}
              alt="test"
              src="/img2/Home Page.jpg"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto">
          <h2 className="text-center text-3xl">Our Top University Partners</h2>
          <div>
            <CarouselCard data={carouselData}></CarouselCard>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>Master's Degree</h2>
          <div>
            {/* <Tabs
              tabs={[
                {
                  id: 0,
                  buttonLabel: "MBA(Master of Business Administration)",
                  component: (
                    <CourseSpecializationCard
                      item={CourseSpecializationCardData}
                    />
                  ),
                },
                {
                  id: 1,
                  buttonLabel: "MCA(Master of Computer Applications)",
                  component: (
                    <CourseSpecializationCard
                      item={CourseSpecializationCardData}
                    />
                  ),
                },
                {
                  id: 2,
                  buttonLabel: "M.Com(Master of Commerce)",
                  component: (
                    <CourseSpecializationCard
                      item={CourseSpecializationCardData}
                    />
                  ),
                },
              ]}
            ></Tabs> */}
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
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      {firstHalf.map((item: any) => (
                        <FAQ specialization={item} />
                      ))}
                    </div>
                    <div className="w-1/2">
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

        {events.slice(0, 3).map((event: any) => (
          <div className="flex mb-8">
            <div className="w-1/4">
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
            <div className="w-1/2 px-2">
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
                🕒{moment(event.startDayTime).format("h:mm A")} –{" "}
                {moment(event.endDayTime).format("h:mm A")}
              </p>
              <div className="line-clamp-2">
                {removeTags(event.description)}
              </div>
            </div>
            <div className="w-1/4 m-auto px-4">
              <Image
                height={150}
                width={300}
                src={`${process.env.BASE_MEDIA_URL}${event.eventImage}`}
                alt=""
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
