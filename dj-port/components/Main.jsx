import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="flex justify-center items-center max-w-[1240px] w-full h-full mx-auto p-2">
        <div>
          <p className="tracking-widest text-[#141b24]-600 uppercase text-sm pb-5">
            Passionate about building high-quality software that makes a
            difference
          </p>
          <h1 className="py-4 text-[#141b24]-700">
            Hi, I'm <span className="text-[#164879]">Devon</span>
          </h1>
          <h1 className="py-2 text-[#141b24]-700">
            <TypeAnimation
              sequence={[
                "I'm a Software Developer",
                2000,
                "I'm Cloud Certified",
                2000,
                "I'm a Constant Learner",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-10">
            <a
              href="https://www.github.com/devjojr"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full shadow-lg shadow-gray-500 p-6 hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/jr-j-42780924a/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full shadow-lg shadow-gray-500 p-6 hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <Link href="/#contact">
              <div className="cursor-pointer rounded-full shadow-lg shadow-gray-500 p-6 hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
