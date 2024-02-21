import React from "react";
import Image from "next/image";

function webinar() {
  return (
    <>
      <section>
        <div className=" container ">
          <div className=" py-16 flex justify-between">
            <div className=" w-[60%] ">
                <div className="">
                  <Image src= "/img2/mokmqemopiljipjgdaxn.jpg" alt="test" width={1000} height={200} className="w-full h-72" />
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
                    <h2 className="font-medium">Sebastian George , S J</h2>
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
              <form action="#" className="shadow-xl border-2 px-4">
                <h2 className="text-center">Webinar Registration Form</h2>
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
                  <p>
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
                <p className="text-sm">
                  By submitting your info in the form above ,you agree to our{" "}
                  <span className="text-blue-700"> Term of Use</span> and{" "}
                  <span className="text-blue-700"></span>Privacy Notice. We may
                  use this info to contact you and / or use data from third
                  parties to personalize your experience.
                </p>
                <button className="w-full bg-blue-900 ">Submit</button>
              </form>
            </div>
          </div>
          </div>
      </section>

      <section className="bg-gray-100">
        <div className="container ">
          <div className="w-[60%] py-10">
            <h1 className="text-3xl m-0 mb-6 font-bold ">Agenda</h1>
            <p className="font-medium">
              <span className="font-semibold">Objective : </span>Earn a
              prestigious MIT IDSS certificate with MIT IDSS's Data Science and
              Machine Learning program. Dive into ChatGPT and Generative Al
              modules and gain cutting-edge skills through hands-on learning
            </p>
            <p className="font-medium">
              <span className="font-semibold">Program Details: </span>The Data
              Science and Machine Learning Program curriculum has been carefully
              crafted by MIT faculty to provide you with the skills & knowledge
              to apply data science techniques to help you make data-driven
              decisions. Encompass the most business-relevant technologies, such
              as Machine Learning, Deep Learning, NLP, Recommendation Systems,
              ChatGPT, Generative Al and more.
            </p>
            <p className="font-medium">
              <span className="font-semibold">Career Opportunities: </span>Earn
              a Data Science professional certificate from Massachusetts
              Institute of Technology (MIT) IDSS upon the successful completion
              of the program. The exhaustive curriculum of this program will
              foster you into a highly skilled Data Science and Machine Learning
              professional, which will help you land a job at the world's
              leading organizations.
            </p>
            <p className="font-medium">
              <span className="font-semibold">Income Opportunities : </span>Both
              these professions can offer high earning potential. Typically, a
              machine learning engineer earns a slightly higher salary than a
              data scientist. On average, a machine learning engineer makes
              $109,983 per year. This varies depending on their level of
              education, years of experience and location of employment.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <div className="w-[60%] py-10">
            <h2 className="text-3xl mb-2">
              Data Science and Machine Learning:
            </h2>
            <h2 className="font-semibold text-3xl mt-0">
              Making Data-Driven Decisions Program
            </h2>
            <p className="font-medium">
              The Data Science and Machine Learning: Making Data-Driven
              Decisions program has a curriculum carefully crafted by MIT
              faculty to provide you with the skills and knowledge to apply data
              science techniques to help you make data-driven decisions. This
              data science professional certificate program has been designed
              for the needs of data professionals looking to grow their careers
              and enhance their data science skills to solve complex business
              problems. In a relatively short period, the program aims to build
              your understanding of most industry-relevant technologies today,
              such as machine learning to deep learning, network analytics,
              recommendation systems, graph neural networks, time series,
              ChatGPT and Generative Al. Hence, the program is best suited for
              learners with prior exposure to working with data using some tools
              and applying basic algorithms and methods
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default webinar;
