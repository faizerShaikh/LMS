import React from "react";
import Image from "next/image";
import axios from "axios";
import { WebinarForm } from "app/(website)/webinar/_components/webinarForm";
import { CommonContentEventInterface, EventInterface } from "interfaces/event";
import moment from "moment";
import removeTags from "utils/removeTags";
import CarouselCard from "../components/CarouselCard";
async function SingleEventPage({ params }: { params: { slug: string } }) {
  let data: EventInterface;
  let url = `${process.env.BASE_API_URL}/configurations/event/slug/${params.slug}`;
  const response = await axios.get(url);
  data = response.data.data;
  return (
    <>
      <section>
        <div className="h-[70vh]">
          <Image
            src={`${process.env.BASE_MEDIA_URL}/${data.eventImage}`}
            width={500}
            height={50}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container m-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold m-0 mb-8">{data.name}</h2>
          </div>
          <div className="flex items-center mb-12">
            <div className="w-1/2 ">
              <p className="text-lg">
                <span className="text-blue-900 font-semibold">
                  Event Start Date:
                </span>{" "}
                {moment(data.startDayTime).format("MMMM Do YYYY")}
              </p>
              <p className="text-lg">
                <span className="text-blue-900 font-semibold">Time:</span>{" "}
                {moment(data.startDayTime).format("h:mm:ss a")}
              </p>

              {/* <p className="text-lg">
                <span className="text-blue-900 font-semibold">
                  Event End Date and Time:
                </span>{" "}
                {moment(data.endDayTime).format("MMMM Do YYYY")}
              </p> */}

              <p className="text-lg">
                <span className="text-blue-900 font-semibold">
                  Registration Deadline:
                </span>{" "}
                {moment(data.deadLine).format("MMMM Do YYYY")}
              </p>
              <p className="text-lg">
                <span className="text-blue-900 font-semibold">
                  Event Location:
                </span>{" "}
                {data.eventLocation}
              </p>

              <p className="font-semibold">
                All Registered students would receive 20% Scholarship on IT
                courses
              </p>
            </div>
            <div className="w-1/2 flex justify-end">
              <WebinarForm
                title="Event Registration Form"
                eventId={data.id}
              ></WebinarForm>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-900">
        <div className="container text-center py-8 m-auto">
          <p className="text-white text-lg mb-6">
            {removeTags(data.description)}
          </p>
        </div>
      </section>

      <section>
        <div className="container py-8 mb-8 m-auto">
          <div className="text-center">
            <h2 className="uppercase text-3xl">what to expect</h2>
          </div>
          <div className="flex flex-wrap justify-evenly gap-8">
            {data.eventFeatures?.map((item: CommonContentEventInterface) => {
              return (
                <div className="relative   w-[35%] overflow-hidden ">
                  <Image
                    src={`${process.env.BASE_MEDIA_URL}/${item.image}`}
                    width={300}
                    height={300}
                    alt="test "
                    className="w-full h-64 rounded-md"
                  />
                  <div className="absolute inset-0 text-center flex flex-col justify-end">
                    <h2 className="text-white font-semibold m-0">
                      {item.title}
                    </h2>
                    <p className="text-white mt-1">{item.desription}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container py-6 m-auto">
          <h2 className="text-center text-3xl mb-12">Application Process</h2>
          <div className="flex flex-col  items-center">
            {data.applicationProcess?.map(
              (item: CommonContentEventInterface) => {
                return (
                  <div className="w-1/2 flex justify-between bg-blue-900 px-8 py-4 rounded-full h-48 mb-8">
                    <div className="flex items-center  mr-6 rounded-full bg-white w-[30%]">
                      <Image
                        src={`${process.env.BASE_MEDIA_URL}/${item.image}`}
                        alt="logo"
                        width={100}
                        height={100}
                        className="m-auto "
                      />
                    </div>
                    <div className="text-white w-[70%]">
                      <h2 className="m-0 text-lg mb-2 font-medium">
                        {item.title}
                      </h2>
                      <p className="m-0 font-light text-[15px]">
                        {item.desription}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container m-auto py-6">
          <h2 className="text-center text-3xl mb-12">Selection Process</h2>
          <div className="flex flex-col  items-center">
            {data.selectionProcess?.map((item: CommonContentEventInterface) => {
              return (
                <div className="w-1/2 flex justify-between  px-8 py-4 rounded-full h-48 mb-8 shadow-xl">
                  <div className="flex items-center  mr-6 rounded-full bg-blue-900  w-[30%]">
                    <Image
                      src={`${process.env.BASE_MEDIA_URL}/${item.image}`}
                      alt="logo"
                      width={100}
                      height={100}
                      className="m-auto "
                    />
                  </div>
                  <div className=" w-[70%]">
                    <h2 className="m-0 text-lg mb-2 font-medium">
                      {item.title}
                    </h2>
                    <p className="m-0 font-light text-[15px]">
                      {item.desription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container m-auto py-16">
          <h2 className="text-center m-0 mb-12 text-3xl font-semibold">
            Winners
          </h2>
          <div className="flex flex-wrap justify-between gap-5">
            {data.winners?.map((item: CommonContentEventInterface) => {
              return (
                <div className="w-[23%] text-center rounded-xl bg-white py-10 px-2  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <Image
                    src={`${process.env.BASE_MEDIA_URL}/${item.image}`}
                    height={100}
                    width={100}
                    alt="test"
                  ></Image>
                  <h3>{item.title}</h3>
                  <p className="text-sm mb-0">{item.desription}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto text-center">
          <div>
            <h2>Strategic Partner</h2>
            <p>
              Event is supported by easily recognisable companies and products
              which we use everyday
            </p>
          </div>
          <div>
            <CarouselCard data={data.stratigicPartners}></CarouselCard>
          </div>
          <div className="leading-8">
            <h2>Calling for Strategic Partners & Sponsors</h2>
            <p>
              We extend a warm invitation to strategic partners and sponsors to
              embark on this incredible journey of empowering Ethiopia's youth
              in technology.
              <br /> For partnership opportunities and inquiries, please contact
              <span className="font-bold"> Mr.Ridwan Adelaja</span>
              , RiseBack Nigeria.
              <br />
              <span className="font-bold">Telephone/WhatsApp: </span>
              <span className="text-blue-700">
                +251911428980 +251919879517{" "}
              </span>
              <span className="font-bold">Email:</span>
              <span className="text-blue-700"> zebib@riseback.org</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleEventPage;

export const revalidate = 60;
