import React from "react";
import Image from "next/image";
import GlassesImage from "../public/assets/glasses.jpg";

const About = () => {
  return (
    <div id="about" className="py-16 p-2 my-16 w-full">
      <div className="md:grid grid-cols-3 gap-8 mx-auto max-w-[1240px] justify-center mb-16">
        <div className="col-span-3 md:col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#164879]">
            About
          </p>
          <h2 className="py-4">Get To Know Me</h2>
          <p className="py-2 text-[#141b24]-600">
            Hello there! I'm Devon, a versatile problem solver and creative
            thinker driven by the power of technology and data to craft
            innovative solutions. My journey, which includes a range of roles
            from administration to mentoring, has equipped me with a unique
            skill set that encompasses effective communication, collaborative
            prowess, and innate creativity.
          </p>
          <p className="py-2 text-[#141b24]-600">
            Before venturing into the tech world, I honed my skills in
            problem-solving and mentorship. My toolkit now proudly includes
            certifications in Google Data Analytics and Google Business
            Intelligence, along with distinguished credentials from Azure, AWS,
            and freeCodeCamp, complemented by intensive training in Node.js and
            Express. This rich tapestry of experiences, coupled with a solid
            administrative foundation, ignites my passion to infuse the realm of
            technology, data analytics, and software engineering with fresh
            perspectives and resourceful solutions.
          </p>
          <p className="py-2 text-[#141b24]-600">
            My diverse background equips me to thrive in dynamic organizational
            settings. I thrive on tackling challenges with an open mind,
            nurturing innovative thinking, and delivering tangible results.
            Moreover, my experience in administration has instilled in me the
            values of teamwork, effective communication, and efficient task
            management. I am dedicated to harnessing my growing skills in data,
            cloud, and software engineering to drive meaningful outcomes and
            contribute positively to the growth and success of any organization
            I'm part of.
          </p>
        </div>
        <div className="hidden md:block items-center justify-center w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl p-4 hover:scale-110 ease-in duration-300">
          <Image src={GlassesImage} className="rounded-xl" alt="glasses" />
        </div>
      </div>
    </div>
  );
};

export default About;
