import React from "react";
import Image from "next/image";
import Python from "../public/assets/certs_skills/python.png";
import Html from "../public/assets/certs_skills/html.png";
import Css from "../public/assets/certs_skills/css.png";
import Javascript from "../public/assets/certs_skills/javascript.png";
import Sql from "../public/assets/certs_skills/sqlImage.png";
import Tableau from "../public/assets/certs_skills/tableau.png";
import NodeJS from "../public/assets/certs_skills/nodejs1.png";
import Express from "../public/assets/certs_skills/express.png";
import Mongo from "../public/assets/certs_skills/mongodb.png";
import NImage from "../public/assets/certs_skills/njs-image.svg";
import TypeImage from "../public/assets/certs_skills/typescript.png";
import TailImage from "../public/assets/certs_skills/tailwind.png";

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
        <div className="grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-5">
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={NodeJS}
                  width={64}
                  height={64}
                  alt="Node.js image"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Express}
                  width={64}
                  height={64}
                  alt="Express image"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={Mongo} width={64} height={64} alt="MongoDB image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={Python} width={64} height={64} alt="Python image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={Tableau}
                  width={64}
                  height={64}
                  alt="Tableau image"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tableau</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={Sql} width={64} height={64} alt="SQL image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={NImage} width={64} height={64} alt="HTML image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={TypeImage} width={64} height={64} alt="CSS image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={TailImage}
                  width={64}
                  height={64}
                  alt="JavaScript image"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={Html} width={64} height={64} alt="HTML image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={Css} width={64} height={64} alt="CSS image" />
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
                  width={64}
                  height={64}
                  alt="JavaScript image"
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
