import Image from "next/image";

export const Footer = () => {
    return <>
        <footer className="bg-black px-24">
            <div className="text-white flex py-8">
                <div className="w-1/5">
                    <Image height={50} width={50} src="/img/logo-for-footer-80x80.png" className="mb-4" alt="ks" />
                    <div className="flex mb-4">
                        <div className=" flex items-center">
                            <i className="fa-solid fa-phone pr-3"></i>
                        </div>
                        <div>
                            <a href="#" className="pb-3">+91 - 7972802372 (India)</a><br />
                            <a href="#" className="pb-3">+1 - 77353 69786 (USA)</a>
                        </div>
                    </div>
                    <div className="w-1/5 flex">
                        <div className="flex items-center">
                            <i className="fa-solid fa-envelope pr-3"></i>
                        </div>
                        <div>
                            <a href="#">info@riseback.org</a>
                        </div>
                    </div>
                </div>
                <div className="w-1/5 flex flex-col">
                    <h2 className="mb-4">LINKS</h2>
                    <span className="border-b-2 w-4 mb-4"></span>
                    <a href="#" className="mb-2">Professional Courses</a>
                    <a href="#" className="mb-2">Undergraduate Degree’s</a>
                    <a href="#" className="mb-2">Master Degree’s</a>
                </div>
                <div className="w-1/5 flex flex-col">
                    <h2 className="mb-4">COMPANY</h2>
                    <span className="border-b-2 w-4 mb-4"></span>
                    <a href="#" className="mb-2">About Us</a>
                    <a href="#" className="mb-2">Contact</a>
                    <a href="#" className="mb-2">Career</a>
                </div>
                <div className="w-1/5 flex flex-col">
                    <h2 className="mb-4">SUPPORT</h2>
                    <span className="border-b-2 w-4 mb-4"></span>
                    <a href="#" className="mb-2">Privacy Policy</a>
                    <a href="#" className="mb-2">Terms & Condition</a>
                </div>
                <div className="w-1/5 flex flex-col">
                    <h2 className="mb-4">Follow Us</h2>
                    <span className="border-b-2 w-4 mb-4"></span>
                    <div className="flex ">
                        <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7aCc%7C550525804797%7Cb%7Cfacebook%7C&placement=&creative=550525804797&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9062116%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAzJOtBhALEiwAtwj8tlRLfa3D8Xk-IzJia0f_qOBSkzf_lcm107Mv-YvgJLFknd5DKEA7mhoCCwQQAvD_BwE" className="pr-2"><Image height={50} width={50} src="/img/Facebook.png" alt="" /></a>
                        <a href="https://twitter.com/?lang=en" className="pr-2"><Image height={50} width={50} src="/img/Twitter.png" alt="dd" /></a>
                        <a href="https://in.linkedin.com/" className="pr-2" ><Image height={50} width={50} src="/img/Linkedin.png" alt="dd" /></a>
                        <a href="https://www.instagram.com/accounts/login/?hl=en" className="pr-2"><Image height={50} width={50} src="/img/Instagram.png" alt="ss" /></a>
                    </div>
                </div>
            </div>

            <div className="text-gray-300 pb-4">
                <p>Copyright © 2022. All right reserved by Riseback Edutech.</p>
                <p>Design & Developed By <span className="text-white hover:underline"><a href="#">TMA Worldwide.</a></span></p>
            </div>
        </footer></>
}
