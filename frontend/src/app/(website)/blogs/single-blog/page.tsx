import Image from "next/image";
import Link from "next/link";
export default function SingleBlog() {
    return (
        <>
        <section className="px-36">
            <div >
                <Image src="/img2/Information-Technology.jpg" height={50} width={500} alt = "" className="w-full h-auto mt-4" />
                <h2 className="mt-4 font-semibold py-4 text-3xl mb-8">Can an Information Technology University degree be the road to achieving the American Dream ?</h2>
            </div>
        </section>
        <section className="px-36 mb-20">
            <div className="flex justify-between mb-8">
                <div className="flex">
                    <i className="pr-8"></i>
                    <p className="pr-8">By <span className="font-bold">Tausif Malik</span> </p>
                    <p className="pr-8">January 03, 2023</p>
                </div>
                <div className="flex">
                    <p className="pr-4">Share: </p>
                    <Link href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7aCc%7C550525804797%7Cb%7Cfacebook%7C&placement=&creative=550525804797&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9062116%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAzJOtBhALEiwAtwj8tlRLfa3D8Xk-IzJia0f_qOBSkzf_lcm107Mv-YvgJLFknd5DKEA7mhoCCwQQAvD_BwE" /><Image alt="img" height={20} width={20} src="/img2/Facebook.png" className="size-9 mr-3 bg-blue-800 rounded-full" />
                    <Link href="https://twitter.com/?lang=en" /><Image alt="img" height={30} width={30} src="/img2/Twitter.png" className="size-9 mr-3 bg-blue-800 rounded-full" />
                    <Link href="https://in.linkedin.com/" /><Image alt="img" height={30} width={30} src="/img2/Linkedin.png" className="size-9 mr-3 bg-blue-800 rounded-full" />
                    <Link href="https://www.instagram.com/accounts/login/?hl=en" /><Image alt="img" height={30} width={30} src="/img2/Instagram.png" className="size-9 mr-3 bg-blue-800 rounded-full" />
                </div>
            </div>
           
            <div className="mb-14">
                <p className="font-medium mb-4 text-gray-600">Last year, I launched RiseBack, an ed-tech platform that connects the global student fraternity with Indian universities.</p>
                <p className="font-medium mb-4 text-gray-600">The Indian universities on the RiseBack platform offers undergraduate and master's degrees in Business & IT and both of them have courses in IT - such as digital marketing, blockchain, artificial intelligence et al.</p>
                <p className="font-medium mb-4 text-gray-600">The reason for focusing on IT education as it is one of the highest-paying jobs and this can help reduce gaps in education and increase the income of fellow Americans.</p>
                <h2 className="font-bold text-xl mb-4">According to USNews.com IT Managers made a median salary of $151,150 in 2020. The best- paid 25 percent made $191,470 that year, while the lowest-paid 25 percent made $116,990.</h2>
                <p className="font-medium mb-4  text-gray-600">IT education can also encourage Americans to create more startups, develop new technology and reduce the shortage of professionals which hampers the growth of companies. Also, companies if they hire local talent can help in boosting the economy.</p>
                <p className="font-medium mb-4  text-gray-600">Here, American students and professionals can study undergraduate and masters entire programs from the comfort of their homes for approximately $2500.00 or $75 per month which is 15 times cheaper than studying at a domestic university this doesn't include lodging & boarding and a sabbatical from work. These degrees are accredited by UGC (University Grants Commission of India) and are globally recognized. And, thanks to global alumni of Indian universities who are heading global corporations and institutions which gave Indian education a gold standard for success.</p>
                <h2 className="font-bold text-xl mb-4">Why I launched RiseBack, there is a backstory to this....</h2>
                <p className="font-medium mb-4  text-gray-600">For over a century America has been leading the world in Technology, whether its the hardware or software technologies.</p>
                <p className="font-medium mb-4  text-gray-600">This drive for innovation steems out of the American people to achieve the American Dream, which has been a cornerstone for the emergence of America as a Superpower.</p>
                <p className="font-medium mb-4  text-gray-600">But during the last decades, the cost of education has been eroding this American Dream, as many get trapped in the student crisis. In the eighties, IT became a driving force starting for Silicon Valley and driving this across America. The Bush-era encourage corporates for globalization and resulted in outsourcing of manufacturing to southeast Asian countries and software development to India.</p>
                <p className="font-medium mb-4  text-gray-600">India became the back office for software development for the world and China the manufacturing hub.</p>
                <p className="font-medium mb-4  text-gray-600">When I immigrated to America I had two Masters' degrees and this helped me enroll in my Doctorate Program. I had no student debt, so I had no debts to pay, and this gave me the freedom to explore my career in the US. I traveled across America and found the majority of Americans shy away from enrolling in the University as the costs were very high and the return on investment on this couldn't be recouped unless and until they studied at an IVY league university or technology program</p>
                <p className="font-medium mb-4  text-gray-600">I observed that immigrants were far more successful as they had no student debt or little student debt when compared with fellow Americans.</p>
                <p className="font-medium mb-4  text-gray-600">The IT industry was still outsourcing to India and other countries or hiring people from abroad.</p>
                <p className="font-medium mb-4  text-gray-600">During my travel, I had met a lot of Americans and they always asked me whether I was a medical doctor or a software engineer, I responded to them negatively as I was neither a doctor nor a software engineer. I also met very talented people but they faced the hurdle of lack of University education to break into the career league.</p>
                <p className="font-medium mb-4  text-gray-600">Due to my upbringing, I was taught to help others to achieve success, I made a prayer and asked how can I help my fellow Americans achieve their dreams. I hit upon a eureka moment, why not use my connections in the software industry in India to help train people in technology via Skype (From 2012 Skype App was the only free video call app). I wanted to name the project 'RiseBack' from the native American saying "Rise back like Phoenix). I worked on this project day and night but fate had other things written for me. I was hit with two personal calamities my mother went through a major spinal cord surgery and I lost my dad to a heart attack, I decided to move with my mom back to India for her treatment. Then I realized there are two things that hold back fellow Americans one is the high cost of education, and the other is healthcare.</p>
            </div>
    
            <div className="flex mb-4">
                <div className="text-right border-2 px-6 w-1/2">
                    <p className="mb-2">Previous post</p>
                    <h2 className="font-bold mb-2 text-lg"><a href="#" className="text-black">How IT University Education can be game changer for Nigeria Startups & IT sector</a></h2>
                    <p className="mb-2">January 3 2023</p>
                </div>
                <div className=" border-2 px-6 w-1/2">
                    <p className="mb-2">Previous post</p>
                    <h2 className="font-bold mb-2 text-lg"><a href="#" className="text-black">Unlocking Lucrative Opportunities: IT Courses in Al, ML, Web Apps, Cloud, and Blockchain for Indonesians</a></h2>
                    <p className="mb-2">September 9 2023</p>
                </div>
            </div>
        </section>


        <section className="px-36 mb-20">
            <h2 className="text-3xl font-bold mb-8">YOU MAY ALSO LIKE</h2>
    
            <div className="flex justify-between">
                <div className="w-[350px]">
                    <Image src="/img2/ncept-with-robot-arms-23-2149739749.jpeg" height={200} width={250} alt="" className="w-full h-52 mb-4" />
                    <h2 className="font-bold mb-2 text-lg">Time Magazine Recognizes Desi and Indian-Origin Techies in Inaugural 'TIME100 AI List</h2>
                    <p>9 September 2023</p>
                </div>
                <div className="w-[350px]">
                    <Image src="/img2/motivational-composition-goal-achievement_23-2150490032.jpg" height={200} width={250} alt="" className="w-full h-52 mb-4" />
                    <h2 className="font-bold mb-2 text-lg">Unlocking Lucrative Opportunities: IT Courses in AI, ML, Web Apps, Cloud, and Blockchain for Indonesians</h2>
                    <p>9 September 2023</p>
                </div>
                <div className="w-[350px]">
                    <Image src="/img2/lagos-city-Nigeria (1).jpg" height={200} width={250} alt="" className="w-full h-52 mb-4" />
                    <h2 className="font-bold mb-2 text-lg">How IT University Education can be game changer for Nigeria Startups & IT sector</h2>
                    <p>27 December 2022</p>
                </div>
            </div>
        </section>
    </>
    )   
}