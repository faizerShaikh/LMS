"use client";
import { Button, Image } from "components/layout";
import { CustomCarousel } from "components/layout/carousel";
import moment from "moment";

export default function WebinarCarousel({ data }: any) {
  console.log(data, "<<<<<<,,data");
  return (
    <>
      <CustomCarousel dots={true} slidesToShow={1}>
        {data.map((item: any) => {
          return (
            <div className="!flex items-center">
              <div className="w-1/2 flex justify-center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_MEDIA_URL}${item?.event.eventImage}`}
                  width={300}
                  height={300}
                  alt="webianr image"
                  className="!w-[80%]"
                ></Image>
              </div>
              <div className="pl-12">
                <h2>{item.event.name}</h2>
                <div className="bg-blue-100 w-[200px]">
                  <p className="flex items-center">
                    <Image
                      alt="callender"
                      src="/img2/calendar_2278049.png"
                      width={15}
                      height={15}
                      className="mr-2"
                    ></Image>
                    {moment(item?.event.startDayTime).format("Do MMM YYYY")}
                  </p>
                  <p>
                    {" "}
                    <span className="mr-2">🕒</span>
                    {moment(item?.event.startDayTime).format("h:mm A")}
                  </p>
                </div>
                <Button>Register Now</Button>
              </div>
            </div>
          );
        })}
      </CustomCarousel>
    </>
  );
}
