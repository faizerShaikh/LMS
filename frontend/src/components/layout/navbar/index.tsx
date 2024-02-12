import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return <>
        <header className="bg-blue-900 h-16 flex justify-between items-center px-16">
            <div className="flex space-x-2">
                <Link href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7aCc%7C550525804797%7Cb%7Cfacebook%7C&placement=&creative=550525804797&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9062116%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAzJOtBhALEiwAtwj8tlRLfa3D8Xk-IzJia0f_qOBSkzf_lcm107Mv-YvgJLFknd5DKEA7mhoCCwQQAvD_BwE" /><Image alt="img" height={20} width={20} src="/img2/Facebook.png" className="size-9" />
                <Link href="https://twitter.com/?lang=en" /><Image alt="img" height={30} width={30} src="/img2/Twitter.png" className="size-9" />
                <Link href="https://in.linkedin.com/" /><Image alt="img" height={30} width={30} src="/img2/Linkedin.png" className="size-9" />
                <Link href="https://www.instagram.com/accounts/login/?hl=en" /><Image alt="img" height={30} width={30} src="/img2/Instagram.png" className="size-9" />
                <Link href="https://www.youtube.com/" /><Image alt="img" height={30} width={30} src="/img2/YouTube.png" className="size-9" />
            </div>
            <div>
                <ul className="flex text-white space-x-4 list-none">
                    <li><Link href="/" className="text-white">For Learner </Link></li>
                    <li><Link href="/for-organizations" className="text-white">For Organizations </Link></li>
                    <li><Link href="/for-government" className="text-white">For Government </Link></li>
                    <li><Link href="/for-partnership" className="text-white">For Patnership </Link></li>
                    <li><Link href="/for-universities" className="text-white">For Universities </Link></li>
                    <li><Link href="/for-placements" className="text-white">For Placements </Link></li>
                </ul>
            </div>

        </header>
        <nav className="h-16 flex justify-between items-center border px-16">
            <div>
                <Image alt="img" height={100} width={200} src="/img2/Riseback logo.png" />
            </div>
            <div>
                <ul className="flex space-x-7 text-blue-900 list-none">
                    <li><Link href="/courses" className=" text-blue-900">Courses <i className="fa-solid fa-chevron-down"></i> </Link></li>
                    <li><Link href="/about" className=" text-blue-900">About Us</Link></li>
                    <li><Link href="/global-partner" className=" text-blue-900">Global Partner <i className="fa-solid fa-chevron-down"></i></Link></li>
                    <li><Link href="/event" className=" text-blue-900">Events <i className="fa-solid fa-chevron-down"></i></Link></li>
                    <li><Link href="/blogs" className=" text-blue-900">Blog</Link></li>
                    <li><Link href="/media" className=" text-blue-900">Media</Link></li>
                    <li><Link href="/career" className=" text-blue-900">Career</Link></li>
                    <li><Link href="/contact-us" className=" text-blue-900">Contact</Link></li>
                    <button className="bg-blue-900 px-3 py-1 text-white rounded">Log in</button>
                </ul>
            </div>
        </nav></>
}

