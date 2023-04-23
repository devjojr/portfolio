import React from "react";
import Image from "next/image";
import GlassesImage from "../public/assets/glasses.jpg";

const About = () => {
  return (
    <div id="about" className="flex items-center py-16 p-2 w-full md:h-screen">
      <div className="md:grid grid-cols-3 gap-8 m-auto max-w-[1240px]">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#164879]">
            About
          </p>
          <h2 className="py-4">Get To Know Me</h2>
          <p className="py-2 text-[#141b24]-600">
            Hi, I'm Devon, a junior software developer with a passion for
            creating solutions that make a difference. While I didn't take a
            traditional path to get here, my unique background has given me a
            fresh perspective and the ability to think outside the box.
          </p>
          <p className="py-2 text-[#141b24]-600">
            Before discovering my love for coding, I worked in administration
            and volunteered as a tutor, where I learned the importance of
            communication, collaboration, problem-solving, and mentorship. These
            skills have proved invaluable in my transition to software
            development and have allowed me to approach projects with a holistic
            and creative mindset.
          </p>
          <p className="py-2 text-[#141b24]-600">
            Although I'm new to the industry, I'm eager to learn and grow as a
            developer. My experience includes online coursework and projects to
            develop my skills, as well as certifications in Azure, AWS, and
            FreeCodeCamp. I'm excited to take on new challenges and expand my
            knowledge.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl p-4 hover:scale-110 ease-in duration-300">
          <Image src={GlassesImage} className="rounded-xl" alt="glasses" />
        </div>
      </div>
    </div>
  );
};

export default About;
