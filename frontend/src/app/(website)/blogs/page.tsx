import Image from "next/image";

export default function Blogs() {
    return (
        <>  
            <section className="text-center">
                <h2 className="font-bold text-4xl">RiseBack Blogs</h2>
                <p>Updates on the latest career opportunities, Online Education, Online Universities, <span className="font-medium">& More</span></p>
            </section>
            <section className="px-24 mt-12">
                <h2 className="font-bold">FEATURED BLOG POSTS</h2>
                <span className=" border-b-2 w-8 mb-4"></span>
                <div className="flex">
                    <div className="w-[70%] shadow-2xl ">
                        <Image height={400} width={500} alt="Test" src="/img2/Information-Technology.jpg" className="w-full" />
                        <p className="font-bold py-4 px-4 text-xl">Can an Information Technology University degree be the road to achieving the American Dream ?</p>
                    </div>
                    <div className="w-[30%] px-8 ">
                        <div className="shadow-2xl">
                            <Image height={150} width={150} alt="Test" src="/img2/motivational-composition-goal-achievement_23-2150490032.jpg" className="w-full" />
                            <p className="p-4 font-bold m-0">Unlocking Lucrative Opportunities : IT Courses in AI, ML, WebApps, Cloud, and Blockchain for Indonesians</p>
                        </div>
                        <div className="shadow-2xl mt-8">
                            <Image height={150} width={200} alt="Test" src="/img2/motivational-composition-goal-achievement_23-2150490032.jpg" className="w-full" />
                            <p className="p-4 font-bold m-0">Unlocking Lucrative Opportunities : IT Courses in AI, ML, WebApps, Cloud, and Blockchain for Indonesians</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-24 py-24">

                <div className="flex">
                    <div className="w-[70%] flex flex-wrap justify-between">
                        <div className="w-[45%] shadow-2xl rounded-lg mb-12">
                            <Image height={200} width={400} alt="Test" src="/img2/college-savings-concept_700248-1580.jpg" className="w-full mb-4 rounded-t-lg object-center" />
                            <div className="px-4">
                                <span className="text-gray-400 mb-4">22 September 2023</span>
                                <h2 className="mb-4 font-bold">How affordable University education helps individuals, organizations, and the economy?</h2>
                                <p className="mb-8">Many people would argue current education needs a reboot,I totally agree and online education has the answer to it....</p>
                            </div>
                        </div>
                        <div className="w-[45%] shadow-2xl rounded-lg mb-12">
                            <Image height={200} width={400} alt="Test" src="/img2/lagos-city-Nigeria (1).jpg" className="w-full mb-4 rounded-t-lg object-center" />
                            <div className="px-4">
                                <span className="text-gray-400 mb-4">27 December 2023</span>
                                <h2 className="mb-4 font-bold">How IT University Education can be game changer for Nigeria Startups & IT sector changer for Nigeria Startups &IT sector</h2>
                                <p className="mb-8">I am excited to announce that I have been appointed as Brand Ambassador Nigeria for RiseBack, an Edtech organization...</p>
                            </div>
                        </div>
                        <div className="w-[45%] shadow-2xl rounded-lg mb-12">
                            <Image height={200} width={400} alt="Test" src="/img2/college-savings-concept_700248-1580.jpg" className="w-full mb-4 rounded-t-lg object-center" />
                            <div className="px-4">
                                <span className="text-gray-400 mb-4">22 September 2023</span>
                                <h2 className="mb-4 font-bold">How affordable University education helps individuals, organizations, and the economy?</h2>
                                <p className="mb-8">Many people would argue current education needs a reboot,I totally agree and online education has the answer to it....</p>
                            </div>
                        </div>
                        <div className="w-[45%] shadow-2xl rounded-lg mb-12">
                            <Image height={200} width={400} alt="Test" src="/img2/lagos-city-Nigeria (1).jpg" className="w-full mb-4 rounded-t-lg object-center" />
                            <div className="px-4">
                                <span className="text-gray-400 mb-4">27 December 2023</span>
                                <h2 className="mb-4 font-bold">How IT University Education can be game changer for Nigeria Startups & IT sector changer for Nigeria Startups &IT sector</h2>
                                <p className="mb-8">I am excited to announce that I have been appointed as Brand Ambassador Nigeria for RiseBack, an Edtech organization...</p>
                            </div>
                        </div>
                        <div className="w-[45%] shadow-2xl rounded-lg mb-12">
                            <Image height={200} width={400} alt="Test" src="/img2/college-savings-concept_700248-1580.jpg" className="w-full mb-4 rounded-t-lg object-center" />
                            <div className="px-4">
                                <span className="text-gray-400 mb-4">22 September 2023</span>
                                <h2 className="mb-4 font-bold">How affordable University education helps individuals, organizations, and the economy?</h2>
                                <p className="mb-8">Many people would argue current education needs a reboot,I totally agree and online education has the answer to it....</p>
                            </div>
                        </div>
                        <div className="w-[45%] shadow-2xl rounded-lg mb-12">
                            <Image height={200} width={400} alt="Test" src="/img2/lagos-city-Nigeria (1).jpg" className="w-full mb-4 rounded-t-lg object-center" />
                            <div className="px-4">
                                <span className="text-gray-400 mb-4">27 December 2023</span>
                                <h2 className="mb-4 font-bold">How IT University Education can be game changer for Nigeria Startups & IT sector changer for Nigeria Startups &IT sector</h2>
                                <p className="mb-8">I am excited to announce that I have been appointed as Brand Ambassador Nigeria for RiseBack, an Edtech organization...</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] px-8">
                        <input type="text" placeholder="Search here" className="border w-full mb-4 p-3" />
                        <h2 className="font-bold mb-4">Catagories</h2>
                        <p className="my-2 border-b-2 pb-3">Academics</p>
                        
                        <p className="my-2 border-b-2 pb-3">Academics</p>
                        
                        <p className="my-2 border-b-2 pb-3">Academics</p>
                        
                        <p className="my-2 border-b-2 pb-3">Academics</p>
                        
                        <p className="my-2 border-b-2 pb-3">Academics</p>
                        
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-700 text-white px-4 py-2">Load More</button>
                </div>
            </section>
        </>
    )
}