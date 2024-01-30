import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="px-24 bg-gray-100">
                <div className="flex ">
                    <div className="w-1/2 flex justify-center ">
                        <Image height={400} width={400} alt="test" src="/img2/Home Page.jpg" className="w-3/4" />
                    </div>
                    <div className="w-1/2 px-4 m-auto">
                        <h2 className="font-bold text-4xl mb-4">Educate, Empower, Elevate & Excel</h2>
                        <p className="font-medium mb-4 text-xl">Elevate your career with RiseBack! Explore our budget-friendly professional certificate programs, commencing at just $250, and university degree programs starting at an affordable $60 per month. Step in to a brighter future with us !</p>
                    </div>
                </div>
            </section>

            <section className="px-24">
                <div className="mb-8">
                    <h2 className="font-bold text-3xl mb-4">Events</h2>
                    <p>Upcoming Education Events to feed your brain</p>

                </div>
                <div className="flex mb-8">
                    <div className="w-1/4">
                        <h2><span style={{ color: '#ffcc00', fontSize: '60px' }}>02</span></h2>
                        <p>January</p>
                    </div>
                    <div className="w-1/2 px-2">
                        <h2 className="font-bold mb-4 text-lg">Rise N Start Ignite: Nigeria’s First Startup Pitch Competition For Students</h2>
                        <p className="mb-4">🕒10:00 Am – 5:00 Pm</p>
                        <p>Register Now Date: February 2nd – February 3rd, 2024 Time: 10 AM – 5 PM Deadline for application: January 21 st, 2024 Application; Free…</p>
                    </div>
                    <div className="w-1/4 m-auto px-4">
                        <Image height={150} width={300} src="/img/events1.jpg" alt="" />
                    </div>
                </div>
                <div className="flex mb-8">
                    <div className="w-1/4">
                        <h2><span style={{ color: '#ffcc00', fontSize: '60px' }}>06</span></h2>
                        <p>January</p>
                    </div>
                    <div className="w-1/2 px-2">
                        <h2 className="font-bold  mb-4 text-lg">Perkenalkan Rise N Start Ignite: Kompetisi Pitch Startup Pertama di Indonesia untuk Pelajar dan Mahasiswa</h2>
                        <p className="time">🕒10:00 Am – 5:00 Pm</p>
                        <p>Register Now Date: February 2nd – February 3rd, 2024 Time: 10 AM – 5 PM Deadline for application: January 21 st, 2024 Application; Free…</p>
                    </div>
                    <div className="w-1/4 m-auto px-4">
                        <Image height={150} width={300} src="/img/events2.jpg" alt="qquq" />
                    </div>
                </div>
                <div className="flex mb-8">
                    <div className="w-1/4">
                        <h2><span style={{ color: '#ffcc00', fontSize: '60px' }}>19</span></h2>
                        <p>January</p>
                    </div>
                    <div className="w-1/2 px-2">
                        <h2 className="font-bold mb-4 text-lg">Rise N Start Ignite: Ethiopia’s First Startup Pitch Competition For Students</h2>
                        <p className="time">🕒10:00 Am – 5:00 Pm</p>
                        <p>Register Now Date: February 2nd – February 3rd, 2024 Time: 10 AM – 5 PM Deadline for application: January 21 st, 2024 Application; Free…</p>
                    </div>
                    <div className="w-1/4 m-auto px-4">
                        <Image height={150} width={300} src="/img/events3.jpg" alt="event" />
                    </div>
                </div>

            </section></>
    )
}
