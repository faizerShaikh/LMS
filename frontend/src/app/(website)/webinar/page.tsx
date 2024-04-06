import React, { useState } from "react";
import Image from "next/image";
import { WebinarForm } from "./_components/webinarForm";
import axios from "axios";
import { WebinarInterface } from "interfaces/webinar";

async function webinar() {
  let data: Array<WebinarInterface>;
  const response = await axios.get(
    `${process.env.BASE_API_URL}/configurations/webinar`
  );
  data = response.data.data.rows;
  return (
    <>
      {data.map((data: any) => {
        return (
          <>
            <section>
              <div className=" container ">
                <div className=" py-16 flex justify-between">
                  <div className=" w-[60%] ">
                    <div className="">
                      <Image
                        src={`${process.env.BASE_MEDIA_URL}/${data.coverImage}`}
                        alt="test"
                        width={1000}
                        height={200}
                        className="w-full h-80"
                      />
                    </div>
                    <div>
                      <h2 className="text-4xl">Speakers</h2>
                      <div className=" flex justify-between">
                        <div className="text-center">
                          <Image
                            src="/img2/Author.png"
                            width={50}
                            height={50}
                            alt="test"
                            className="size-28"
                          />
                          <h2 className="font-medium">
                            Sebastian George , S J
                          </h2>
                          <p>Director at XLRI , Delhi-NCR</p>
                        </div>
                        <div className="text-center">
                          <Image
                            src="/img2/Author.png"
                            width={50}
                            height={50}
                            alt="test"
                            className="size-28"
                          />
                          <h2 className="font-medium">Bibinn Shivas</h2>
                          <p>Director of Customer Sucess at Coursera</p>
                        </div>
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
              <div className="container ">
                <div className="w-[60%] py-10">
                  <div
                    dangerouslySetInnerHTML={{ __html: data.agenda || "" }}
                    className="font-medium"
                  ></div>
                </div>
              </div>
            </section>
            <section>
              <div className="container ">
                <div className="w-[60%] py-10">
                  <div
                    dangerouslySetInnerHTML={{ __html: data.description || "" }}
                    className="font-medium"
                  ></div>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
}

export default webinar;
