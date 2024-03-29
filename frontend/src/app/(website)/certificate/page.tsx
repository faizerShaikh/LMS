import { Image } from "components/layout/Image";
import { Button } from "components/layout/buttons";
import React from "react";

function CertificatePage() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container m-auto">
          <div className="flex  pb-10">
            <div className="w-1/2">
              <div className="w-96 h-96 border-8 border-black">
                {/* <Image src="/img2/dyp.png" alt="dyp" height={384} width={384} /> */}
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-4xl font-semibold m-0 mb-2">
                Certificate Programme in
              </h1>
              <h2 className="m-0 mb-3 font-medium text-3xl">
                Hospital & Health Care Management
              </h2>
              <h3 className="m-0 mb-3 font-medium text-xl">
                Dr. D. Y. Patil Vidyapeeth, Pune <br /> (Deemed To Be
                University)
              </h3>
              <p className="m-0 mb-3 font-medium text-lg">
                - Centre For Online Learning (DPU-COL)
              </p>
              <p className="m-0 mb-6 font-medium ">
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
                <Button className="w-full py-2 bg-white text-black border-2 font-semibold">
                  Apply Now
                </Button>
                <Button className="w-full py-2 bg-blue-900 text-white font-semibold">
                  Syllabus
                </Button>
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

      <section>
        <div className="container m-auto py-16">
          <h2 className="text-center m-0 mb-12 text-3xl">
            Programme Highlights
          </h2>
          <div className="flex px-20">
            <div className="w-1/2">
              <div className="items-center flex">
                <Image
                  src="/img2/Globally-Recognized.svg"
                  alt="test"
                  width={80}
                  height={80}
                />{" "}
                <p>Globally Recognized</p>
              </div>
              <div className="items-center flex">
                <Image
                  src="/img2/Affordable-Degree.svg"
                  alt="test"
                  width={80}
                  height={80}
                />{" "}
                <p>Affordable Degree Program</p>
              </div>
              <div className="items-center flex">
                <Image
                  src="/img2/Guest-Lectures.svg"
                  alt="test"
                  width={80}
                  height={80}
                />{" "}
                <p>Visiting Faculty & Guest Lectures</p>
              </div>
            </div>
            <div className="w-1/2 ">
              <div className="items-center flex">
                <Image
                  src="/img2/Online-Degree.svg"
                  alt="test"
                  width={80}
                  height={80}
                />{" "}
                <p>Online degree equivalent to On campus degree - UGC</p>
              </div>
              <div className="items-center flex">
                <Image
                  src="/img2/Recorded-Lectures.svg"
                  alt="test"
                  width={80}
                  height={80}
                />{" "}
                <p>Recorded Lectures</p>
              </div>
              <div className="items-center flex">
                <Image
                  src="/img2/Webinars.svg"
                  alt="test"
                  width={80}
                  height={80}
                />{" "}
                <p>Industry Oriented Webinars</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white">
        <div className="container py-16 m-auto">
          <div className="text-center">
            <h2 className="text-3xl m-0 mb-12">Recognization & Association</h2>
          </div>
          <div className="flex justify-between ">
            <div className="text-center">
              <Image
                src="/img2/UGC-Approved.jpg"
                alt="test"
                width={100}
                height={100}
                className="rounded-full mb-0"
              />
              <h2 className="mb-0 mt-1">UGC</h2>
              <p className="m-0">Approved</p>
            </div>

            <div className="text-center">
              <Image
                src="/img2/AICTE-Approved.jpg"
                alt="test"
                width={100}
                height={100}
                className="rounded-full mb-0"
              />
              <h2 className="mb-0 mt-1">AICTE</h2>
              <p className="m-0">Approved</p>
            </div>

            <div className="text-center">
              <Image
                src="/img2/ISO.jpg"
                alt="test"
                width={100}
                height={100}
                className="rounded-full mb-0"
              />
              <h2 className="mb-0 mt-1">ISO</h2>
              <p className="m-0">9001-2015</p>
            </div>
            <div className="text-center">
              <Image
                src="/img2/NAAC-Accredited.jpg"
                alt="test"
                width={100}
                height={100}
                className="rounded-full mb-0"
              />
              <h2 className="mb-0 mt-1">NAAC</h2>
              <p className="m-0">Accredited</p>
            </div>
            <div className="text-center">
              <Image
                src="/img2/AIU-Regognized.jpg"
                alt="test"
                width={100}
                height={100}
                className="rounded-full mb-0"
              />
              <h2 className="mb-0 mt-1">AIU</h2>
              <p className="m-0">Recognised</p>
            </div>
            <div className="text-center">
              <Image
                src="/img2/ACU-Regognized.jpg"
                alt="test"
                width={100}
                height={100}
                className="rounded-full mb-0"
              />
              <h2 className="mb-0 mt-1">ACU</h2>
              <p className="m-0">Recognised</p>
            </div>
            <div className="text-center">
              <Image
                src="/img2/AAAOCHAM.jpg"
                alt="test"
                width={100}
                height={100}
                className="rounded-full mb-0"
              />
              <h2 className="mb-0 mt-1">ASSOCHAM</h2>
              <p className="m-0">India</p>
            </div>
            <div className="text-center">
              <Image
                src="/img2/WES-Regognized.jpg"
                alt="test"
                width={100}
                height={100}
                className="rounded-full mb-0"
              />
              <h2 className="mb-0 mt-1">WES</h2>
              <p className="m-0">Recognised</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container py-16 m-auto">
          <h2 className="text-center m-0 mb-12 text-3xl">
            Programme Structure
          </h2>
          <div className="flex flex-wrap gap-6 ">
            <div className="bg-white w-[32%] text-center rounded-xl shadow-2xl py-8 px-4">
              <Image
                src="/img2/medical_8056166.svg"
                width={130}
                height={130}
                alt="test"
              />
              <h2 className="font-medium">Hospital Administration</h2>
            </div>

            <div className="bg-white w-[32%] text-center rounded-xl shadow-2xl py-8 px-4">
              <Image
                src="/img2/care_6929328 (2).svg"
                width={130}
                height={130}
                alt="test"
              />
              <h2 className="font-medium">Marketing of Health Care Services</h2>
            </div>

            <div className="bg-white w-[32%] text-center rounded-xl shadow-2xl py-8 px-4">
              <Image
                src="/img2/medical-kit_7170397.svg"
                width={130}
                height={130}
                alt="test"
              />
              <h2 className="font-medium">
                Indoor and Outdoor Hospital Services
              </h2>
            </div>

            <div className="bg-white w-[32%] text-center rounded-xl shadow-2xl py-8 px-4">
              <Image
                src="/img2/quality.svg"
                width={130}
                height={130}
                alt="test"
              />
              <h2 className="font-medium">
                Quality Management in Health Care Services
              </h2>
            </div>

            <div className="bg-white w-[32%] text-center rounded-xl shadow-2xl py-8 px-4">
              <Image
                src="/img2/hospital_7375443.svg"
                width={130}
                height={130}
                alt="test"
              />
              <h2 className="font-medium">
                Legal Aspects of Hospital Administration
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-16 m-auto">
        <h2>Eligibility Criteria</h2>
        <p className="font-semibold">
          Bachelor's Degree Holder / Graduate in any Discipline from a
          Recognised University or a Diploma Holders.
        </p>
      </section>
      <section className="bg-gray-100">
        <div className="container flex items-center py-16 m-auto">
          <div className="w-1/2 items-center flex justify-center">
            <Image
              src="/img2/DPU---Centre-for-online-learining.jpg"
              alt="test"
              width={350}
              height={280}
            />
          </div>
          <div className="w-1/2">
            <h2 className="font-semibold text-xl">
              About Dr. D. Y. Patil Vidyapeeth (Deemed To Be University)
            </h2>
            <p>
              Dr. D. Y. Patil Vidyapeeth, Pune (DPU) began under the leadership
              of thegreat visionary, Dr. DY Patil. It began with only one
              institution under its fold - Dr. D.Y.Patil Medical College,
              Hospital & Research Center. The Institute started as a center of
              excellence with an emphasis on medical education and research
              gained recognition as one of the best in the state and across the
              country. DPU COL has nurtured and produced quality doctors,
              dentists, nurses, optometrists, physiotherapists,
              biotechnologists, and management executives.
              <br /> Dr. D. Y. Patil Vidyapeeth aims to take a full-stack
              approach of the content, technology marketing, and services to
              offer quality education in close partnership with corporates and
              academics to offer rigorous and industry-relevant programmes. DPU
              COL brings Its expertise to you. The Institute has the experience
              and expertise to deliver specialized programmes designed to meet
              your professional needs.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container flex items-center py-16 m-auto">
          <div className="w-3/4">
            <h2 className="text-2xl font-medium">
              Enroll in Certificate Programme in Hospital & Health Care
              Management today
            </h2>
            <p className="text-xl font-medium">
              Dy Patil is Dedicated to Preparing Ambitious Professionals with
              the Forward-Thinking Skills Sought by Employers Globally.
            </p>
          </div>
          <div className="w-1/4 flex justify-center">
            <Button>Enroll Now</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Specializations</h2>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <ul className="font-medium">
                <li>Marketing Management (MM)</li>
                <li>Human Resource Management (HRM)</li>
                <li>Finance Management (FM) IT and Systems Management (ITM)</li>
                <li>Project Management Operations Management (OM)</li>
                <li>
                  Hospital Administration and Health Care Management (HAHM)
                </li>
                <li>Business Analytics (BA)</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="font-medium">
                <li>International Business Management (IBM)</li>
                <li>Artificial Intelligence & Machine Learning (AIML)</li>
                <li>Logistics, Materials & Supply chain Management (LSCM)</li>
                <li>Block Chain Management (BCM)</li>
                <li>Digital Marketing (DM)</li>
                <li>FinTech (FT)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container py-16 m-auto">
          <h2 className="text-center m-0 mb-14 text-3xl font-semibold">
            Admission Process
          </h2>
          <div className="flex justify-between">
            <div className="bg-white w-[30%] rounded-3xl py-8 px-6 shadow-2xl">
              <div className="flex justify-center">
                <Image
                  src="/img2/user-protection_11585881.png"
                  alt="test"
                  width={130}
                  height={130}
                  className="justify-center"
                />
              </div>
              <h2 className="font-medium">Learner's Authentication</h2>

              <div className="flex items-center gap-1 mb-3">
                <Image
                  src="/img2/Check-Mark.svg"
                  alt="test"
                  width={15}
                  height={15}
                />
                <p className="m-0">Click 'Register Now' to start the process</p>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <Image
                  src="/img2/Check-Mark.svg"
                  alt="test"
                  width={15}
                  height={15}
                />
                <p className="m-0">Fill in Your basic details</p>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <Image
                  src="/img2/Check-Mark.svg"
                  alt="test"
                  width={15}
                  height={15}
                />
                <p className="m-0">Complete Mobile number verification</p>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <Image
                  src="/img2/Check-Mark.svg"
                  alt="test"
                  width={15}
                  height={15}
                />
                <p className="m-0">Complete e-Mail verification</p>
              </div>
            </div>
            <div className="bg-white w-[30%] rounded-3xl py-8 px-6 shadow-2xl">
              <div className="flex justify-center">
                <Image
                  src="/img2/agenda_11547641.png"
                  alt="test"
                  width={130}
                  height={130}
                  className="justify-center"
                />
              </div>
              <h2 className="font-medium">Admission Form</h2>

              <div className="flex items-center gap-1 mb-3">
                <Image
                  src="/img2/Check-Mark.svg"
                  alt="test"
                  width={15}
                  height={15}
                />
                <p className="m-0">Fill in basic personal information</p>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <Image
                  src="/img2/Check-Mark.svg"
                  alt="test"
                  width={15}
                  height={15}
                />
                <p className="m-0">
                  Fill in Educational and Employment details
                </p>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <Image
                  src="/img2/Check-Mark.svg"
                  alt="test"
                  width={15}
                  height={15}
                />
                <p className="m-0">Upload Photo and Signature</p>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <Image
                  src="/img2/Check-Mark.svg"
                  alt="test"
                  width={15}
                  height={15}
                />
                <p className="m-0">Online Fees Payment</p>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <Image
                  src="/img2/Check-Mark.svg"
                  alt="test"
                  width={15}
                  height={15}
                />
                <p className="m-0">Submit Form</p>
              </div>
            </div>

            <div className="bg-white w-[30%] rounded-3xl py-8 px-6 shadow-2xl">
              <div className="flex justify-center">
                <Image
                  src="/img2/checked_11522684.png"
                  alt="test"
                  width={130}
                  height={130}
                  className="justify-center"
                />
              </div>
              <h2 className="font-medium">
                Admission Confirmation by University
              </h2>
              <p>
                After the verification of all the documents and fee receipts,
                admission confirmation email and SMS will be sent, which will
                include the student login credentials along with link.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="container  m-auto">
          <div className="flex items-center border-2 shadow-2xl">
            <div className="w-1/2 px-4">
              <h2 className="text-center text-3xl font-semibold">
                Investment for life{" "}
              </h2>
              <div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    src="/img2/Check-Mark.svg"
                    alt="test"
                    width={15}
                    height={15}
                  />
                  <p className="m-0 font-medium text-lg">
                    Program fees structured on a per-semester basis
                  </p>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    src="/img2/Check-Mark.svg"
                    alt="test"
                    width={15}
                    height={15}
                  />
                  <p className="m-0 font-medium text-lg">
                    Approximate tuition per semester of USD 675.00 for foreign
                    students
                  </p>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    src="/img2/Check-Mark.svg"
                    alt="test"
                    width={15}
                    height={15}
                  />
                  <p className="m-0 font-medium text-lg">
                    This amounts to approximately $112 USD per month
                  </p>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    src="/img2/Check-Mark.svg"
                    alt="test"
                    width={15}
                    height={15}
                  />
                  <p className="m-0 font-medium text-lg">
                    Investment of $2,700 (latest total program tuition fees)
                  </p>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    src="/img2/Check-Mark.svg"
                    alt="test"
                    width={15}
                    height={15}
                  />
                  <p className="m-0 font-medium text-lg">
                    Expected starting income averaging $60,000.00 globally
                  </p>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    src="/img2/Check-Mark.svg"
                    alt="test"
                    width={15}
                    height={15}
                  />
                  <p className="m-0 font-medium text-lg">No Student debt</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src="/img2/3d-illustration-academic-cap-books-money_107791-16989.jpg"
                width={600}
                height={450}
                alt="test"
                className="w-full !h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto">
          <div className="text-center p-16">
            <h2 className="font-semibold">
              Want more details?
              <br /> Explore the course thoroughly by downloading the brochure.
            </h2>
            <Button>
              <Image
                src="/img2/download.svg"
                alt="download"
                width={20}
                height={20}
              />
              Download Brochure
            </Button>
          </div>
          <div className="shadow-2xl rounded-md mx-32">
            <p className="p-8">
              <span className="font-bold">Disclaimer:</span> RiseBack is the
              authorized 'Enrollment Partner' for DY Patil University-Centre for
              Online Learning. The courses would be offered directly by DY Patil
              University-Centre for Online Learning. The fees would be directly
              paid to the university.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CertificatePage;

export const revalidate = 60;
