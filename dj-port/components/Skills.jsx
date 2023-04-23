import React from "react";
import Image from "next/image";
import Python from "../public/assets/certs_skills/python.png";
import Go from "../public/assets/certs_skills/go.png";
import Typescript from "../public/assets/certs_skills/typescript.png";
import Html from "../public/assets/certs_skills/html.png";
import Css from "../public/assets/certs_skills/css.png";
import Javascript from "../public/assets/certs_skills/javascript.png";

const Skills = () => {
  return (
    <div
      id="skills"
      className="p-2 w-full lg:h-screen md:mt-10 sm:mt-10 xs:mt-10"
    >
      <div className="flex flex-col justify-center max-w-[1240px] mx-auto h-full">
        <p className="tracking-widest uppercase text-xl text-[#164879]">
          Skills
        </p>
        <h2 className="py-4">What I've Learned</h2>
        <div className="grid grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-8 mt-5">
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Python}
                  width="64px"
                  height="64px"
                  alt="python image"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={Go} width="64px" height="64px" alt="go image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Go</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Typescript}
                  width="64px"
                  height="64px"
                  alt="typescript image"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="html image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="css image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Javascript}
                  width="64px"
                  height="64px"
                  alt="javascript image"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
