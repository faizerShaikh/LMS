import { Button } from "components/layout/buttons";
import Image from "next/image";

export default function Career() {
  return (
    <>
      {/* <section className=" bg-gray-100 h-[400px] "> */}
      <section className=" bg-gray-100 h-auto desktop:h-[400px]">
        <div className="flex desktop:container m-auto flex-col-reverse desktop:flex-row laptop:container laptop:flex-row">
          <div className="desktop:w-1/2 desktop:my-auto laptop:my-auto">
            <div className="desktop:w-[500px] desktop:h-[350px] laptop:w-[500px] laptop:h-[350px] w-full relative h-[300px] tablet:h-[400px]">
              <Image
                // height={400}
                // width={500}
                layout="fill"
                alt="test"
                src="/img2/Career-Page.jpg"
              />
            </div>
          </div>
          <div className="desktop:w-1/2 desktop:px-4 laptop:px-4 px-10 pb-4">
            <p className="font-medium desktop:text-xl mb-1">
              Join RiseBack's dynamic team at the forefront of EdTech
              innovation, connecting Indian universities with global students.
            </p>
            <p className="font-medium desktop:text-xl m-0 mb-1">
              We're looking for passionate team members to contribute to
              reshaping the future of education. If you'r edriven by
              empowerment, innovation, andcollaboration,
              seizetheopportunitytomake a meaningful impact.
            </p>
            <p className="font-medium desktop:text-xl m-0 mb-6 ">
              Join us at RiseBack, where your talents meet purpose in
              transforming the education landscape
            </p>
            <button className="bg-blue-900 text-white py-2 w-full text-lg cursor-pointer rounded-lg ">
              Open Positions
            </button>
          </div>
        </div>
      </section>
      <section className=" py-12 overflow-hidden">
        <div className="my-12 desktop:container laptop:container laptop:mx-auto desktop:mx-auto m-8 grid laptop:grid-cols-2 desktop:grid-cols-4 tablet:grid-cols-2 gap-5">
          <div className="desktop:w-full bg-gray-100 text-center p-4 rounded-md shadow-lg">
            <h2 className="font-bold text-2xl">Diversity</h2>
            <p className="text-lg">
              We are committed to fostering an inclusive culture that values
              diversity. Our teams consist of individuals from various
              backgrounds, each contributing their unique experiences.
            </p>
          </div>
          <div className="desktop:w-full bg-gray-100 text-center p-4 rounded-md shadow-lg">
            <h2 className="font-bold text-2xl">Innovation</h2>
            <p className="text-lg">
              Embracing a culture of innovation and prioritizing technology, our
              experiences and processes are in a constant state of evolution.
            </p>
          </div>
          <div className="desktop:w-full bg-gray-100 text-center p-4 rounded-md shadow-lg">
            <h2 className=" font-bold text-2xl">Creativity</h2>
            <p className="text-lg">
              Elevate your career in a space that celebrates creativity. Join
              our team, where innovation is not just encouraged.Unleash your
              potential with us.
            </p>
          </div>
          <div className="desktop:w-full bg-gray-100 text-center p-4 rounded-md shadow-lg">
            <h2 className=" font-bold text-2xl">Empowerment</h2>
            <p className="text-lg">
              Empowerment is our ethos. Join us to contribute your talent to a
              team that values individual growth and societal impact. Together,
              let's shape a brighter future.
            </p>
          </div>
        </div>

        <div className="flex justify-between desktop:flex-row laptop:flex-row flex-col desktop:container laptop:container mb-8 m-auto">
          <div className="desktop:w-1/5 laptop:w-1/5 mx-8">
            <div>
              <form
                action=""
                className="bg-gray-100 p-2 flex flex-col items-center desktop:flex-col laptop:flex-col tablet:flex-row tablet:justify-start tablet:items-start"
              >
                <div className="tablet:w-1/2 desktop:w-full laptop:w-full">
                  <h2 className="font-bold mb-2 ">Department</h2>
                  <input
                    type="text"
                    placeholder="Search"
                    className="border desktop:w-full laptop:w-full p-2"
                  />
                  <br />
                  <div>
                    <input type="checkbox" id="accounting" />
                    <label htmlFor="accounting">Accounting</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="cerdentials-&-content" />
                    <label htmlFor="cerdentials-&-content">
                      Cerdentials & Content
                    </label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="data-science" />
                    <label htmlFor="data-science">Data Science</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="degree-marketing" />
                    <label htmlFor="degree-marketing">Degree Marketing</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="IT" />
                    <label htmlFor="it">it</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="marketing" />
                    <label htmlFor="marketing">Marketing</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="product-&-content" />
                    <label htmlFor="product-&-content">Product & Content</label>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
                <div className="tablet:w-1/2 desktop:w-full laptop:w-full">
                  <h2 className="font-bold mb-2 ">Country</h2>
                  <input
                    type="text"
                    placeholder="Search"
                    className="border desktop:w-full laptop:w-full p-2"
                  />
                  <br />
                  <div>
                    <input type="checkbox" id="cnanda" />
                    <label htmlFor="cnanda">Cnanda</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="colombia" />
                    <label htmlFor="colombia">Colombia</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="india" />
                    <label htmlFor="india">India</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="united-state" />
                    <label htmlFor="united-state">United State</label>
                    <br />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="desktop:w-3/4 laptop:w-3/4 w-full">
            <div className="mb-8 flex justify-center flex-wrap  desktop:justify-start laptop:justify-start items-center mt-8 desktop:mt-0 laptop:mt-0">
              <input
                type="text"
                placeholder="Search by job title, location, department, catagory, etc."
                className=" border-2 p-2 mr-2 w-[60%] laptop:w-[63%] mb-2"
              />
              <Button className="h-8 py-2 px-4 border  mr-2 mb-2">
                Search
              </Button>
              <Button className="h-8 py-2 px-4 border rounded-md mb-2">
                Job Near Me
              </Button>
            </div>
            <div className="grid laptop:grid-cols-3 desktop:grid-cols-3 tablet:grid-cols-2 gap-3 w-full tablet:mx-8 laptop:mx-0 desktop:mx-0">
              <div className="desktop:w-full laptop:w-full flex flex-col items-center desktop:items-start laptop:items-start tablet:items-start">
                <h3 className="text-start m-1">Title</h3>
                <p className="text-start m-1">Staff Accountant</p>
                <p className="text-start m-1">
                  Data Science Content Strategist
                </p>
                <p className="text-start m-1">SaaS Intigration Specialist</p>
                <p className="text-start m-1">ServiceNow Developer</p>
                <p className="text-start m-1">Chief of Staff-CRO</p>
                <p className="text-start m-1">Machine Learning Engineer</p>
                <p className="text-start m-1">Enrollment Counselor, LATAM</p>
                <p className="text-start m-1">Manager, Enrollment Services</p>
                <p className="text-start m-1">
                  Staff ML Scientist (Recommender System)
                </p>
                <p className="text-start m-0">Senior Tax Analyst</p>
              </div>
              <div className="desktop:w-full laptop:w-full flex flex-col items-center desktop:items-start laptop:items-start tablet:items-start">
                <h3 className="text-start m-1">Department</h3>
                <p className="text-start m-1">Accounting</p>
                <p className="text-start m-1">Credentials & Content</p>
                <p className="text-start m-1">Product and Content Services</p>
                <p className="text-start m-1">IT</p>
                <p className="text-start m-1">Product Management</p>
                <p className="text-start m-1">Data Science</p>
                <p className="text-start m-1">Marketing</p>
                <p className="text-start m-1"> Degree Marketing</p>
                <p className="text-start m-1">Data Science</p>
                <p className="text-start m-0">Accounting</p>
              </div>
              <div className="desktop:w-full laptop:w-full flex flex-col items-center desktop:items-start laptop:items-start tablet:items-start">
                <h3 className="text-start m-1">Location</h3>
                <p className="text-start m-1">India</p>
                <p className="text-start m-1">India</p>
                <p className="text-start m-1">Canada</p>
                <p className="text-start m-1">India</p>
                <p className="text-start m-1">United States</p>
                <p className="text-start m-1">India</p>
                <p className="text-start m-1">Colombia</p>
                <p className="text-start m-1">Colombia</p>
                <p className="text-start m-1">United States</p>
                <p className="text-start m-0">United States</p>
              </div>
              {/* <table className="w-full">
                <tr>
                  <th className="text-start">Title</th>
                  <th className="text-start">Department</th>
                  <th className="text-start">Location</th>
                </tr>

                <tr className="border-b-2">
                  <td>Staff Accountant</td>
                  <td>Accounting</td>
                  <td>India</td>
                </tr>

                <tr className="border-b-2">
                  <td>Data Science Content Strategist</td>
                  <td>Credentials & Content</td>
                  <td>India</td>
                </tr>

                <tr className="border-b-2">
                  <td>SaaS Intigration Specialist</td>
                  <td>Product and Content Services</td>
                  <td>Canada</td>
                </tr>
                <tr className="border-b-2">
                  <td>ServiceNow Developer</td>
                  <td>IT</td>
                  <td>India</td>
                </tr>
                <tr className="border-b-2">
                  <td>Chief of Staff-CRO</td>
                  <td>Product Management</td>
                  <td>United States</td>
                </tr>

                <tr className="border-b-2">
                  <td>Machine Learning Engineer</td>
                  <td>Data Science</td>
                  <td>India</td>
                </tr>
                <tr className="border-b-2">
                  <td>Enrollment Counselor, LATAM</td>
                  <td>Marketing</td>
                  <td>Colombia</td>
                </tr>
                <tr className="border-b-2">
                  <td>Manager, Enrollment Services</td>
                  <td>Degree Marketing</td>
                  <td>Colombia</td>
                </tr>
                <tr className="border-b-2">
                  <td>Staff ML Scientist (Recommender System)</td>
                  <td>Data Science</td>
                  <td>United States</td>
                </tr>
                <tr className="border-b-2">
                  <td>Senior Tax Analyst</td>
                  <td>Accounting</td>
                  <td>United States</td>
                </tr>
              </table> */}
            </div>
            <p className="mt-8 text-center">
              Displaying <span className="font-bold">all 10 </span>entries
            </p>
          </div>
        </div>

        <div className="container text-center m-auto">
          <p className="text-lg">
            RiseBack.org strictly prohibits any recruitment fees from
            candidates. Be cautious of fraudulent recruitment offers Please
            apply <br /> with a covering letter & resume with expected
            remuneration via email{" "}
            <span className="text-blue-500">info@riseback.org</span>
            <br />
            Only shortlisted candidates would be contacted. Please don’t call to
            enquire about positions or regarding your application.
          </p>
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
