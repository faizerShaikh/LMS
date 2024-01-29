import Image from "next/image";


export interface CommonPageProps {
    heroText: string;
    belowText: string;
}

export function CommonPage({ heroText, belowText }: CommonPageProps) {
    return (
        <>
            <section className="px-24 bg-gray-50 ">
                <div className="flex py-8">
                    <div className="w-1/2 flex justify-center">
                        <Image alt="test" height={300} width={300} src="/img/uni-page 1.jpg" className=" w-3/4" />
                    </div>
                    <div className="w-1/2 m-auto">
                        <h2 className="font-bold text-4xl mt-0 mb-4">Educate, Empower, Elevate & Excel</h2>
                        <p className="font-semibold mb-4 text-xl">{heroText}</p>
                        <button className="bg-blue-900 py-2 px-4 text-white">Contact us</button>
                    </div>
                </div>
            </section>
            <section className="py-24 px-24">
                <div className="flex justify-between text-center">
                    <div className="w-[300px]  rounded-xl shadow-xl h-[436px]">
                        <Image alt="test" height={180} width={50} src="/img/unidiv 1.jpg" className="w-full rounded-t-xl" />
                        <h2 className="font-bold text-xl my-2">Retention</h2>
                        <p className="px-4 text-sm  mb-4 font-medium text-gray-500">Implementing career development initiatives not only instills a sense of value among employees but also nurtures loyalty. This, inturn, leadsto higher staff retention rates and a significant 59% reduction in turnover.</p>
                    </div>
                    <div className="w-[300px] rounded-xl shadow-xl h-[436px]">
                        <Image alt="test" height={180} width={50} src="/img/unidiv 1.jpg" className="w-full rounded-t-xl" />
                        <h2 className="font-bold text-xl px-1 my-2">Boost Workplace Engagement</h2>
                        <p className="px-4 text-sm  mb-4 font-medium text-gray-500">Training prevents boredom, promotes internal growth, and enhances company culture. Forbes data highlights a direct correlation : low empowerment leads to low engagement(24th percentile), while high empowerment boosts engagement to the 79th percentile.</p>
                    </div>
                    <div className="w-[300px] rounded-xl shadow-xl h-[436px]">
                        <Image alt="test" height={180} width={50} src="/img/unidiv 1.jpg" className="w-full rounded-t-xl" />
                        <h2 className="font-bold text-xl my-2">Empowerment</h2>
                        <p className="px-4 text-sm  mb-4 font-medium text-gray-500">Empowered leaders drive influence and trust. This autonomy fosters a sense of value and confidence among employees, as defined by SHRM.</p>
                    </div>
                    <div className="w-[300px] rounded-xl shadow-xl h-[436px]">
                        <Image alt="test" height={180} width={50} src="/img/unidiv 1.jpg" className="w-full rounded-t-xl" />
                        <h2 className="font-bold text-xl my-2">Reduce downtime</h2>
                        <p className="px-4 text-sm mb-4 font-medium text-gray-500">Reduce downtime by investing in employee training. Enhanced knowledge of equipment and processes enables quicker identification and resolution of potential issues(FasterCapital.com)</p>
                    </div>
                </div>
            </section>
            <section className="px-24 py-14 bg-slate-100">
                <div className="flex items-center">
                    <div className="w-1/2 p-4">
                        <p className="font-semibold text-xl">{belowText}</p>
                    </div>
                    <div className="flex flex-col px-24 w-1/2 text-center">
                        <form action="" className="border border-black bg-white p-12">
                            <p className="font-semibold mt-0 mb-4">Please complete and submit the Enquiry form, one of our team member
                                would contact you.</p>
                            <input type="text" placeholder="Name " required className="w-full mb-4 border-2 rounded-md p-2" /><br />
                            <input type="text" placeholder="Organization: " required
                                className="w-full mb-4 border-2 rounded-md p-2" /><br />
                            <input type="text" placeholder="Title/Designation: " required
                                className="w-full mb-4 border-2 rounded-md p-2" /><br />
                            <input type="email" placeholder="Email (only offical email): " required
                                className="w-full mb-4 border-2 rounded-md p-2" /><br />
                            <select className="w-full mb-4 border-2 rounded-md p-2">
                                <option value="" disabled selected hidden>Type of traning</option>
                                <option value="#">abc</option>
                                <option value="#">abc</option>
                                <option value="#">abc</option>
                            </select><br />
                            <input type="submit" className="w-full bg-blue-900 text-white py-1 cursor-pointer" />
                        </form>
                    </div>
                </div>
            </section>
        </>)
}