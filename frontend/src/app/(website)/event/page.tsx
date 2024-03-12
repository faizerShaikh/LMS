import Image from "next/image";
import axios from "axios";
import moment from "moment";
import { Events } from "./components/events";

import FilterForm from "./components/FilterForm";

export default async function EventsPage({
  searchParams: { key },
}: {
  searchParams: { key: string };
}) {
  let events = [];
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/event`,
    {
      params: key ? { key } : "",
    }
  );
  events = res.data.data;

  return (
    <>
      <section className="bg-gray-100 hover:text-white">
        <div className="py-10 ">
          <Events></Events>
        </div>
      </section>
      <section className=" py-12">
        <div className="flex container m-auto ">
          <div className="w-3/4 flex  flex-wrap ">
            {events.map((event: any) => (
              <div className="w-[30%] mx-2   shadow-2xl rounded-md mb-4">
                <Image
                  src={`${process.env.BASE_MEDIA_URL}${event.eventImage}`}
                  width={200}
                  height={50}
                  alt=""
                  className="w-full h-[180px] rounded-t-md"
                />
                <div className="px-4 pb-4 pt-2">
                  <div className="min-h-12">
                    <p className="font-bold m-0">
                      {event.name.length > 40
                        ? `${event.name.slice(0, 45)}...`
                        : event.name}
                    </p>
                  </div>
                  <div className="flex justify-between ">
                    <p className="mt-4 m-0">
                      {moment(event.createdAt).format("Do MMM YYYY")}
                    </p>
                    <p className="mt-4 m-0">
                      {moment(event.createdAt).format("h:mm A")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <FilterForm />
        </div>
      </section>
    </>
  );
}