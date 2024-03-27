import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import {
  SpeakersInterface,
  WebinarInterface,
  WebinarResponseInterface,
} from "interfaces/webinar";
import { WebinarForm } from "../_components/webinarForm";

async function SingleWebinarPage({ params }: { params: { slug: string } }) {
  let data = [];
  let url = `${process.env.BASE_API_URL}/configurations/webinar/slug/${params.slug}`;
  const response = await axios.get(url);
  data = response.data.data;
  console.log(data, "<<<<<<<<<<<<<webinar data");
  return (
    <>
      <>
        <section>
          <div className=" container m-auto ">
            <div className=" py-16 flex justify-between">
              <div className=" w-[60%] ">
                <div className="">
                  <Image
                    src={`${process.env.BASE_MEDIA_URL}/${data.event.eventImage}`}
                    alt="test"
                    width={1000}
                    height={200}
                    className="w-full h-80"
                  />
                </div>
                <div>
                  <h2 className="text-4xl">Speakers</h2>
                  <div className=" flex justify-between">
                    {data.speakers.map((item: SpeakersInterface) => {
                      return (
                        <>
                          <div className="text-center">
                            <Image
                              src={`${process.env.BASE_MEDIA_URL}/${item.image}`}
                              width={50}
                              height={50}
                              alt="test"
                              className="size-28 object-fill"
                            />
                            <h2 className="font-medium">{item.name}</h2>
                            <p>{item.bio}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="w-[30%]">
                <WebinarForm title="Webinar Ragistration Form" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="container m-auto">
            <div className="w-[60%] py-10">
              <p
                dangerouslySetInnerHTML={{ __html: data.agenda }}
                className="font-medium break-words"
              ></p>
            </div>
          </div>
        </section>
        <section>
          <div className="container m-auto">
            <div className="w-[60%] py-10">
              <p
                dangerouslySetInnerHTML={{
                  __html: data.event?.description,
                }}
                className="font-medium break-words"
              ></p>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default SingleWebinarPage;
