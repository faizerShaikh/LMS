import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
  const pathnameHave = usePathname()

  const isActive = (pathname : any) => {
    return pathnameHave === pathname ? "bg-white text-blue-900" : "text-white hover:text-blue-900 hover:bg-white "
  }
  return (
    <>
      <header className="bg-blue-900 h-12 flex justify-between items-center px-16">
        <div className="flex  items-center space-x-2">
          <Link href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7aCc%7C550525804797%7Cb%7Cfacebook%7C&placement=&creative=550525804797&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9062116%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAzJOtBhALEiwAtwj8tlRLfa3D8Xk-IzJia0f_qOBSkzf_lcm107Mv-YvgJLFknd5DKEA7mhoCCwQQAvD_BwE">
            <Image
              alt="img"
              height={100}
              width={100}
              src="/img2/Group.svg"
              className="size-7 "
            />
          </Link>
          <Link href="https://twitter.com/?lang=en" >
            <Image
              alt="img"
              height={100}
              width={100}
              src="/img2/xlogo.svg"
              className="size-7 "
            />
          </Link>
          <Link href="https://in.linkedin.com/">
            <Image
              alt="img"
              height={100}
              width={100}
              src="/img2/linkdinlogo.svg"
              className="size-7 "
            />
          </Link>
          <Link href="https://www.instagram.com/accounts/login/?hl=en">
            <Image
              alt="img"
              height={100}
              width={100}
              src="/img2/instagramlogo.svg"
              className="size-7 "
            />
          </Link>
          <Link href="https://www.youtube.com/">
            <Image
              alt="img"
              height={100}
              width={100}
              src="/img2/youtubeLogo.svg"
              className="size-7 "
            />
          </Link>
        </div>
        <div className=" h-full flex items-center">
          <ul className="flex text-white h-full items-center p-0 m-0 list-none">
            <li className="h-full">
              <Link
                href="/"
                className={` h-full flex items-center  px-4 ${isActive("/")}`}
              >
                For Learner{" "}
              </Link>
            </li>
            <li className="h-full">
              <Link
                href="/for-organization"
                className = {` h-full flex items-center  px-4 ${isActive("/for-organization")}`}
              >
                For Organizations{" "}
              </Link>
            </li>
            <li className="h-full">
              <Link
                href="/for-government"
                className={` h-full flex items-center  px-4 ${isActive("/for-government")}`}
              >
                For Government{" "}
              </Link>
            </li>
            <li className="h-full">
              <Link
                href="/for-partnership"
                className={` h-full flex items-center  px-4 ${isActive("/for-partnership")}`}
              >
                For Partnership{" "}
              </Link>
            </li>
            <li className="h-full">
              <Link
                href="/for-universities"
                className={` h-full flex items-center  px-4 ${isActive("/for-universities")}`}
              >
                For Universities{" "}
              </Link>
            </li>
            <li className="h-full">
              <Link
                href="/for-placement"
                className={` h-full flex items-center  px-4 ${isActive("/for-placement")}`}
              >
                For Placements{" "}
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <nav className="h-16 flex justify-between items-center  px-16">
        <div>
          <Image
            alt="img"
            height={100}
            width={200}
            src="/img2/Riseback logo.png"
          />
        </div>
        <div >
          <ul className="flex space-x-7 text-blue-900 list-none items-center">
            <li>
              <Link
                href="/courses"
                className=" text-blue-900 uppercase font-semibold"
              >
                Courses <i className="fa-solid fa-chevron-down "></i>{" "}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className=" text-blue-900 uppercase font-semibold"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/global-partner"
                className=" text-blue-900 uppercase font-semibold"
              >
                Global Partner <i className="fa-solid fa-chevron-down"></i>
              </Link>
            </li>
            <li>
              <Link
                href="/event"
                className=" text-blue-900 uppercase font-semibold"
              >
                Events <i className="fa-solid fa-chevron-down"></i>
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className=" text-blue-900 uppercase font-semibold"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/media"
                className=" text-blue-900 uppercase font-semibold"
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                href="/career"
                className=" text-blue-900 uppercase font-semibold"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className=" text-blue-900 uppercase font-semibold"
              >
                Contact
              </Link>
            </li>
            <button className="bg-blue-900 px-3 py-1 text-base cursor-pointer  text-white rounded">
              Log in
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};
