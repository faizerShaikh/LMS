import Image from "next/image";

export default function Blogs() {
  return (
    <>
      <section className="bg-gray-50 h-[400px]">
        <div className="container">
          <div className="flex  py-8">
            <div className="w-1/2">
              <Image
                alt="test"
                width={550}
                height={336}
                src="/img2/Ethopia-Flag.jpg"
              />
            </div>
            <div className="w-1/2 px-8 ">
              <h2 className="font-bold text-5xl mt-0 mb-4">Ethopia</h2>
              <p className="font-medium text-xl">
                Tadias Training Center proudly partners with RiseBack Edutech to
                introduce RiseBack Ethiopia. With a focus on advancing
                affordable IT education, the center aims to fuel
                technopreneurship and entrepreneurship, fostering new startups
                and job opportunities for Ethiopia's youth. <br />
                This initiative not only stimulates economic activity but also
                broadens existing economic horizons in alignment with the
                country's aspirations
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container my-16">
        <h2 className="text-center text-3xl mb-12 font-medium">Contact Details</h2>
        <div className="flex  justify-between text-center">
          <div className="w-[300px] rounded-md py-8 px-12 shadow-lg">
            <Image
              src="/img2/Location.png"
              alt=""
              width={80}
              height={80}
              className="rounded-full bg-blue-900 fill-white"
            />
            <h2>Address</h2>
            <p className="font-medium">
              Bole Atlast, TK Building, 7th Floor, Addis Ababa Ethiopia
            </p>
          </div>
          <div className="w-[300px] rounded-md py-8 px-12 shadow-lg">
            <Image
              src="/img2/Phone.png"
              alt=""
              width={80}
              height={80}
              className="rounded-full bg-blue-900"
            />
            <h2>Phone</h2>
            <p className="font-medium">+2519 1142 8980</p>
            <p className="font-medium">+2519 1987 9517</p>
          </div>
          <div className="w-[300px] rounded-md py-8 px-12 shadow-lg">
            <Image
              src="/img2/website.png"
              alt=""
              width={80}
              height={80}
              className="rounded-full bg-blue-900"
            />
            <h2>Website</h2>
            <p className="font-medium">www.risebackj.org/ethiopia</p>
          </div>
          <div className="w-[300px] rounded-md py-8 px-12 shadow-lg">
            <Image
              src="/img2/Mail.png"
              alt=""
              width={80}
              height={80}
              className="rounded-full bg-blue-900"
            />
            <h2>Email</h2>
            <p className="font-medium">zebib@riseback.org</p>
          </div>
        </div>
      </section>
      <section className="container mt-4 ">
        <h2 className="text-center text-3xl">Professional IT Courses</h2>
        <div className="flex justify-center mb-8">
          <ul className="  w-1/2">
            <li className="font-medium text-xl ">Cloud Computing using AWS</li>
            <li className="font-medium text-xl ">
              Full Stack Web Development using MERN Stack
            </li>
            <li className="font-medium text-xl ">Cyber Security and Ethical Hacking</li>
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
      <section className="container text-center mb-20">
        <h2 className="text-2xl">Rise N Start Ignite</h2>
        <p className="font-medium text-xl mb-8">
          Rise N Start Ignite, Ethiopia's pioneering Startup Pitch Competition
          for students. This competition, hosted by RiseBack.org, is set to
          shape Ethiopia's youth into tech trailblazers and emerging startup
          leaders, in alignment with the Ethiopian government's vision of
          fostering innovation-driven economic growth. Participants are
          encouraged to tackle challenges in sustainable development, Health
          Tech, Agritech, EV, and Al, inspiring them to craft inventive
          solutions.
        </p>
        <p>
          <a href="#" className="text-xl">
            Click here to know more about Rise N Start Ignite and registration.
          </a>
        </p>
      </section>
    </>
  );
}
