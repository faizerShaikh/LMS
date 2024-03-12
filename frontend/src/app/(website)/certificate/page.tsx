import React from "react";

function CertificatePage() {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex  py-10">
            <div className="w-1/2"></div>
            <div className="w-1/2">
              <h1 className="text-4xl m-0 mb-1">Certificate Programme in</h1>
              <h2 className="m-0 mb-2 font-semibold text-3xl">
                Hospital & Health Care Management
              </h2>
              <h3 className="m-0 mb-2 font-bold text-xl">
                Dr. D. Y. Patil Vidyapeeth, Pune <br /> (Deemed To Be
                University)
              </h3>
              <p className="m-0 mb-2 font-semibold text-lg">
                - Centre For Online Learning (DPU-COL)
              </p>
              <p className="m-0 mb-6 font-semibold ">
                Health care management is a vital component of any health care
                system, and hospital administration is an essential part of the
                health care management process. Hospitals need to be well
                managed to ensure that they are providing quality care to
                patients, while at the sametime ensuring that the hospital runs
                at maximum efficiency. Hospital administration programs are
                designed to provide the necessary training and education to
                those responsible for managing hospitals, and these programs are
                available in a variety of formats.
              </p>
              <div className="flex justify-between gap-5 ">
                <button className="w-full py-2 bg-white border-2 font-semibold">
                  Apply Now
                </button>
                <button className="w-full py-2 bg-blue-900 text-white font-semibold">
                  Syllabus
                </button>
              </div>
            </div>
          </div>
          <div className="flex border-2 rounded-2xl shadow-2xl  py-8">
            <div className="w-1/4 border-r-2 border-black pl-6">
              <div className="mb-8">
                <p className="font-bold text-xl m-0">Mode</p>
                <p className="font-medium text-lg">Online</p>
              </div>
              <div className="">
                <p className="font-bold text-xl">Courses</p>
                <p className="font-medium text-lg m-0">5</p>
              </div>
            </div>
            <div className="w-1/4 border-r-2 border-black pl-6">
              <div className="mb-8">
                <p className="font-bold text-xl m-0">Learning Path</p>
                <p className="font-medium text-lg">Post Graduation</p>
              </div>
              <div className="">
                <p className="font-bold text-xl">Credits</p>
                <p className="font-medium text-lg m-0">20</p>
              </div>
            </div>
            <div className="w-1/4 border-r-2 border-black pl-6">
              <div className="mb-8">
                <p className="font-bold text-xl m-0">Course Duration</p>
                <p className="font-medium text-lg">300 Hours</p>
              </div>
              <div className="">
                <p className="font-bold text-xl">Webinars</p>
                <p className="font-medium text-lg m-0">Yes</p>
              </div>
            </div>
            <div className="w-1/4 pl-6 ">
              <div className="mb-8">
                <p className="font-bold text-xl m-0">Fees</p>
                <p className="font-medium text-lg">Indian : INR 28,000</p>
                <p className="font-medium text-lg">Foreigners : $ 650</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CertificatePage;

export const revalidate = 60;