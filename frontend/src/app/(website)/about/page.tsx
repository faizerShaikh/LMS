import Image from "next/image"

export default function AboutUs() {
    return <>
        <section className="bg-gray-100 flex justify-between px-28 h-[400px] ">
            <div className="flex w-2/4 ">
                <Image width={50} height={50} src={"/img/images (1).jpg"} className="flex justify-center w-full" alt="IMG" />
            </div>
            <div className="flex items-center w-2/4">
                <p className="text-center px-8 text-2xl">Inspired by the Native American adage <span className="font-bold">"RiseBack like Phoenix”</span>, the platform embodies renewal, hope, and empowerment.</p>
            </div>
        </section>
        <section className="my-12 px-28 text-center">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-base mb-4">Inspired by the Native American adage "RiseBack like Phoenix”, the platform embodies renewal, hope, and empowerment. Founded by Dr.Tausif Malik in 2015, RiseBack initially addressed the need to empower Americans with IT skills for career growth. Amidst the global pandemic, the landscape of education under went as ignificant digital transformation.</p>
            <p className="text-base mb-4">Recognizing this shift, redefined its mission. Today, RiseBack stands as the first EdTech platform connecting Indian universities with students worldwide.</p>
            <p className="text-base mb-4">This evolution prompted intensive research and discussion swith Indian universities, as the RiseBack team seized the opportunity to bridge the global education gap.</p>
        </section>
        <section className="bg-gray-100 py-12 ">
            <div className="flex px-28 mb-16 items-center">
                <div className="w-2/4 text-center  p-8 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-6 ">Vision</h2>
                    <p>Our vision at RiseBack is to create a world where access to affordable education empowers individuals, transcending barriers and unlocking bound less opportunities for personal and professional growth.</p>
                </div>
                <div className="w-2/4 text-center">
                    <Image width={50} height={50} src="/img/aboutrow-1.jpg" className="w-full rounded-lg" alt="img" />
                </div>
            </div>
            <div className="flex px-28 items-center">
                <div className="w-2/4 text-center">
                    <Image width={50} height={50} src="/img/aboutrow2.jpg" className="w-full rounded-lg" alt="img" />
                </div>
                <div className="w-2/4 text-center p-8">
                    <h2 className="text-2xl font-bold mb-6 ">Mission</h2>
                    <p>Our mission is to empower students and professional swith affordable education, fostering a pathway to knowledge and success..</p>
                </div>
            </div>
        </section>
        <section className="bg-blue-900">
            <div className=" mx-24 text-center text-white ">
                <h2 className="py-8 text-4xl">Our Core Values</h2>
                <div className="flex">
                    <div className="w-2/4">
                        <h2 className="text-xl">Empowerment</h2>
                        <i></i>
                    </div>
                    <div className="w-2/4">
                        <h2 className="text-xl">Development</h2>
                        <i></i>
                    </div>
                    <div className="w-2/4">
                        <h2 className="text-xl">Entrepreneurship</h2>
                        <i></i>
                    </div>
                    <div className="w-2/4">
                        <h2 className="text-xl">Growth</h2>
                        <i></i>
                    </div>
                </div>
            </div>
        </section>
        <section className="mx-24 text-center my-4">
            <h2 className=" text-4xl p-4">Global Partnership</h2>
            <p className="text-base pb-8">pursuit of our commitment to affordable education, RiseBack has forged partnerships with individuals and organizations worldwide, extending our reach and impact across countries such as the USA, Egypt, Nigeria, Indonesia, Ethiopia, and the Philippines.Our dedication to fostering global connectivity between Indian universities and students is inspired by the transformative symbolism of the phoenix.Through these collaborations, RiseBack strives to make quality education accessible to everyone, transcending geographical boundaries and creating a global network for knowledged is semination and empowerment.</p>
            <div className="flex justify-between">
                <div>
                    <Image width={50} height={50} src="/img/usa flag.png" className="w-48 h-24 mb-4 shadow-inherit" alt="img" />
                    <p className="font-bold ">USA</p>
                </div>
                <div>
                    <Image width={50} height={50} src="/img/Indonesia flag.png" className="w-48 h-24 mb-4 shadow-inherit" alt="img" />
                    <p className="font-bold ">Indonesia</p>
                </div>
                <div>
                    <Image width={50} height={50} src="/img/Nigeria flag.png" className="w-48 h-24 mb-4 shadow-inherit" alt="img" />
                    <p className="font-bold ">Nigeria</p>
                </div>
                <div>
                    <Image width={50} height={50} src="/img/Ethopia flag.png" className="w-48 h-24 mb-4 shadow-inherit" alt="img" />
                    <p className="font-bold ">Ethopia</p>
                </div>
                <div>
                    <Image width={50} height={50} src="/img/Egypt flag.png" className="w-48 h-24 mb-4 shadow-inherit" alt="img" />
                    <p className="font-bold ">Egypt</p>
                </div>
                <div>
                    <Image width={50} height={50} src="/img/philippine flag.png" className="w-48 h-24 mb-4 shadow-inherit" alt="img" />
                    <p className="font-bold ">Philippines</p>
                </div>
            </div>
        </section>
    </>;
}