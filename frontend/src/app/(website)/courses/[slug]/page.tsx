import { Download } from "@carbon/icons-react";
import axios from "axios";
import { Button } from "components/layout/buttons";
import {
  AdmissionProcessInterface,
  AssociationInterface,
  CourseSpecializationInterface,
  ProgramHiglightsInterface,
  programmeStructure,
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
              <div className="border rounded-md border-black w-1/2">
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
              <p className="font-medium text-lg m-0 mt-2">
                {data.delivery_mode}
              </p>
            </div>
            <div className="">
              <p className="font-bold text-xl m-0">Courses</p>
              <p className="font-medium text-lg m-0 mt-2">{data.courses}</p>
            </div>
          </div>
          <div className="w-1/4 border-r-2 border-black pl-6">
            <div className="mb-8">
              <p className="font-bold text-xl m-0">Learning Path</p>
              <p className="font-medium text-lg  m-0 mt-2">
                {data.learningPath}
              </p>
            </div>
            <div className="">
              <p className="font-bold text-xl m-0">Credits</p>
              <p className="font-medium text-lg m-0 mt-2">{data.credits}</p>
            </div>
          </div>
          <div className="w-1/4 border-r-2 border-black pl-6">
            <div className="mb-8">
              <p className="font-bold text-xl m-0">Course Duration</p>
              <p className="font-medium text-lg  m-0 mt-2">{data.duration}</p>
            </div>
            <div className="">
              <p className="font-bold text-xl m-0">Webinars</p>
              <p className="font-medium text-lg m-0 mt-2">
                {data.webinar ? "Yes" : "No"}
              </p>
            </div>
          </div>
          <div className="w-1/4 pl-6 ">
            <div className="mb-8">
              <p className="font-bold text-xl m-0">Fees</p>
              <p className="font-medium text-lg m-0 mt-2">
                Indian : INR {data.fees_structure?.indian_annual_fees}
              </p>
              <p className="font-medium text-lg m-0 mt-2">
                Foreigners : $ {data.fees_structure?.foreign_annual_fees}
              </p>
              <p className="font-medium text-lg m-0 mt-2">
                {data.fees_structure?.notes}
              </p>
            </div>
          </div>
        </div>
      </section>
      {data.program_structures && data.program_structures.length > 0 ? (
        <section className="bg-gray-100">
          <div className="container py-16 m-auto">
            <h2 className="text-center m-0 mb-14 text-3xl font-semibold">
              Programme Structure
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
              {data.program_structures?.map((item: programmeStructure) => (
                <div className="bg-white !w-[30%] rounded-3xl py-8 px-6 shadow-2xl">
                  <div className="flex justify-center">
                    <Image
                      src={`${process.env.BASE_MEDIA_URL}/${item.image}`}
                      alt="test"
                      width={130}
                      height={130}
                      className="justify-center"
                    />
                  </div>
                  <h2 className="font-medium text-center">{item.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <section>
        <div className="container m-auto py-12">
          <h2 className="text-2xl">Eligibilty Criteria</h2>
          <p className="font-semibold">{data.eligibilty}</p>
        </div>
      </section>
      <section className=" bg-gray-100">
        <div className="container m-auto flex py-8">
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src={data.university?.university_image}
              width={300}
              height={200}
              alt="university image"
            />
          </div>
          <div
            className="w-1/2"
            dangerouslySetInnerHTML={{ __html: data.university.description }}
          ></div>
        </div>
      </section>
      <section>
        <div className="container m-auto py-12 flex items-center">
          <div className="w-[80%]">
            <h2>
              Unlock Your Future : Embrace Digital Marketing with Confidence!{" "}
            </h2>
            <p className="font-medium ">
              Join us to Equip Yourself with the Essential Skills Sought After
              by Employers Worldwide, Empowering you to Propel your Career to
              new Heights."{" "}
            </p>
          </div>
          <div className="w-[20%]">
            <Button href="#">Enroll Now</Button>
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
              <div className="flex justify-between gap-10 w-full">
                <div className="!w-1/2">
                  {firstHalf?.map((item: ProgramHiglightsInterface) => (
                    <div className="items-center flex">
                      <Image
                        src={`${process.env.BASE_MEDIA_URL}/${item.image}}`}
                        alt="test"
                        width={80}
                        height={80}
                      />{" "}
                      <p className="ml-4">{item.name}</p>
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
      ) : null}
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
      ) : null}
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
      {data && data.info ? (
        <section className="py-12 ">
          <div className="container m-auto ">
            <div className="border shadow-lg flex">
              <div className="w-1/2 px-6">
                <h2 className="text-center">{data.info.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: data.info.description }}
                ></div>
              </div>
              <div className="w-1/2 ">
                <Image
                  src={data.info.image}
                  width={200}
                  height={200}
                  alt="test"
                  className="
              !w-full !h-full"
                ></Image>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {data && data.textarea ? (
        <section className="container m-auto py-12">
          <div
            className="border py-4 px-4 rounded-md border-black "
            dangerouslySetInnerHTML={{ __html: data.textarea }}
          ></div>
        </section>
      ) : null}

      <section>
        <div className="container m-auto">
          <div className=" text-center">
            <p className="font-medium">Want moree details?</p>
            <p className="font-medium">
              Expolre the coures thoroughly by downloading the brochure
            </p>
            <Button href="#">
              <Download className="mr-2 size-5" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
      <section className="container m-auto  py-12">
        <div className="shadow-2xl mx-32 p-4 rounded-md ">
          <div dangerouslySetInnerHTML={{ __html: data.notes }}></div>
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
