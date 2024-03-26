import axios from "axios";
import { CourseSpecializationInterface } from "interfaces";
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
  // console.log(url, "<<<<<<<<<<<<<<<");
  return (
    <>
      <section className="bg-gray-100">
        <div className="flex container items-center py-8 m-auto">
          <div className="w-2/4">
            <Image
              src={`${process.env.BASE_MEDIA_URL}/${data.course.course_image}`}
              height={400}
              width={300}
              alt=""
              className="w-full"
            />
          </div>
          <div className="w-2/4 px-8  ">
            <h2 className="font-bold text-2xl m-0 pb-6">{data.name}</h2>
            <p className="font-semibold mb-10">{data.description}</p>

            <div className="flex justify-between">
              <button className="py-2 px-28 rounded-md hover:bg-blue-900 hover:text-white border-2 border-black">
                Apply Now
              </button>
              <button className=" py-2 px-28 rounded-md  hover:bg-blue-900 hover:text-white  border-2 border-black">
                Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container m-auto my-14">
        <div className="flex justify-center text-center  shadow-2xl rounde ">
          <div className="border-r-2  border-black px-8 w-1/4 my-8">
            <i className="fa-regular fa-clock text-3xl mb-8"></i>
            <p>60 Hours (8 to 24 Weeks)</p>
          </div>
          <div className="border-r-2  border-black px-8 w-1/4 my-8">
            <i className="fa-regular fa-calendar-days text-3xl mb-8"></i>
            <p>Daily / Weekly Classes</p>
          </div>
          <div className="border-r-2  border-black px-8 w-1/4 my-8">
            <i className="fa-solid fa-file text-3xl mb-8"></i>
            <p>4 Case Studies & 1 Live Project</p>
          </div>
          <div className="w-1/4 my-8">
            <i className="fa-solid fa-hand-holding-dollar text-3xl mb-8"></i>
            <p>$ 350/</p>
          </div>
        </div>
      </section>

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
