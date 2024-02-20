import Image from "next/image";
import axios from "axios";
import moment from "moment";

export default async function EventsPage() {
  let events = [];
  const res = await axios.get(
    `${process.env.BASE_API_URL}/configrations/event`
  );
  events = res.data.data.rows;
  console.log(events)
  return (
    <>
      <section className="bg-gray-100">
        <div className="flex justify-center py-14">
            <p className="border-2 bg-white px-2 py-2 hover:bg-blue-900 "><a href="#" className="hover:text-white text-blue-900">Upcoming Events</a></p>
            <p className="border-2 bg-white px-2 py-2 hover:bg-blue-900 "><a href="#" className="hover:text-white text-blue-900">Past Events</a></p>
        </div>
    </section>
      <section className=" py-12">
        <div className="flex container">
          <div className="w-3/4 flex flex-wrap">
            {events.map((event: any) => (
              <div className="w-[30%] mx-2  shadow-2xl rounded-md mb-4">
                <Image
                  src={`${process.env.BASE_MEDIA_URL}${event.eventImage}`}
                  width={200}
                  height={50}
                  alt=""
                  className="w-full h-[180px] rounded-t-md"
                />
                <div className="px-4 pb-4 pt-2">
                    <div className="min-h-12">
                  <p className="font-bold m-0">{event.name.length > 40 ? `${event.name.slice(0, 50)}...` : event.name }</p>
                    </div>
                  <div className="flex justify-between ">
                    <p className="mt-4 m-0">{moment(event.createdAt).format("Do MMM YYYY")}</p>
                    <p className="mt-4 m-0">{moment(event.createdAt).format("h:mm A")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/4 shadow-2xl mb-4 rounded-md p-4 border-2">
            <div className="mb-8 pb-8 border-b-2 border-dashed border-black">
              <h2 className="text-xl font-semibold mb-4 ">Event Types</h2>
              <input type="radio" name="ALL" id="all" />
              <label htmlFor="all">ALL</label>
              <br />
              <input type="radio" name="webinars" id="webinars" />
              <label htmlFor="all">Webinars</label>
              <br />
              <input type="radio" name="on-site" id="on-site" />
              <label htmlFor="all">On-site</label>
            </div>

            <div className="mb-8 pb-8 border-b-2 border-dashed border-black">
              <h2 className="text-xl font-semibold mb-4 ">Event Location</h2>
              <input type="radio" name="ALL" id="all" />
              <label htmlFor="all">ALL</label>
              <br />
              <input type="radio" name="webinars" id="webinars" />
              <label htmlFor="all">Webinars</label>
              <br />
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 ">Programs</h2>
              <select name="" id="" className="w-full py-1  border-2">
                <option value="abc">ABC</option>
                <option value="abc">ABC</option>
                <option value="abc">ABC</option>
                <option value="abc">ABC</option>
                <option value="abc">ABC </option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
