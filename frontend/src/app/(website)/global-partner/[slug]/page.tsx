import { HeroSection } from "components/layout/hero-section";
import { getSingleGlobalPartner } from "lib";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function GlobalPartner({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await getSingleGlobalPartner(slug);
  if (!data) return redirect("/404");

  return (
    <>
      <HeroSection
        HeroImage={process.env.BASE_MEDIA_URL + data.coverImage}
        Herotitle={data.name}
        description={`${data?.description}`}
        viewButton={false}
      ></HeroSection>
      <section className="container m-auto my-16">
        <h2 className="text-center text-3xl mb-12 font-medium">
          Contact Details
        </h2>
        <div className="flex  justify-between text-center gap-7">
          <div className="w-1/4  rounded-md py-8 px-12 shadow-xl  grow-1">
            <Image
              src="/img2/Location.png"
              alt=""
              width={80}
              height={80}
              className="rounded-full bg-blue-900 fill-white"
            />
            <h2>Address</h2>
            <p className="font-medium">{data.address}</p>
          </div>
          <div className="w-1/4  rounded-md py-8 px-12  shadow-xl  grow-1">
            <Image
              src="/img2/Phone.png"
              alt=""
              width={80}
              height={80}
              className="rounded-full bg-blue-900"
            />
            <h2>Phone</h2>
            <p className="font-medium">{data.phone}</p>
          </div>
          <div className="w-1/4  rounded-md py-8 px-12 shadow-xl grow-1">
            <Image
              src="/img2/website.png"
              alt=""
              width={80}
              height={80}
              className="rounded-full bg-blue-900"
            />
            <h2>Website</h2>
            <p className="font-medium">{data.website}</p>
          </div>
          <div className="w-1/4  rounded-md py-8 px-12 shadow-xl  grow-1">
            <Image
              src="/img2/Mail.png"
              alt=""
              width={80}
              height={80}
              className="rounded-full bg-blue-900"
            />
            <h2>Email</h2>
            <p className="font-medium">{data.email}</p>
          </div>
        </div>
      </section>
      <section className="container m-auto mt-4 ">
        <h2 className="text-center text-3xl">Professional IT Courses</h2>
        <div className="flex justify-center mb-8">
          <ul className="  w-1/2">
            <li className="font-medium text-xl ">Cloud Computing using AWS</li>
            <li className="font-medium text-xl ">
              Full Stack Web Development using MERN Stack
            </li>
            <li className="font-medium text-xl ">
              Cyber Security and Ethical Hacking
            </li>
            <li className="font-medium text-xl ">
              Data Science Artificial Intelligence and Machine Learning using
              Python
            </li>
          </ul>
          <ul className="w-1/2 ">
            <li className="font-medium text-xl ">
              Mobile Application Development with Flutter
            </li>
            <li className="font-medium text-xl ">Oracle SQL and PL SQL</li>
            <li className="font-medium text-xl ">
              Full Stack Web Development using PHP and MYSQL
            </li>
            <li className="font-medium text-xl ">
              Python Programming and its Applications
            </li>
          </ul>
        </div>
        <div className="flex justify-between mb-8">
          <div className="w-1/2 text-center">
            <Image
              src="/img2/team-3.jpg"
              alt=""
              width={150}
              height={150}
              className="rounded-full"
            />
            <h2 className="text-2xl">Udergrauates</h2>
            <p className="text-xl">BBA | BCA | B.Com</p>
          </div>
          <div className="w-1/2 text-center">
            <Image
              src="/img2/team-1.jpg"
              alt=""
              width={150}
              height={150}
              className="rounded-full"
            />
            <h2 className="text-2xl">Masters</h2>
            <p className="text-xl">MBA | MCA | M.Com | MA</p>
          </div>
        </div>
        <div className="text-center mb-12">
          <button className="bg-blue-900 text-white text-lg px-6 py-1 rounded-md ">
            Register Now
          </button>
        </div>
      </section>
      <section
        className="container m-auto text-center mb-10"
        dangerouslySetInnerHTML={{ __html: data.vision }}
      ></section>
      <section className="container m-auto ">
        <p className="text-center font-semibold mb-10">
          <Link href="#">
            Click here to know more about Rise N Start Ignite and registration.
          </Link>
        </p>
      </section>
    </>
  );
}

export const revalidate = 60;
