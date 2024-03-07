import Image from "next/image"
import { FaFistRaised } from "react-icons/fa";

export default function AboutUs() {
    return <>
        <section className="bg-gray-100 flex justify-between h-[400px] ">
            <div className="container flex m-auto">
            <div className="w-1/2 ">
                <Image width={500} height={400} src={"/img2/About-Us-page.jpg"}  alt="IMG" />
            </div>
            <div className="flex items-center w-1/2">
                <p className=" text-[36px] leading-[48px]">Inspired by the Native American adage <span className="font-bold">"RiseBack like Phoenix”</span>, the platform embodies renewal, hope, and empowerment.</p>
            </div>
            </div>
        </section>
        <section className="my-32 text-center">
            <div className="container m-auto">
            <h2 className="text-4xl font-bold mt-0 mb-6">Our Story</h2>
            <p className="text-xl text-gray-700 mb-4">Inspired by the Native American adage "RiseBack like Phoenix”, the platform embodies renewal, hope, and empowerment. Founded by Dr.Tausif Malik in 2015, RiseBack initially addressed the need to empower Americans with IT skills for career growth. Amidst the global pandemic, the landscape of education under went as ignificant digital transformation.</p>
            <p className="text-xl text-gray-700 mb-4">Recognizing this shift, redefined its mission. Today, RiseBack stands as the first EdTech platform connecting Indian universities with students worldwide.</p>
            <p className="text-xl text-gray-700 mb-4">This evolution prompted intensive research and discussion swith Indian universities, as the RiseBack team seized the opportunity to bridge the global education gap.</p>
            </div>
        </section>
        <section className="bg-gray-100 py-32 ">
            <div className="container  m-auto">
            <div className="flex  mb-24 items-center">
                <div className="w-2/4 text-center  pr-12 flex flex-col items-center">
                    <h2 className="text-4xl font-bold mb-2 ">Vision</h2>
                    <p className="text-xl text-gray-700 px-8">Our vision at RiseBack is to create a world where access to affordable education empowers individuals, transcending barriers and unlocking bound less opportunities for personal and professional growth.</p>
                </div>
                <div className="w-2/4 text-center">
                    <Image width={500} height={400} src="/img2/businessman-big-office.jpg" className=" w-full rounded-lg" alt="img" />
                </div>
            </div>
            <div className="flex  items-center">
                <div className="w-2/4 text-center">
                    <Image width={500} height={400} src="/img2/motivational-composition-goal.jpg" className="w-full rounded-lg" alt="img" />
                </div>
                <div className="w-2/4 text-center pl-12">
                    <h2 className="text-4xl font-bold mb-6 ">Mission</h2>
                    <p className="text-xl text-gray-700 px-8">Our mission is to empower students and professional swith affordable education, fostering a pathway to knowledge and success..</p>
                </div>
            </div>
            </div>
        </section>
        <section className="bg-blue-900 py-32">
            <div className=" text-center text-white container  m-auto">
                <h2 className="pb-8 text-4xl m-0">Our Core Values</h2>
                <div className="flex ">
                    <div className="w-2/4">
                        <h2 className="text-2xl font-medium	">Empowerment</h2>
                        <Image width={150} height={150} alt="test" src="/img2/Empowerment.svg"  />
                        
                    </div>
                    <div className="w-2/4">
                        <h2 className="text-2xl font-medium	">Development</h2>
                        <Image width={150} height={150} alt="test" src="/img2/Developement.svg" />

                    </div>
                    <div className="w-2/4">
                        <h2 className="text-2xl font-medium	">Entrepreneurship</h2>
                        <Image width={150} height={150} alt="test" src="/img2/Entrepreneurship.svg" />

                    </div>
                    <div className="w-2/4">
                        <h2 className="text-2xl font-medium	">Growth</h2>
                        <Image width={150} height={150} alt="test" src="/img2/Growth.svg" />

                    </div>
                </div>
            </div>
        </section>
        <section className=" text-center py-32">
            <div className="container m-auto">
            <h2 className=" text-4xl  m-0">Global Partnership</h2>
            <p className="text-xl text-gray-700 pb-8">pursuit of our commitment to affordable education, RiseBack has forged partnerships with individuals and organizations worldwide, extending our reach and impact across countries such as the USA, Egypt, Nigeria, Indonesia, Ethiopia, and the Philippines. <br/><br/>Our dedication to fostering global connectivity between Indian universities and students is inspired by the transformative symbolism of the phoenix.Through these collaborations, RiseBack strives to make quality education accessible to everyone, transcending geographical boundaries and creating a global network for knowledged is semination and empowerment.</p>
            <div className="flex justify-between mb-8">
                <div>
                    <Image width={200} height={200} src="/img2/USA.jpg" className="w-48 h-24 mb-4 shadow-lg rounded-lg hover:scale-110 transition duration-500 cursor-pointer" alt="img" />
                    <p className="font-bold mt-2 text-lg">USA</p>
                </div>
                <div>
                    <Image width={200} height={200} src="/img2/Indonesia.jpg" className="w-48 h-24 mb-4 shadow-lg rounded-lg hover:scale-110 transition duration-500 cursor-pointer" alt="img" />
                    <p className="font-bold mt-2 text-lg">Indonesia</p>
                </div>
                <div>
                    <Image width={200} height={200} src="/img2/Nigeria.jpg" className="w-48 h-24 mb-4 shadow-lg rounded-lg hover:scale-110 transition duration-500 cursor-pointer" alt="img" />
                    <p className="font-bold mt-2 text-lg">Nigeria</p>
                </div>
                <div>
                    <Image width={200} height={200} src="/img2/Ethiopia.jpg" className="w-48 h-24 mb-4 shadow-lg rounded-lg hover:scale-110 transition duration-500 cursor-pointer" alt="img" />
                    <p className="font-bold mt-2 text-lg">Ethopia</p>
                </div>
                <div>
                    <Image width={200} height={200} src="/img2/Egypt.jpg" className="w-48 h-24 mb-4 shadow-lg rounded-lg hover:scale-110 transition duration-500 cursor-pointer" alt="img" />
                    <p className="font-bold mt-2 text-lg">Egypt</p>
                </div>
                <div>
                    <Image width={200} height={200} src="/img2/Philippines.jpg" className="w-48 h-24 mb-4 shadow-lg rounded-lg hover:scale-110 transition duration-500 cursor-pointer" alt="img" />
                    <p className="font-bold mt-2 text-lg">Philippines</p>
                </div>
            </div>
            <button className="bg-blue-900 py-2 px-6 text-white text-lg cursor-pointer rounded-md">Join us in making a diffrence in people's lives.</button>
            </div>
        </section>
    </>
}