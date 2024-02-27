import axios from "axios";
import Image from "next/image";
import { MediaPressReleaseInterface } from "interfaces/midiaPressRelese";
import Link from "next/link";

export default async function Media() {
  let PressRealeseCards: Array<MediaPressReleaseInterface>;
  const PressREaleseCardResponse = await axios.get(
    `${process.env.BASE_API_URL}/configurations/press-release`
  );
  PressRealeseCards = PressREaleseCardResponse.data.data.rows;
  console.log(PressRealeseCards);

  return (
    <>
      <section className="bg-gray-50 h-[400px] ">
        <div className="flex container">
          <div className="w-1/2 ">
            <Image
              height={400}
              width={500}
              alt="test"
              src="/img2/Media-Page.jpg"
            />
          </div>
          <div className="w-1/2 m-auto px-4">
            <h2 className="font-extrabold text-5xl leading-[56px] m-0 mb-2">Media</h2>
            <h3 className="text-2xl m-0 mb-2 font-medium ">
              Press Releases, announcements, interviews & comments. For
              press-related questions, e-mails.
            </h3>
            <ul className="list-disc pl-12">
              <li className=" mb-2 text-xl">
                Please contact us for media enquires and interviews with
                Dr.Tausif Malik, founder. He comments on affordable education,
                social entrepreneurship & startups. info@riseback.org
              </li>
              <li className=" text-xl">
                Explore additional news, highlights, and stories from Coursera
                and our community by visiting the following.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" py-16">
        <h2 className="font-bold text-4xl text-center mb-8">Press Release</h2>
        <div className="flex flex-wrap container justify-around items-center gap-1">
          {PressRealeseCards.map((PressRealeseCard: any) => {
            return (
              <div className="w-[30%] p-4 border border-black mb-8 rounded-md">
                <Image
                  height={200}
                  width={200}
                  alt="tets"
                  src={`${process.env.BASE_MEDIA_URL}/${PressRealeseCard.coverImage}`}
                  className="mb-4 w-full"
                />
                <div className="h-20">
                <Link href={PressRealeseCard.link} className="font-bold text-black text-lg m-0  ">
                  {PressRealeseCard.title}
                </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
}
