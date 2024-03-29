import axios from "axios";
import { FAQ } from "components/layout/faq/faq";
import moment from "moment";
import Image from "next/image";
import removeTags from "utils/removeTags";

export const revalidate = 60;
export default async function Home() {
  let FAQData = [];
  const response = await axios.get(
    `${process.env.BASE_API_URL}/configurations/faq`
  );
  FAQData = response.data.data.rows;
  console.log(FAQData);

  let events = [];
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/event/listing`
  );
  events = res.data.data || [];
  console.log(events, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
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
              <h2 className="font-bold mb-4 text-lg">{event.name}</h2>
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
