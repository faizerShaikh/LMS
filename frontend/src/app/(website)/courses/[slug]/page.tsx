import { Download } from "@carbon/icons-react";
import axios from "axios";
import { Button } from "components/layout/buttons";
import {
  AdmissionProcessInterface,
  AssociationInterface,
  CourseSpecializationInterface,
  ProgramHiglightsInterface,
} from "interfaces";
import Image from "next/image";

export default async function SingleCourse({
  params,
}: {
  params: { slug: string };
}) {
  let data: CourseSpecializationInterface;
  let url = `${process.env.BASE_API_URL}/configurations/course-specialization/slug/${params.slug}/`;
  const response = await axios.get(url);
  data = response.data.data;
  console.log(data, "<<<<<<<<<<<<<<<");

  const programHiglightsData: ProgramHiglightsInterface[] =
    data.programHiglights ?? [];
  const middleIndex = Math.ceil(programHiglightsData.length / 2);
  const firstHalf = programHiglightsData.slice(0, middleIndex);
  const secondHalf = programHiglightsData.slice(middleIndex);
  return (
    <>
      <section className="bg-gray-100">
        <div className="flex container items-center py-8 m-auto">
          <div className="w-2/4">
            <Image
              src={`${process.env.BASE_MEDIA_URL}/${data.course?.course_image}`}
              height={400}
              width={300}
              alt=""
              className="w-full"
            />
          </div>
          <div className="w-2/4 px-8  ">
            <h2 className="font-bold text-2xl m-0 pb-6">{data.name}</h2>
            <div
              className="font-semibold mb-10"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>

            <div className="flex justify-between gap-5">
              <div className="border border-black w-1/2">
                <Button className="py-2 w-full  bg-white text-black">
                  Apply Now
                </Button>
              </div>
              <Button className=" py-2  w-1/2  ">
                <Download className="mr-3 size-5" />
                Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container m-auto my-14">
        <div className="flex border-2 rounded-2xl shadow-2xl  py-8">
          <div className="w-1/4 border-r-2 border-black pl-6">
            <div className="mb-8">
              <p className="font-bold text-xl m-0">Mode</p>
              <p className="font-medium text-lg">{data.delivery_mode}</p>
            </div>
            <div className="">
              <p className="font-bold text-xl">Courses</p>
              <p className="font-medium text-lg m-0">{data.courses}</p>
            </div>
          </div>
          <div className="w-1/4 border-r-2 border-black pl-6">
            <div className="mb-8">
              <p className="font-bold text-xl m-0">Learning Path</p>
              <p className="font-medium text-lg">{data.learningPath}</p>
            </div>
            <div className="">
              <p className="font-bold text-xl">Credits</p>
              <p className="font-medium text-lg m-0">{data.credits}</p>
            </div>
          </div>
          <div className="w-1/4 border-r-2 border-black pl-6">
            <div className="mb-8">
              <p className="font-bold text-xl m-0">Course Duration</p>
              <p className="font-medium text-lg">{data.duration}</p>
            </div>
            <div className="">
              <p className="font-bold text-xl">Webinars</p>
              <p className="font-medium text-lg m-0">
                {data.webinar ? "Yes" : "No"}
              </p>
            </div>
          </div>
          <div className="w-1/4 pl-6 ">
            <div className="mb-8">
              <p className="font-bold text-xl m-0">Fees</p>
              <p className="font-medium text-lg">
                Indian : INR {data.fees_structure?.indian_annual_fees}
              </p>
              <p className="font-medium text-lg">
                Foreigners : $ {data.fees_structure?.foreign_annual_fees}
              </p>
              <p className="font-medium text-lg">
                {data.fees_structure?.notes}
              </p>
            </div>
          </div>
        </div>
      </section>
      {data?.programHiglights && data.programHiglights.length > 0 ? (
        <section>
          <div className="container m-auto py-16">
            <h2 className="text-center m-0 mb-12 text-3xl">
              Programme Highlights
            </h2>
            <div className="flex px-20">
              <div className="flex justify-between gap-10">
                <div className="!w-1/2">
                  {firstHalf?.map((item: ProgramHiglightsInterface) => (
                    <div className="items-center flex">
                      <Image
                        src={`${process.env.BASE_MEDIA_URL}/${item.image}}`}
                        alt="test"
                        width={80}
                        height={80}
                      />{" "}
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
                <div className="!w-1/2">
                  {secondHalf?.map((item: ProgramHiglightsInterface) => (
                    <div className="items-center flex">
                      <Image
                        src={`${process.env.BASE_MEDIA_URL}/${item.image}}`}
                        alt="test"
                        width={80}
                        height={80}
                      />{" "}
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}

      {data?.association && data.association?.length > 0 ? (
        <section className="bg-blue-900 text-white">
          <div className="container py-16 m-auto">
            <div className="text-center">
              <h2 className="text-3xl m-0 mb-12">
                Recognization & Association
              </h2>
            </div>
            <div className="flex justify-center gap-12 ">
              {data.association?.map((item: AssociationInterface) => (
                <div className="text-center">
                  <Image
                    src={`${process.env.BASE_MEDIA_URL}/${item.image}`}
                    alt="test"
                    width={100}
                    height={100}
                    className="rounded-full mb-0"
                  />
                  <h2 className="mb-0 mt-1">{item.title}</h2>
                  <p className="m-0">{item.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        ""
      )}

      {data?.admissionProcess && data?.admissionProcess?.length > 0 ? (
        <section className="bg-gray-100">
          <div className="container py-16 m-auto">
            <h2 className="text-center m-0 mb-14 text-3xl font-semibold">
              Admission Process
            </h2>
            <div className="flex justify-center gap-10">
              {data.admissionProcess?.map((item: AdmissionProcessInterface) => (
                <div className="bg-white w-[30%] rounded-3xl py-8 px-6 shadow-2xl">
                  <div className="flex justify-center">
                    <Image
                      src={`${process.env.BASE_MEDIA_URL}/${item.image}`}
                      alt="test"
                      width={130}
                      height={130}
                      className="justify-center"
                    />
                  </div>
                  <h2 className="font-medium">{item.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="container m-auto mb-20">
        <div className="border py-4 px-4 rounded-md border-black ">
          <h2 className="font-bold text-2xl mb-2">Introduction</h2>
          <p className="mb-4">
            Riseback is a highly innovative and effective skill-based IT
            training program that has been designed to meet the evolving demands
            of the modern job market. The program is designed to equip
            individuals with the skills and knowledge needed to excel in the
            highly competitive world of information technology. Riseback's
            approach to training is highly personalized and tailored to the
            needs of each individual learner, making it a highly effective way
            to learn new skills and advance one's in the IT industry.
          </p>
          <h2 className="font-bold text-2xl mb-2">Course Description</h2>
          <p className="mb-4">
            This course helps participants understand what data scientists do,
            the problems they solve, and the tools and techniques they use.
            Through in-class simulations, participants apply data science
            methods to real-world challenges in different industries and,
            ultimately, prepare for data scientist roles in the field...
          </p>
          <h2 className="font-bold text-2xl mb-2">Career Opportunities</h2>
          <p className="mb-4">
            Data science is a highly sought-after field with a range of career
            opportunities and high salary potential. The median annual salary
            for a Data Scientist is around $120,000, while a Data Analyst can
            earn upwards of $70,000 per year. Other high-paying job roles in
            data science include Machine Learning Engineer, Data Architect, and
            Business Intelligence Analyst, with salaries ranging from $90,000 to
            $140,000 per year, depending on experience and skills. With the
            increasing demand for data-driven insights, the salary prospects for
            those in this field are expected to continue growing.
          </p>
        </div>
      </section>

      <section className="container m-auto mb-20">
        <div className="shadow-2xl mx-32 p-4 rounded-md ">
          <p>
            <span className="font-bold">Note: </span>As per our policy, we start
            the course/training/internship within 10 days from the date of
            enrollment. If you enroll for future month/date, our schedule team
            will coordinate with you and assign your class. To communicate with
            our schedule team for preferred timing, email to
            info@riseback.org.com. All courses/internships can be scheduled in
            customised manner as per your requirements.
          </p>
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
