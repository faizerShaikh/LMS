import Image from "next/image";

export default function Career() {
    return (<>

        <section className="px-24 bg-gray-100">
            <div className="flex">
                <div className="w-1/2 flex justify-around">
                    <Image height={380} width={500} alt="test" src="/img2/Career-Page.jpg"  />
                </div>
                <div className="w-1/2 px-4 m-auto">
                    <p className="font-medium text-xl mb-4">Join RiseBack's dynamic team at the forefront of EdTech innovation, connecting Indian universities with global students.</p>
                    <p className="font-medium text-xl mb-4">We're looking for passionate team members to contribute to reshaping the future of education. If you'r edriven by empowerment, innovation, andcollaboration,seizetheopportunitytomake a meaningful impact.</p>
                    <p className="font-medium text-xl mb-4">Join us at RiseBack, where your talents meet purpose in transforming the education landscape</p>
                    <button className="bg-blue-900 text-white py-2 w-full rounded-lg ">Open Positions</button>
                </div>
            </div>
        </section>
        <section className="px-24 py-12">
            <div className="flex my-12 ">
                <div className="w-1/4 bg-gray-100 mx-4 text-center p-4 rounded-md shadow-lg">
                    <h2 className=" font-bold text-2xl">Diversity</h2>
                    <p>We are committed to fostering an inclusive culture that values diversity. Our teams consist of individuals from various backgrounds, each contributing their unique experiences.</p>
                </div>
                <div className="w-1/4 bg-gray-100 mx-4 text-center p-4 rounded-md shadow-lg">
                    <h2 className="font-bold text-2xl">Innovation</h2>
                    <p>Embracing a culture of innovation and prioritizing technology, our experiences and processes are in a constant state of evolution.</p>
                </div>
                <div className="w-1/4 bg-gray-100 mx-4 text-center p-4 rounded-md shadow-lg">
                    <h2 className=" font-bold text-2xl">Creativity</h2>
                    <p>Elevate your career in a space that celebrates creativity. Join our team, where innovation is not just encouraged.Unleash your potential with us.</p>
                </div>
                <div className="w-1/4 bg-gray-100 mx-4 text-center p-4 rounded-md shadow-lg">
                    <h2 className=" font-bold text-2xl">Empowerment</h2>
                    <p>Empowerment is our ethos. Join us to contribute your talent to a team that values individual growth and societal impact. Together, let's shape a brighter future.</p>
                </div>
            </div>

            <div className="flex justify-between mb-8">
                <div className="w-1/5">
                    <div>
                        <form action="" className="bg-gray-100 p-2 flex flex-col ">
                            <h2 className="font-bold mb-2 ">Department</h2>
                            <input type="text" placeholder="Search" className="border  p-2" /><br />
                            <div>
                                <input type="checkbox" id="accounting" />
                                <label htmlFor="accounting">Accounting</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="cerdentials-&-content" />
                                <label htmlFor="cerdentials-&-content">Cerdentials & Content</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="data-science" />
                                <label htmlFor="data-science">Data Science</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="degree-marketing" />
                                <label htmlFor="degree-marketing">Degree Marketing</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="IT" />
                                <label htmlFor="it">it</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="marketing" />
                                <label htmlFor="marketing">Marketing</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="product-&-content" />
                                <label htmlFor="product-&-content">Product & Content</label><br /><br /><br />
                            </div>

                            <h2 className="font-bold mb-2 ">Country</h2>
                            <input type="text" placeholder="Search" className="border  p-2" /><br />
                            <div>
                                <input type="checkbox" id="cnanda" />
                                <label htmlFor="cnanda">Cnanda</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="colombia" />
                                <label htmlFor="colombia">Colombia</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="india" />
                                <label htmlFor="india">India</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="united-state" />
                                <label htmlFor="united-state">United State</label><br />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-3/4">
                    <div className="mb-8">
                        <input type="text" placeholder="Search by job title, location, department, catagory, etc." className="w-3/4 border-2 p-2 mr-2" />
                        <button className="bg-blue-600 py-2 px-4 border rounded-md hover:bg-white hover:border-blue-700 hover:text-blue-700 mr-2">Search</button>
                        <button className="bg-blue-600 py-2 px-4 border rounded-md hover:bg-white hover:border-blue-700 hover:text-blue-700">Job Near Me</button>
                    </div>
                    <div>
                        <table className="w-full">
                            <tr className="border-b-2">
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
                        </table>
                        <p className="mt-8">Displaying <span className="font-bold">all 10 </span>entries</p>
                    </div>
                </div>
            </div>

            <div className="px-24 text-center">
                <p>RiseBack.org strictly prohibits any recruitment fees from candidates. Be cautious of fraudulent recruitment offers Please apply <br /> with a covering letter & resume with expected remuneration via email <span className="text-blue-500">info@riseback.org</span><br /> Only shortlisted candidates would be contacted. Please don’t call to enquire about positions or regarding your application.</p>
            </div>
        </section>

    </>)
}