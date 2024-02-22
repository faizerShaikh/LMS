// "use client";

import axios from "axios";
import moment from "moment";
import Image from "next/image";
// import { useState } from "react";

export default async function Home() {
  // const [accordionOpen, setAccordionOpen] = useState(false);
  

  let events = [];
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configrations/event`
  );
  events = res.data.data.rows;
  // const firstThreeEvents = events.slice(0, 3);

  return (
    <>
      <section className=" bg-gray-100 h-[400px]">
        <div className="flex justify-between container ">
          <div className=" ">
            <Image
              width={500} height={400}
              alt="test"
              src="/img2/Home Page.jpg"
              className="w-3/4"
            />
          </div>
          <div className="w-1/2 ">
            <h2 className="font-bold text-5xl mb-4">
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
      <section>

      </section>

      <section >
        <div className="mb-8 container">
          <h2 className="font-bold text-3xl mb-4">Events</h2>
          <p>Upcoming Education Events to feed your brain</p>
        </div>
        
        {events.slice(0, 3).map((event: any) => (
          <div className="flex mb-8 container">
            <div className="w-1/4">
              <h2>
                <span style={{ color: "#ffcc00", fontSize: "60px" }}>{new Date(event.createdAt).getDate()}</span>
              </h2>
              <p>{new Date(event.createdAt).toLocaleString('en-US', { month: 'long' })}</p>
            </div>
            <div className="w-1/2 px-2">
              <h2 className="font-bold mb-4 text-lg">{event.name}</h2>
              <p className="mb-4">🕒{moment(event.startDayTime).format('h:mm A')} – {moment(event.endDayTime).format('h:mm A')}</p>
              <p>{event.description}</p>
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
