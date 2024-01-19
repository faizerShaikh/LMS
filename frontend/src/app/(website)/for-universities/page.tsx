import Image from "next/image";

export default function ForUniversity() {
    return <>
        <section className="px-24 bg-gray-50 ">
            <div className="flex py-8">
                <div className="w-1/2 flex justify-center">
                    <Image height={50} width={50} alt='hshs' src="/img/uni-page 1.jpg" className=" w-3/4"/>
                </div>
                <div className="w-1/2 ">
                    <h2 className="font-bold text-4xl mb-4">Educate, Empower, Elevate & Excel</h2>
                    <p className="font-semibold mb-4">Enhance student employability to attract more enrollment. Provide students with high-demand skills, preparing them for success in job market. Additionally, we are partnering with universities, colleges, and institutes to provid their students with carrer-focused IT traning certificate ms.</p>
                    <button className="bg-blue-900 py-2 px-4 text-white">Contact us</button>
                </div>
            </div>
        </section>
        <section className="py-24 px-24">
            <div className="flex justify-between text-center">
                <div className="w-1/5  rounded-xl shadow-xl">
                    <Image height={50} width={50} alt='hshs' src="/img/unidiv 1.jpg" className="w-full rounded-t-xl"/>
                        <h2 className="font-bold my-4">Economic Growth</h2>
                        <p className="px-4 text-sm  mb-4 font-medium text-gray-500">Technology education fuels economic growth by training individual swith essential skills for the digital era. Proficient tech skills in the work force drive innovation, attract investments, and stimulate entrepreneurship, leading to sustained economic development and global competitiveness.</p>
                </div>
                <div className="w-1/5 rounded-xl shadow-xl">
                    <Image height={50} width={50} alt='hshs' src="/img/unidiv 1.jpg" className="w-full rounded-t-xl"/>
                        <h2 className="font-bold my-4">Entrepreneurship</h2>
                        <p className="px-4 text-sm  mb-4 font-medium text-gray-500">Technology education drives entrepreneurship by empowering individual swith the skills to navigate the digital landscape. Proficiency in technology opens doors for innovative ventures, encourages a culture of problem-solving, and fosters the creation of tech-driven startups.</p>
                </div>
                <div className="w-1/5 rounded-xl shadow-xl">
                    <Image height={50} width={50} alt='hshs' src="/img/unidiv 1.jpg" className="w-full rounded-t-xl"/>
                        <h2 className="font-bold my-4">Job Creation</h2>
                        <p className="px-4 text-sm  mb-4 font-medium text-gray-500">Proficiency in technology opens doors to high paying diverse employment opportunities, spanning industries that increasingly rely on digital innovation. As the demand for tech-savvy professionals continues to rise, technology education becomes a crucial driver for job creation</p>
                </div>
                <div className="w-1/5 rounded-xl shadow-xl">
                    <Image height={50} width={50} alt='hshs' src="/img/unidiv 1.jpg" className="w-full rounded-t-xl"/>
                        <h2 className="font-bold my-4">Innovation</h2>
                        <p className="px-4 text-sm mb-4 font-medium text-gray-500">Technology education helps in fostering innovation across vital sectors like healthcare, education, agriculture, and the environment. By training individuals, it cultivates a culture of  innovation, fostering entrepreneurship, encouraging startups, and contributing to sustainable growth.</p>
                </div>
            </div>
        </section>
        <section>
            <div>
                <div>
                    <p>RiseBack is to empower students and professionals through accessible education certificate and university degree programs. We strive to collaborate with universities, colleges, schools, and institutes dedicated to providing students with affordable IT training. Acknowledging the pivotal role of technology in shaping various aspects of humanity, including healthcare, education, agriculture, and the environment, the training</p>
                </div>
                <div>
                    <form action=""></form>
                </div>
            </div>
        </section></>
}