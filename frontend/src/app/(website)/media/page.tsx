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
      <section className="bg-gray-100 desktop:h-[400px] mb-8">
        <div className="flex desktop:container px-4  m-auto flex-col-reverse desktop:flex-row laptop:container laptop:flex-row">
          <div className="desktop:w-1/2">
            <div className="desktop:w-[500px] desktop:h-[350px] laptop:w-[500px] laptop:h-[350px] w-full relative h-[300px] tablet:h-[400px]">
              <Image
                height={400}
                width={500}
                // layout="fill"
                alt="test"
                src="/img2/Media-Page.jpg"
                className="w-full desktop:w-[500px] desktop:h-[400px] laptop:h-[350px] h-[300px] tablet:h-[400px]"
              />
            </div>
          </div>
          <div className="desktop:w-1/2 m-auto">
            <h2 className="desktop:font-extrabold tablet:font-extrabold font-semibold desktop:text-3xl text-4xl leading-[56px] m-0 mb-2 text-center desktop:text-left laptop:text-left laptop:pl-4">
              Media
            </h2>
            <h3 className="desktop:text-2xl m-0 mb-2 desktop:font-medium :text-2xl :font-medium text-sm text-center laptop:text-left laptop:pl-4">
              Press Releases, announcements, interviews & comments. For
              press-related questions, e-mails.
            </h3>
            <ul className="list-disc desktop:pl-12 pl-8">
              <li className="mb-2 desktop:font-medium desktop:text-xl text-sm">
                Please contact us for media enquires and interviews with
                Dr.Tausif Malik, founder. He comments on affordable education,
                social entrepreneurship & startups. info@riseback.org
              </li>
              <li className="desktop:text-xl desktop:font-medium text-sm">
                Explore additional news, highlights, and stories from Coursera
                and our community by visiting the following.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" desktop:py-16 mb-6">
        <h2 className="desktop:font-bold desktop:text-4xl text-center mb-8 font-semibold text-3xl">
          {" "}
          Published Articles
        </h2>
        <div className="desktop:container desktop:m-auto laptop:container laptop:m-auto mx-8 justify-around items-center grid laptop:grid-cols-3 desktop:grid-cols-3 tablet:grid-cols-2 tablet:mx-20 gap-5">
          {PressRealeseCards.map((PressRealeseCard: any) => {
            return (
              <div className="p-4 border border-black rounded-md">
                <Image
                  height={200}
                  width={200}
                  // layout="fill"
                  alt="tets"
                  src={`${process.env.BASE_MEDIA_URL}/${PressRealeseCard.coverImage}`}
                  className="mb-4 w-full"
                />
                <div className="h-20">
                  <Link
                    href={PressRealeseCard.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-black text-lg m-0  line-clamp-3"
                  >
                    {PressRealeseCard.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
