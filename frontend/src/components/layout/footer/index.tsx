import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black desktop:px-24 px-8">
        <div className="text-white flex py-8 flex-col desktop:grid desktop:grid-cols-2 tablet:grid tablet:grid-cols-2 tablet:mx-20">
          <div>
            <Image
              height={50}
              width={200}
              src="/img2/RiseBack-Final-Logo.png"
              className="mb-4 size-24"
              alt="ks"
            />
            <div className="flex mb-4">
              <div className=" flex items-center">
                <i className="fa-solid fa-phone pr-3"></i>
              </div>
              <div>
                <a href="#" className="pb-3 text-white">
                  +91 - 7972802372 (India)
                </a>
                <br />
                <a href="#" className="pb-3 text-white">
                  +1 - 77353 69786 (USA)
                </a>
              </div>
            </div>
            <div className="w-1/5 flex">
              <div className="flex items-center">
                <i className="fa-solid fa-envelope pr-3"></i>
              </div>
              <div>
                <a href="#" className="text-white">
                  info@riseback.org
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="mb-4 text-lg">LINKS</h2>
            <span className="border-b-2 w-4 mb-4"></span>
            <a href="#" className="mb-2 text-white">
              Professional Courses
            </a>
            <a href="#" className="mb-2 text-white">
              Undergraduate Degree’s
            </a>
            <a href="#" className="mb-2 text-white">
              Master Degree’s
            </a>
          </div>
          <div className="flex flex-col">
            <h2 className="mb-4 text-lg">COMPANY</h2>
            <span className="border-b-2 w-4 mb-4"></span>
            <a href="#" className="mb-2 text-white">
              About Us
            </a>
            <a href="#" className="mb-2 text-white">
              Contact
            </a>
            <a href="#" className="mb-2 text-white">
              Career
            </a>
          </div>
          <div className="flex flex-col">
            <h2 className="mb-4 text-lg">SUPPORT</h2>
            <span className="border-b-2 w-4 mb-4"></span>
            <a href="#" className="mb-2 text-white">
              Privacy Policy
            </a>
            <a href="#" className="mb-2 text-white">
              Terms & Condition
            </a>
          </div>
          <div className="desktop:w-1/5 flex flex-col">
            <h2 className="mb-4 text-lg">Follow Us</h2>
            <span className="border-b-2 w-4 mb-4"></span>
            <div className="flex ">
              <Link href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7aCc%7C550525804797%7Cb%7Cfacebook%7C&placement=&creative=550525804797&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9062116%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAzJOtBhALEiwAtwj8tlRLfa3D8Xk-IzJia0f_qOBSkzf_lcm107Mv-YvgJLFknd5DKEA7mhoCCwQQAvD_BwE">
                <Image
                  alt="img"
                  height={20}
                  width={20}
                  src="/img2/Facebook.png"
                  className="size-9 mr-3"
                />
              </Link>
              <Link href="https://twitter.com/?lang=en">
                <Image
                  alt="img"
                  height={30}
                  width={30}
                  src="/img2/Twitter.png"
                  className="size-9 mr-3"
                />
              </Link>
              <Link href="https://in.linkedin.com/">
                <Image
                  alt="img"
                  height={30}
                  width={30}
                  src="/img2/Linkedin.png"
                  className="size-9 mr-3"
                />
              </Link>
              <Link href="https://www.instagram.com/accounts/login/?hl=en">
                <Image
                  alt="img"
                  height={30}
                  width={30}
                  src="/img2/Instagram.png"
                  className="size-9 mr-3"
                />
              </Link>
              <Link href="https://www.youtube.com/">
                <Image
                  alt="img"
                  height={30}
                  width={30}
                  src="/img2/YouTube.png"
                  className="size-9 mr-3"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-gray-300 pb-4 tablet:mx-20">
          <p>Copyright © 2022. All right reserved by Riseback Edutech.</p>
          <p>
            Design & Developed By{" "}
            <span className=" hover:underline">
              <a href="#" className="text-white">
                TMA Worldwide.
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};
