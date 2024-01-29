import Image from "next/image"

export default function ContactUs() {
    return <> <section className="bg-gray-50 ">
        <div className="flex px-24 py-8 ">
            <div className="w-2/4 flex justify-evenly">
                <Image alt="hehje" width={500} height={350} src="/img/contact.jpg"  />
            </div>
            <div className="w-2/4 px-8 m-auto ">
                <h2 className="font-bold text-4xl mt-0 mb-4">Contact RiseBack</h2>
                <p className="font-semibold text-xl">RiseBack.org stands as the world's premier affordable EdTech platform, pioneering accessible online university degree programs encompassing both undergraduate ,graduate studies and, specialized IT courses are available for as low as $250, ensuring quality education is with in reach for aspiring learners around the world.</p>
            </div>
        </div>
    </section>
        <section className="px-24 text-center bg-slate-100">
            <div className="py-12">
                <h2 className="font-semibold text-4xl m-0 pb-12">Enquiries</h2>
                <div className="flex flex-wrap items-center justify-around">
                    <div className=" flex flex-col items-center mb-8 w-96 mr-4 bg-white py-4 shadow-2xl rounded-md">
                        <Image alt="hehje" width={50} height={50} src="/img/cap.jpg" className="rounded-full size-28 mb-4" />
                        <h2 className="mb-3">University Degrees</h2>
                        <a href="" className="text-blue-700">Know More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className=" flex flex-col items-center mb-8 w-96  mr-4 bg-white py-4 shadow-2xl rounded-md">
                        <Image alt="hehje" width={50} height={50} src="/img/cap.jpg" className="rounded-full size-28 mb-4" />
                        <h2 className="mb-3">Professional IT Courses</h2>
                        <a href="" className="text-blue-700">Know More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className=" flex flex-col items-center mb-8 w-96 mr-4 bg-white py-4 shadow-2xl rounded-md">
                        <Image alt="hehje" width={50} height={50} src="/img/cap.jpg" className="rounded-full size-28 mb-4" />
                        <h2 className="mb-3">Government</h2>
                        <a href="" className="text-blue-700">Know More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className=" flex flex-col items-center  mb-8 w-96 mr-4 bg-white py-4 shadow-2xl rounded-md">
                        <Image alt="hehje" width={50} height={50} src="/img/cap.jpg" className="rounded-full size-28 mb-4" />
                        <h2 className="mb-3">Corporate Training</h2>
                        <a href="" className="text-blue-700">Know More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className=" flex flex-col items-center  mb-8 w-96 mr-4 bg-white py-4 shadow-2xl rounded-md">
                        <Image alt="hehje" width={50} height={50} src="/img/cap.jpg" className="rounded-full size-28 mb-4" />
                        <h2 className="mb-3">Organizations</h2>
                        <a href="" className="text-blue-700">Know More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className=" flex flex-col items-center  mb-8 w-96 mr-4 bg-white py-4 shadow-2xl rounded-md">
                        <Image alt="hehje" width={50} height={50} src="/img/cap.jpg" className="rounded-full size-28 mb-4" />
                        <h2 className="mb-3">Partnership</h2>
                        <a href="" className="text-blue-700">Know More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-gray-50">
            <div className="mx-24 text-center pb-24">
                <h2 className=" text-4xl m-0 py-16 font-semibold">Global Offices</h2>
                <div className="flex justify-between">
                    <div>
                        <Image alt="hehje" width={50} height={50} src="/img/usa flag.png" className="w-48 h-24 mb-4 shadow-xl rounded-md" />
                        <p className="font-bold mt-2 text-lg">USA</p>
                    </div>
                    <div>
                        <Image alt="hehje" width={50} height={50} src="/img/Indonesia flag.png" className="w-48 h-24 mb-4 shadow-xl rounded-md" />
                        <p className="font-bold mt-2 text-lg">Indonesia</p>
                    </div>
                    <div>
                        <Image alt="hehje" width={50} height={50} src="/img/Nigeria flag.png" className="w-48 h-24 mb-4 shadow-xl rounded-md" />
                        <p className="font-bold mt-2 text-lg ">Nigeria</p>
                    </div>
                    <div>
                        <Image alt="hehje" width={50} height={50} src="/img/Ethopia flag.png" className="w-48 h-24 mb-4 shadow-xl rounded-md" />
                        <p className="font-bold mt-2 text-lg ">Ethopia</p>
                    </div>
                    <div>
                        <Image alt="hehje" width={50} height={50} src="/img/Egypt flag.png" className="w-48 h-24 mb-4 shadow-xl rounded-md" />
                        <p className="font-bold mt-2 text-lg ">Egypt</p>
                    </div>
                    <div>
                        <Image alt="hehje" width={50} height={50} src="/img/philippine flag.png" className="w-48 h-24 mb-4 shadow-xl rounded-md" />
                        <p className="font-bold mt-2 text-lg ">Philippines</p>
                    </div>
                </div>
            </div>
        </section></>
}