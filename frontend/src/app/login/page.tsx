import Image from "next/image";
import React from "react";
import LoginForm from "./components/loginForm";

function loginPage() {
  return (
    <div className="desktop:flex items-center bg-white overflow-hidden">
      <div className="desktop:w-1/2 desktop:h-svh h-[450px]">
        <Image
          src={"/img2/rut-miit-oTglG1D4hRA-unsplash.jpg"}
          width={1000}
          height={1000}
          alt="image"
          className="w-[100%] desktop:h-full h-[450px] object-fill relative"
        />
        <div className=" absolute desktop:top-[80%] top-[35%] desktop:translate-x-16 tablet:translate-x-20 laptop:translate-x-20 backdrop-blur-lg desktop:px-16 tablet:px-16  laptop:px-16 desktop:py-6 px-8 rounded-2xl">
          <div>
            <p className="text-white  text-center mx-auto">
              Gather confidential and anonymous feedback at the click of a
              button
            </p>
          </div>
        </div>
      </div>
      <div className="desktop:w-1/2 flex justify-center">
        <div className="w-1/2">
          <div className=" flex flex-col items-center justify-center">
            <div className="border-b border-yellow-500 w-full flex justify-center">
              <Image
                src={"/img2/Riseback logo.png"}
                width={300}
                height={150}
                alt="RiseBack Logo"
              ></Image>
            </div>
            <h2 className="font-semibold text-xl leading-7 uppercase">
              Admin Login Page
            </h2>
          </div>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default loginPage;
