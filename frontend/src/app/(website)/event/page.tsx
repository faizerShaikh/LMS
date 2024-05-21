import Image from "next/image";
import axios from "axios";
import moment from "moment";
import { Events } from "./components/events";

import FilterForm from "./components/FilterForm";
import Link from "next/link";
import { EventInterface } from "interfaces/event";
import { NoDataOverlay } from "components/layout/dataGrid/NoDataOverlay";

export default async function EventsPage({
  searchParams,
}: {
  searchParams: { date: string; type: string };
}) {
  let events = [];
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configurations/event/listing`,
    {
      params: searchParams ? searchParams : "",
    }
  );
  events = res.data.data;
  const EventsButtons = [
    {
      text: "All Events",
      url: "/event",
      key: "all",
      query: {},
    },
    {
      text: "Upcoming Events",
      url: "/event",
      key: "upcoming",
      query: {
        date: "upcoming",
      },
    },
    {
      text: "Past Events",
      url: "/event",
      key: "past",
      query: {
        date: "past",
      },
    },
  ];

  return (
    <>
      <section className="bg-gray-100 hover:text-white">
        <div className="py-8 laptop:py-10 desktop:py-10">
          <Events buttons={EventsButtons} defaultValue={searchParams?.date} />
        </div>
      </section>
      <section className="py-12 ">
        <div className="flex flex-col-reverse laptop:flex-row desktop:flex-row desktop:container desktop:m-auto mx-6 ">
          {!events || !events.length ? (
            <div className="w-3/4">
              <NoDataOverlay text={"No data found with applied filters"} />
            </div>
          ) : (
            <div className="mr-4 desktop:w-3/4 w-full flex-wrap grid laptop:grid-cols-3 desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-5">
              {events.map((item: EventInterface) => (
                <div className="h-[330px] shadow-[rgba(17,_17,_26,_0.3)_0px_0px_16px] rounded-md mb-4 w-full">
                  <Image
                    src={`${process.env.BASE_MEDIA_URL}${item.eventImage}`}
                    width={200}
                    height={50}
                    alt=""
                    className="w-full h-[180px] rounded-t-md"
                  />
                  <div className="px-4 pb-4 pt-2">
                    <div className="min-h-12">
                      <Link
                        href={`${item.webinarId ? "webinar" : "event"}/${
                          item.slug
                        }`}
                      >
                        <p className="font-bold m-0  text-black">
                          {item.name.length > 40
                            ? `${item.name.slice(0, 45)}...`
                            : item.name}
                        </p>
                      </Link>
                    </div>
                    <div>
                      <p className="m-0 mt-3 font-medium">
                        {item.webinarId ? "Webinar" : "Event"}
                      </p>
                    </div>
                    <div className="flex justify-between ">
                      <p className="mt-4 m-0">
                        {moment(item.startDayTime).format("Do MMM YYYY")}
                      </p>
                      <p className="mt-4 m-0">
                        {moment(item.startDayTime).format("h:mm A")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <FilterForm />
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
