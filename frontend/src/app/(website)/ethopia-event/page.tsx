import React from "react";
import Image from "next/image";
import LOGO from "../../../../public/img2/Author.svg";

function page() {
  return (
    <>
      <section>
        <div className="h-[400px]">
          <Image
            src="/img2/gamification-creative-collage-concept-800x445.jpeg"
            width={500}
            height={50}
            alt=""
            className="w-full h-[400px] "
          />
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-semibold m-0 mb-8">
              Rise N Start Ignite: Ethopia's First Startup Pitch Comprtition For
              Students{" "}
            </h2>
          </div>
          <div className="flex items-center mb-12">
            <div className="w-1/2 ">
              <p className="text-lg">
                <span className="text-blue-900 font-semibold">Event Date:</span>{" "}
                January 19th-20th, 2024
              </p>
              <p className="text-lg">
                <span className="text-blue-900 font-semibold">Time:</span> 10 AM
                - 5PM
              </p>
              <p className="text-lg">
                <span className="text-blue-900 font-semibold">
                  Registration Deadline:
                </span>{" "}
                January 10th, 2024
              </p>
              <p className="font-semibold">
                All Registered students would receive 20% Scholarship on IT
                courses
              </p>
            </div>
            <div className="w-1/2 flex justify-end">
              <form action="#" className="shadow-2xl border-2 px-4 w-2/3">
                <h2 className="text-center">Event Registration Form</h2>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 border mb-4"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 border mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border mb-4"
                />
                <div className="w-full border flex">
                  <select name="drop" id="drop" className="p-2 bg-gray-100">
                    <option value="">+91</option>
                    <option value="">+91</option>
                    <option value="">+91</option>
                    <option value="">+91</option>
                    <option value="">+91</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    className="w-full p-2"
                  />
                </div>
                <div>
                  <p className="font-medium text-lg">
                    Which Degree do you want to persue ?
                    <span className="text-red-600">*</span>
                  </p>
                  <div className="flex">
                    <input
                      type="radio"
                      name="radio"
                      id="radio"
                      placeholder="Masters"
                    />
                    <label htmlFor="radio">Masters</label>
                    <input
                      type="radio"
                      name="radio"
                      id="radio"
                      placeholder="Bachelor's"
                    />
                    <label htmlFor="radio">Bachelor's</label>
                    <p>Courses</p>
                  </div>
                </div>
                <p className="text-xs font-medium">
                  By submitting your info in the form above ,you agree to our{" "}
                  <span className="text-blue-700"> Term of Use</span> and{" "}
                  <span className="text-blue-700"></span>Privacy Notice. We may
                  use this info to contact you and / or use data from third
                  parties to personalize your experience.
                </p>
                <button className="w-full bg-blue-900  text-white py-1 text-lg rounded-md mb-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-900">
        <div className="container text-center py-8 ">
          <h2 className="text-white font-semibold text-3xl">
            About Rise N Start Ignite
          </h2>
          <p className="text-white text-lg mb-6">
            Hosted by RiseBack.org, Rise N Start Ignite is a groundbreaking
            startup pitch competition that promises an immersive experience for
            all participants. This event offers hands-on skill development,
            exposure to industry experts, and a platform for collaboration.
          </p>
          <p className="text-white text-lg font-semibold mb-6">
            Join the Transformation: Don't miss the chance to be a part of
            Ethiopia's tech transformation.
          </p>
          <p className="text-white text-lg">
            Rise N Start Ignite is where innovative ideas meet real-world
            challenges, where collaboration sparks entrepreneurship, and where
            the future of Ethiopia's tech landscape begins to take shape.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-8 mb-8">
          <div className="text-center">
            <h2 className="uppercase text-3xl">what to expect</h2>
          </div>
          <div className="flex flex-wrap justify-evenly gap-8">
            <div className="relative   w-[35%] overflow-hidden ">
              <Image
                src="/img2/Empowering-Youth.jpg"
                width={300}
                height={300}
                alt="test "
                className="w-full h-64 rounded-md"
              />
              <div className="absolute inset-0 text-center flex flex-col justify-end">
                <h2 className="text-white font-semibold m-0">
                  Empowring Youth
                </h2>
                <p className="text-white mt-1">
                  We firmly believe that Ethiopia's youth hold the key to
                  technological innovation. Rise N Start Ignite equips them with
                  the skills, knowledge, and mindset needed to thrive in the
                  digital age
                </p>
              </div>
            </div>
            <div className="relative  overflow-hidden w-[35%]">
              <Image
                src="/img2/Fostering-Innovation.jpg"
                width={300}
                height={300}
                alt="test"
                className="w-full h-64 rounded-md"
              />
              <div className="absolute inset-0 text-center flex flex-col justify-end ">
                <h2 className="text-white font-semibold m-0">
                  Fostering Innovation
                </h2>
                <p className="text-white mt-1">
                  Innovation is the heart of progress. Through hands-on
                  experiences, mentorship, and collaborative problem-solving, we
                  cultivate a culture of innovation that will shape Indonesia's
                  technological future.
                </p>
              </div>
            </div>
            <div className="relative  overflow-hidden w-[35%]">
              <Image
                src="/img2/Catalyzing-Entrepreneurship.jpg"
                width={300}
                height={300}
                alt="test "
                className="w-full h-64 rounded-md"
              />
              <div className="absolute inset-0 text-center flex flex-col justify-end">
                <h2 className="text-white font-semibold m-0">
                  Catalyzing Entrepreneurship
                </h2>
                <p className="text-white mt-1">
                  Rise N Start Ignite, ignites the entrepreneurial spirit within
                  participants by exposing them to real-world challenges and
                  encouraging creative solutions. We're here to nurture the next
                  wave of tech-driven startups.
                </p>
              </div>
            </div>
            <div className="relative  overflow-hidden w-[35%]">
              <Image
                src="/img2/Connecting-Industry-Experts.jpg"
                width={300}
                height={300}
                alt="test "
                className="w-full h-64 rounded-md"
              />
              <div className="absolute inset-0 text-center flex flex-col justify-end">
                <h2 className="text-white font-semibold m-0">
                  Connecting Industry Experts
                </h2>
                <p className="text-white mt-1">
                  We bring together seasoned professionals and industry leaders
                  to guide and mentor participants, bridging the gap between
                  theory and practical application.
                </p>
              </div>
            </div>
            <div className="relative  overflow-hidden w-[35%]">
              <Image
                src="/img2/Driving-Economic-Growth.jpg"
                width={300}
                height={300}
                alt="test "
                className="w-full h-64 rounded-md"
              />
              <div className="absolute inset-0 text-center flex flex-col justify-end">
                <h2 className="text-white font-semibold m-0">
                  Driving Economic Growth
                </h2>
                <p className="text-white mt-1">
                  As Ethiopia strives to solidify its position as a pioneering
                  African economy, Rise N Start Ignite contributes to the
                  nation's economic growth by equipping youth with skills that
                  align with industry demands
                </p>
              </div>
            </div>
            <div className="relative  overflow-hidden w-[35%]  ">
              <Image
                src="/img2/Join-the-Transformation.jpg"
                width={300}
                height={300}
                alt="test "
                className="w-full h-64 rounded-md"
              />
              <div className="absolute inset-0 text-center flex flex-col justify-end">
                <h2 className="text-white font-semibold m-0">
                  Join the Transformation
                </h2>
                <p className="text-white mt-1">
                  Don't miss the chance to be a part of Ethiopia's tech
                  transformation. Rise N Start Ignite is where innovative ideas
                  meet real-world challenges, where collaboration sparks
                  entrepreneurship, and where the future of Ethiopia's tech
                  landscape begins to take shape
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container py-6">
          <h2 className="text-center text-3xl mb-12">Application Process</h2>
          <div className="flex flex-col  items-center">
            <div className="w-1/2 flex justify-between bg-blue-900 px-8 py-4 rounded-full h-48 mb-8">
              <div className="flex items-center  mr-6 rounded-full bg-white w-[30%]">
                <Image
                  src="/img2/resume_942799.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="m-auto "
                />
              </div>
              <div className="text-white w-[70%]">
                <h2 className="m-0 text-lg mb-2 font-medium">
                  1. Registration
                </h2>
                <p className="m-0 font-light text-[15px]">
                  Interested participants can register for Free (No Application
                  Fees) Rise N Start Igniteonour official website. The
                  registration period typically opens well in advance of the
                  event dates, allowing ample time for aspiring entrepreneurs to
                  signup.
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-between bg-blue-900 px-8 py-4 rounded-full h-48 mb-8">
              <div className="flex items-center  mr-6 rounded-full bg-white w-[30%]">
                <Image
                  src="/img2/laptop_13258410.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="m-auto "
                />
              </div>
              <div className="text-white w-[70%]">
                <h2 className="m-0 text-lg mb-2 font-medium">
                  2. Application Submission
                </h2>
                <p className="m-0 font-light text-[15px]">
                  Once registered, participants are required to submit their
                  startup pitches or ideas through the provided online portal.
                  These pitches should outline their innovative concepts, market
                  potential, and how their startups can address real-world
                  challenges.
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-between bg-blue-900 px-8 py-4 rounded-full h-48 mb-8">
              <div className="flex items-center  mr-6 rounded-full bg-white w-[30%]">
                <Image
                  src="/img2/internet_9776252.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="m-auto "
                />
              </div>
              <div className="text-white w-[70%]">
                <h2 className="m-0 text-lg mb-2 font-medium">
                  3. Industry domains
                </h2>
                <p className="m-0 font-light text-[15px]">
                  Industry domains for developing Startup ideas E-Commerce,
                  Health Tech, Agrit Tech & Food Tech and Artificial Technology
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-between bg-blue-900 px-8 py-4 rounded-full h-48 mb-8">
              <div className="flex items-center  mr-6 rounded-full bg-white w-[30%]">
                <Image
                  src="/img2/clipboard_1991245.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="m-auto "
                />
              </div>
              <div className="text-white w-[70%]">
                <h2 className="m-0 text-lg mb-2 font-medium">4. Evaluation</h2>
                <p className="m-0 font-light text-[15px]">
                  A dedicated panel of industry experts and judges will
                  carefully assess all submitted applications. They will
                  consider factors such as innovation, feasibility, scalability,
                  and the potential impact of each startup idea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-6">
          <h2 className="text-center text-3xl mb-12">Selection Process</h2>
          <div className="flex flex-col  items-center">
            <div className="w-1/2 flex justify-between  px-8 py-4 rounded-full h-48 mb-8 shadow-xl">
              <div className="flex items-center  mr-6 rounded-full bg-blue-900  w-[30%]">
                <Image
                  src="/img2/deadline_439398.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="m-auto "
                />
              </div>
              <div className=" w-[70%]">
                <h2 className="m-0 text-lg mb-2 font-medium">1. Deadline</h2>
                <p className="m-0 font-light text-[15px]">
                  All application should be
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-between px-8 py-4 rounded-full h-48 mb-8 shadow-xl">
              <div className="flex items-center  mr-6 rounded-full bg-blue-900  w-[30%]">
                <Image
                  src="/img2/human-resources_1427805.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="m-auto "
                />
              </div>
              <div className=" w-[70%]">
                <h2 className="m-0 text-lg mb-2 font-medium">
                  2. Shortlisting
                </h2>
                <p className="m-0 font-light text-[15px]">
                  After a thorough evaluation, as select number of startups will
                  be shortlisted to participate in the main
                  competition.Shortlisted teams will be notified via email.
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-between  px-8 py-4 rounded-full h-48 mb-8 shadow-xl">
              <div className="flex items-center  mr-6 rounded-full bg-blue-900 w-[30%]">
                <Image
                  src="/img2/mentorship_12494895.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="m-auto "
                />
              </div>
              <div className=" w-[70%]">
                <h2 className="m-0 text-lg mb-2 font-medium">3. Mentorship</h2>
                <p className="m-0 font-light text-[15px]">
                  Shortlisted teams will have the opportunity to engage in
                  mentorship sessions with experienced professionals to refine
                  their pitches and business plans.
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-between  px-8 py-4 rounded-full h-48 mb-8 shadow-xl">
              <div className="flex items-center  mr-6 rounded-full bg-blue-900 w-[30%]">
                <Image
                  src="/img2/assessment_11725766.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="m-auto !stroke-white	"
                />
              </div>
              <div className="w-[70%]">
                <h2 className="m-0 text-lg mb-2 font-medium">
                  4. Final Pitch Preparation
                </h2>
                <p className="m-0 font-light text-[15px]">
                  Shortlisted teams will work diligently to fine-tune their
                  startup pitches and prepare compelling presentations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container py-16">
          <h2 className="text-center m-0 mb-12 text-3xl font-semibold">
            Winners
          </h2>
          <div className="flex flex-wrap justify-between gap-5">
            <div className="w-[23%] text-center rounded-xl bg-white py-10 px-2  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image
                src="/img2/presentation_4498160.png"
                height={100}
                width={100}
                alt="test"
              ></Image>
              <h3>Pitch Day</h3>
              <p className="text-sm mb-0">
                On the day of the competition, each shortlisted team will
                present their startup pitch to a panel of judges and a live
                audience. This event is the culmination of weeks of preparation
                and hard work
              </p>
            </div>

            <div className="w-[23%] text-center rounded-xl bg-white py-10 px-2  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image
                src="/img2/presentation_4498160.png"
                height={100}
                width={100}
                alt="test"
              ></Image>
              <h3>Judging Criteria</h3>
              <p className="text-sm mb-0">
                Judges will evaluate the pitches based on criteria such as
                innovation, market potential, feasibility, scalability, and the
                overall quality of the presentation.
              </p>
            </div>

            <div className="w-[23%] text-center rounded-xl bg-white py-10 px-2  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image
                src="/img2/presentation_4498160.png"
                height={100}
                width={100}
                alt="test"
              ></Image>
              <h3>Announcement of Winners</h3>
              <p className="text-sm mb-0">
                After careful deliberation, the winners will be announced during
                a special awards ceremony. Rise N Start Ignite recognizes
                outstanding startups in several categories, which may include
              </p>
            </div>

            <div className="w-[23%] text-center rounded-xl bg-white py-10 px-2  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image
                src="/img2/presentation_4498160.png"
                height={100}
                width={100}
                alt="test"
              ></Image>
              <h3>Best Overall Startup</h3>
              <p className="text-sm mb-0">
                The startup with the most compelling pitch and potential for
                growth.
              </p>
            </div>

            <div className="w-[23%] text-center rounded-xl bg-white py-10 px-2  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image
                src="/img2/presentation_4498160.png"
                height={100}
                width={100}
                alt="test"
              ></Image>
              <h3>Innovation Award</h3>
              <p className="text-sm mb-0">
                Recognizing the most innovative and groundbreaking concept
              </p>
            </div>

            <div className="w-[23%] text-center rounded-xl bg-white py-10 px-2  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image
                src="/img2/presentation_4498160.png"
                height={100}
                width={100}
                alt="test"
              ></Image>
              <h3>Impact Award</h3>
              <p className="text-sm mb-0">
                Honoring startups with a clear social or environmental impact
              </p>
            </div>

            <div className="w-[23%] text-center rounded-xl bg-white py-10 px-2  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image
                src="/img2/presentation_4498160.png"
                height={100}
                width={100}
                alt="test"
              ></Image>
              <h3>Prizes</h3>
              <p className="text-sm mb-0">
                Winners will receive a potential range of prizes, which may
                include cash awards, access to mentorship programs, co-working
                space memberships, and opportunities for investment or
                partnerships
              </p>
            </div>

            <div className="w-[23%] text-center rounded-xl bg-white py-10 px-2  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <Image
                src="/img2/presentation_4498160.png"
                height={100}
                width={100}
                alt="test"
              ></Image>
              <h3>Post-Event Support</h3>
              <p className="text-sm mb-0">
                Rise N Start Ignite e remains committed to supporting all
                participating startups on their entrepreneurial journey,
                providing ongoing mentorship, networking opportunities, and
                access to resources even after the competition concludes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <div>
            <h2>Strategic Partner</h2>
            <p>
              Event is supported by easily recognisable companies and products
              which we use everyday
            </p>
          </div>
          <div></div>
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
              <span className="font-bold">Telephone/WhatsApp:</span>
              <span className="text-blue-700">+251911428980 +251919879517</span>
              <span className="font-bold">Email:</span>
              <span className="text-blue-700">zebib@riseback.org</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;

export const revalidate = 60;
