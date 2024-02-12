import Image from "next/image";

export default function SingleCourse() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="flex px-24 py-8">
          <div className="w-2/4">
            <Image
              src="/img2/person-using-ai-tool-job (1).jpg"
              height={400}
              width={300}
              alt=""
              className="w-full"
            />
          </div>
          <div className="w-2/4 px-8  ">
            <h2 className="font-bold text-2xl py-6">
              Data Science Artificial Intelligence and Machine Learning using
              Python
            </h2>
            <p className="font-semibold mb-10">
              This Data Science, Artificial Intelligence, and Machine Learning
              using Python course dives into the basics of machine learning
              using an approachable, and well-known, programming language. The
              learner will learn about Supervised vs. Unsupervised Learning,
              look into how Statistical Modeling relates to Machine Learning,
              and do a comparison of each.
            </p>

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

      <section className="px-28 my-14">
        <div className="flex justify-center text-center  shadow-2xl rounde">
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

      <section className="px-24 mb-20">
        <div className="border py-4 px-4 rounded-md border-black">
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

      <section className="px-56 mb-20">
        <div className="shadow-2xl p-4 rounded-md">
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
