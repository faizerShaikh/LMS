import Image from "next/image";

export default function  EventsPage() {
    return(<>
    <section className="bg-gray-100">
        <div className="flex justify-center py-14">
            <p className="border-2 bg-white px-2 py-2 hover:bg-blue-900 hover:text-white"><a href="#">Upcoming Events</a></p>
            <p className="border-2 bg-white px-2 py-2 hover:bg-blue-900 hover:text-white"><a href="#">Past Events</a></p>
        </div>
    </section>

    <section className="px-24 py-12">
        <div className="flex">
            <div className="w-3/4 flex flex-wrap">
                <div className="w-[30%] mx-2  shadow-2xl rounded-md mb-4">
                    <Image src="/img2/gamification-creative-collage-concept-800x445.jpeg" width={200} height={50} alt="" className="w-full h-[180px] rounded-t-md" />
                    <div className="p-4">
                        <p className="font-bold m-0"> Rise N Start Ignite: Ethiopias First Startup Pitch Competition For Students</p>
                        <div className="flex justify-between">
                            <p>19th Jan 2024</p>
                            <p>10:00 AM</p>
                        </div>
                    </div>
                </div>


                <div className="w-[30%] mx-2  shadow-2xl rounded-md mb-4">
                    <Image src="/img2/1_y3BAYvcENWh-WkSVj6mBrQ.jpeg" width={200} height={50} alt="" className="w-full h-[180px] rounded-t-md" />
                    <div className="p-4">
                        <p className="font-bold  m-0">Rise N Start Ignite: Indonesia's First Startup Pitch Competition For Students</p>
                        <div className="flex justify-between">
                            <p>06th Jan 2024</p>
                            <p>10:00 AM</p>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] mx-2  shadow-2xl rounded-md mb-4">
                    <Image src="/img2/Black-Woman-using-Augmented-Reality-panel.jpeg" width={200} height={50}  alt="" className="w-full h-[180px] rounded-t-md" />
                    <div className="p-4">
                        <p className="font-bold m-0">Rise N Start Ignite: Indonesia's First Startup Pitch Competition For Students</p>
                        <div className="flex justify-between">
                            <p>02nd Jan 2024</p>
                            <p>10:00 AM</p>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] mx-2  shadow-2xl rounded-md mb-4">
                    <Image src="/img2/gamification-creative-collage-concept-800x445.jpeg" width={200} height={50}  alt="" className="w-full h-[180px] rounded-t-md" />
                    <div className="p-4">
                        <p className="font-bold  m-0">Rise N Start Ignite: Indonesia's First Startup Pitch Competition For Students</p>
                        <div className="flex justify-between">
                            <p>19th Jan 2024</p>
                            <p>10:00 AM</p>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] mx-2  shadow-2xl rounded-md mb-4">
                    <Image src="/img2/1_y3BAYvcENWh-WkSVj6mBrQ.jpeg" width={200} height={50}  alt="" className="w-full h-[180px] rounded-t-md" />
                    <div className="p-4">
                        <p className="font-bold  m-0">Rise N Start Ignite: Indonesia's First Startup Pitch Competition For Students</p>
                        <div className="flex justify-between">
                            <p>06th Jan 2024</p>
                            <p>10:00 AM</p>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] mx-2  shadow-2xl rounded-md mb-4">
                    <Image src="/img2/Black-Woman-using-Augmented-Reality-panel.jpeg" width={200} height={50}  alt="" className="w-full h-[180px] rounded-t-md" />
                    <div className="p-4">
                        <p className="font-bold  m-0">Rise N Start Ignite: Indonesia's First Startup Pitch Competition For Students</p>
                        <div className="flex justify-between ">
                            <p>02ndth Jan 2024</p>
                            <p>10:00 AM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/4 shadow-2xl mb-4 rounded-md p-4 border-2">
                <div className="mb-8 pb-8 border-b-2 border-dashed border-black">
                    <h2 className="text-xl font-semibold mb-4 ">Event Types</h2>
                    <input type="radio" name="ALL" id="all" />
                    <label htmlFor="all">ALL</label><br/>
                    <input type="radio" name="webinars" id="webinars" />
                    <label htmlFor="all">Webinars</label><br/>
                    <input type="radio" name="on-site" id="on-site"/>
                    <label htmlFor="all">On-site</label>
                </div>

                <div  className="mb-8 pb-8 border-b-2 border-dashed border-black">
                    <h2 className="text-xl font-semibold mb-4 ">Event Location</h2>
                    <input type="radio" name="ALL" id="all"/>
                    <label htmlFor="all">ALL</label><br/>
                    <input type="radio" name="webinars" id="webinars"/>
                    <label htmlFor="all">Webinars</label><br/>
                </div>

                <div  className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 ">Programs</h2>
                    <select name="" id="" className="w-full py-1  border-2">
                        <option value="abc">ABC</option>
                        <option value="abc">ABC</option>
                        <option value="abc">ABC</option>
                        <option value="abc">ABC</option>
                        <option value="abc">ABC </option>
                    </select>
                </div>
            </div>
        </div>
   
    </section>

        </>
    )
}