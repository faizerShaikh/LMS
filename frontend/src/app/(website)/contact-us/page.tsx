import Image from "next/image"
import Link from "next/link"

export default function ContactUs() {
    return <> <section className="bg-gray-50 h-[400px]">
        <div className="flex container py-8  gap-10 ">
            <div className="w-1/2">
                <Image alt="test"
              width={0}
              height={336}
              sizes="100vw"
              style={{ width: "100%" }}
              className="object-center " src="/img2/Contact-Us-Page.jpg"  />
            </div>
            <div className="w-1/2 px-8 m-auto ">
                <h2 className="font-extrabold text-5xl leading-[56px] mt-0 mb-4">Contact RiseBack</h2>
                <p className="font-medium text-xl">RiseBack.org stands as the world's premier affordable EdTech platform, pioneering accessible online university degree programs encompassing both undergraduate ,graduate studies and, specialized IT courses are available for as low as $250, ensuring quality education is with in reach for aspiring learners around the world.</p>
            </div>
        </div>
    </section>
        <section className=" text-center bg-slate-100">
            <div className="py-12 container">
                <h2 className="font-semibold text-4xl m-0 pb-12">Enquiries</h2>
                <div className="flex flex-wrap items-center justify-around">
                    <div className=" flex flex-col items-center mb-8 w-96  bg-white py-4 shadow-2xl rounded-md">
                        <div className="bg-blue-900 rounded-full size-20 mt-4 ">
                            <Image src="/img2/University-Degree.png" alt="" width={50} height={50} className="object-cover mt-3  "/>
                        </div>
                        <h2 className="mb-3">University Degrees</h2>
                        <Link href="" className="text-blue-700">Know More <Image src="/img2/know More.png" alt="test" width={13} height={13} /></Link>
                    </div>
                    <div className=" flex flex-col items-center mb-8 w-96   bg-white py-4 shadow-2xl rounded-md">
                    <div className="bg-blue-900 rounded-full size-20 mt-4 ">
                        <Image alt="hehje"  src="/img2/Professional-IT-Course.png" width={50} height={50} className="object-cover mt-3 " />
                        </div>
                        <h2 className="mb-3">Professional IT Courses</h2>
                        <Link href="" className="text-blue-700">Know More <Image src="/img2/know More.png" alt="test" width={13} height={13} /></Link>
                    </div>
                    <div className=" flex flex-col items-center mb-8 w-96  bg-white py-4 shadow-2xl rounded-md">
                    <div className="bg-blue-900 rounded-full size-20 mt-4 ">
                        <Image alt="hehje"  src="/img2/Government.png" width={50} height={50} className="object-cover mt-3 " />
                        </div>
                        <h2 className="mb-3">Government</h2>
                        <Link href="" className="text-blue-700">Know More <Image src="/img2/know More.png" alt="test" width={13} height={13} /></Link>
                    </div>
                    <div className=" flex flex-col items-center  mb-8 w-96  bg-white py-4 shadow-2xl rounded-md">
                    <div className="bg-blue-900 rounded-full size-20 mt-4 ">
                        <Image alt="hehje" src="/img2/Corporate-Training.png" width={50} height={50} className="object-cover mt-3 " />
                        </div>
                        <h2 className="mb-3">Corporate Training</h2>
                        <Link href="" className="text-blue-700">Know More <Image src="/img2/know More.png" alt="test" width={13} height={13} /></Link>
                    </div>
                    <div className=" flex flex-col items-center  mb-8 w-96  bg-white py-4 shadow-2xl rounded-md">
                    <div className="bg-blue-900 rounded-full size-20 mt-4 ">
                        <Image alt="hehje"  src="/img2/Organization.png" width={50} height={50} className="object-cover mt-3 " />
                        </div>
                        <h2 className="mb-3">Organizations</h2>
                        <Link href="" className="text-blue-700">Know More <Image src="/img2/know More.png" alt="test" width={13} height={13} /></Link>
                    </div>
                    <div className=" flex flex-col items-center  mb-8 w-96  bg-white py-4 shadow-2xl rounded-md">
                    <div className="bg-blue-900 rounded-full size-20 mt-4 ">
                        <Image alt="hehje"  src="/img2/Partnership.png" width={50} height={50} className="object-cover mt-3 " />
                        </div>
                        <h2 className="mb-3">Partnership</h2>
                        <Link href="" className="text-blue-700">Know More <Image src="/img2/know More.png" alt="test" width={13} height={13} /></Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-gray-50">
            <div className="container text-center pb-24">
                <h2 className=" text-4xl m-0 py-16 font-semibold">Global Offices</h2>
                <div className="flex flex-wrap justify-between">
                    <div>
                        <Image alt="hehje" width={200} height={200} src="/img2/USA.jpg" className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer" />
                        <p className="font-bold mt-2 text-lg">USA</p>
                    </div>
                    <div>
                        <Image alt="hehje" width={200} height={200} src="/img2/Indonesia.jpg" className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer" />
                        <p className="font-bold mt-2 text-lg">Indonesia</p>
                    </div>
                    <div>
                        <Image alt="hehje" width={200} height={200} src="/img2/Nigeria.jpg" className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer" />
                        <p className="font-bold mt-2 text-lg ">Nigeria</p>
                    </div>
                    <div>
                        <Image alt="hehje" width={200} height={200} src="/img2/Ethiopia.jpg" className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer" />
                        <p className="font-bold mt-2 text-lg ">Ethopia</p>
                    </div>
                    <div>
                        <Image alt="hehje" width={200} height={200} src="/img2/Egypt.jpg" className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer" />
                        <p className="font-bold mt-2 text-lg ">Egypt</p>
                    </div>
                    <div>
                        <Image alt="hehje" width={200} height={200} src="/img2/Philippines.jpg" className="w-48 h-24 mb-4 shadow-xl rounded-md hover:scale-110 transition duration-500 cursor-pointer" />
                        <p className="font-bold mt-2 text-lg ">Philippines</p>
                    </div>
                </div>
            </div>
        </section>
        </>
}