import { ImgProps } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";


export interface CommonPageProps {
    heroText: string;
    belowText: string;
    heroImgSrc?: string;
    rowImg1?: string;
    rowImg2?: string;
    rowImg3?: string;
    rowImg4?: string;
    rowHeading1: string;
    rowHeading2: string;
    rowHeading3: string;
    rowHeading4: string;
    rowtext1: string;
    rowtext2: string;
    rowtext3: string;
    rowtext4: string;
}

export function CommonPage({ heroText, belowText,rowImg1="/img2/Economic-Growth.jpg", rowImg2="/img2/Economic-Growth.jpg", rowImg3="/img2/Economic-Growth.jpg", rowImg4="/img2/Economic-Growth.jpg", heroImgSrc='/img2/For-Government-page.jpg', rowHeading1, rowHeading2, rowHeading3, rowHeading4, rowtext1, rowtext2, rowtext3, rowtext4 }: CommonPageProps) {
    return (
        <>
            <section className="px-24 bg-gray-50 h-[414px]">
                <div className="flex ">
                    <div className="w-1/2 flex justify-center py-8">
                        <Image alt="test" height={350} width={550} src={heroImgSrc}   />
                    </div>
                    <div className="w-1/2 m-auto px-8">
                        <h2 className="font-bold text-4xl mt-0 mb-4">Educate, Empower, Elevate & Excel</h2>
                        <p className="font-medium mb-4 text-xl">{heroText}</p>
                        <button className="bg-blue-900 py-2 px-4 text-white">Contact us</button>
                    </div>
                </div>
            </section>
            <section className="py-24 px-24">
                <div className="flex justify-between text-center">
                    <div className="w-[300px]  rounded-xl shadow-xl h-[436px]">
                        <Image alt="test" height={180} width={300} src={rowImg1} className="w-full rounded-t-xl"  />
                        <h2 className="font-bold text-xl my-2">{rowHeading1}</h2>
                        <p className="px-4 text-sm  mb-4 font-medium text-gray-500">{rowtext1}</p>
                    </div>
                    <div className="w-[300px] rounded-xl shadow-xl h-[436px]">
                        <Image alt="test" height={180} width={300} src={rowImg2} className="w-full rounded-t-xl" />
                        <h2 className="font-bold text-xl px-1 my-2">{rowHeading2}</h2>
                        <p className="px-4 text-sm  mb-4 font-medium text-gray-500">{rowtext2}</p>
                    </div>
                    <div className="w-[300px] rounded-xl shadow-xl h-[436px]">
                        <Image alt="test" height={180} width={300} src={rowImg3} className="w-full rounded-t-xl" />
                        <h2 className="font-bold text-xl my-2">{rowHeading3}</h2>
                        <p className="px-4 text-sm  mb-4 font-medium text-gray-500">{rowtext3}</p>
                    </div>
                    <div className="w-[300px] rounded-xl shadow-xl h-[436px]">
                        <Image alt="test" height={180} width={300} src={rowImg4} className="w-full rounded-t-xl" />
                        <h2 className="font-bold text-xl my-2">{rowHeading4}</h2>
                        <p className="px-4 text-sm mb-4 font-medium text-gray-500">{rowtext4}</p>
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