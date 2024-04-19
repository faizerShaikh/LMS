"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlobalPartnerMenu from "./GlobalPartnerMenu";
import { CaretSortDown } from "@carbon/icons-react";
import { Button } from "..";
import MobileNav from "./mobileNav";
export const Navbar = ({ values }: any) => {
  const pathnameHave = usePathname();
  const isActive = (pathname: any) => {
    return pathnameHave === pathname
      ? "bg-white text-blue-900"
      : "text-white hover:text-blue-900 hover:bg-white ";
  };
  return (
    <header>
      <MobileNav />
      <>
        <nav className="bg-blue-900 fixed !w-full !z-50 left-0 right-0 h-12 hidden justify-between items-center desktop:px-16 laptop:flex laptop:px-8">
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
            <Link href="https://twitter.com/?lang=en">
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
            <ul className="flex text-white h-full items-center p-0 m-0 list-none laptop:text-xs desktop:text-lg">
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
                  className={` h-full flex items-center  px-4 ${isActive(
                    "/for-organization"
                  )}`}
                >
                  For Organizations{" "}
                </Link>
              </li>
              <li className="h-full">
                <Link
                  href="/for-government"
                  className={` h-full flex items-center  px-4 ${isActive(
                    "/for-government"
                  )}`}
                >
                  For Government{" "}
                </Link>
              </li>
              <li className="h-full">
                <Link
                  href="/for-partnership"
                  className={` h-full flex items-center  px-4 ${isActive(
                    "/for-partnership"
                  )}`}
                >
                  For Partnership{" "}
                </Link>
              </li>
              <li className="h-full">
                <Link
                  href="/for-universities"
                  className={` h-full flex items-center  px-4 ${isActive(
                    "/for-universities"
                  )}`}
                >
                  For Universities{" "}
                </Link>
              </li>
              <li className="h-full">
                <Link
                  href="/for-placement"
                  className={` h-full flex items-center  px-4 ${isActive(
                    "/for-placement"
                  )}`}
                >
                  For Placements{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="h-16 hidden fixed top-12 !w-full !z-50 bg-white justify-between items-center desktop:px-16 laptop:flex laptop:px-8">
          <div className="desktop:w-[200px] desktop:h-[100px] laptop:w-[150px] laptop:h-[80px] relative">
            <Link href={"/"}>
              <Image
                alt="img"
                // height={100}
                // width={200}
                layout="fill"
                src="/img2/Riseback logo.png"
              />
            </Link>
          </div>
          <div>
            <ul className="flex space-x-7 laptop:space-x-5 text-blue-900 list-none items-center">
              <li>
                <Link
                  href="/courses"
                  className=" text-blue-900 uppercase font-semibold laptop:text-xs desktop:text-lg"
                >
                  Courses <i className="fa-solid fa-chevron-down "></i>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className=" text-blue-900 uppercase font-semibold laptop:text-xs desktop:text-lg"
                >
                  About Us
                </Link>
              </li>
              <li className="flex justify-center items-center gap-1">
                <GlobalPartnerMenu />
                <CaretSortDown
                  size={18}
                  viewBox="0 0 36 36"
                  className="-mt-2"
                />
              </li>
              <li>
                <Link
                  href="/event"
                  className=" text-blue-900 uppercase font-semibold laptop:text-xs desktop:text-lg"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className=" text-blue-900 uppercase font-semibold laptop:text-xs desktop:text-lg"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className=" text-blue-900 uppercase font-semibold laptop:text-xs desktop:text-lg"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className=" text-blue-900 uppercase font-semibold laptop:text-xs desktop:text-lg"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className=" text-blue-900 uppercase font-semibold laptop:text-xs desktop:text-lg"
                >
                  Contact
                </Link>
              </li>
              <Button>
                <Link
                  href="/login"
                  className=" text-white uppercase laptop:text-xs desktop:text-sm"
                >
                  {values ? "Admin" : "log in"}
                </Link>
              </Button>
            </ul>
          </div>
        </nav>
      </>
    </header>
  );
};
