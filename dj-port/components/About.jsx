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
            Greetings! I'm Devon, an emerging data analyst ignited by my fervor
            for harnessing the power of data to drive insightful solutions. My
            unconventional trajectory, spanning administration and tutoring
            roles, has endowed me with a versatile skill set that includes
            effective communication, seamless collaboration, and an innate
            creativity.
          </p>
          <p className="py-2 text-[#141b24]-600">
            Before immersing myself in the realm of analytics, I fine-tuned my
            abilities in problem-solving and mentorship. My toolkit is
            well-furnished with accolades, boasting the Google Data Analytics
            certification, as well as distinguished credentials from Azure, AWS,
            and freeCodeCamp. This dynamic blend of experiences, combined with a
            robust administrative foundation, ignites my enthusiasm to infuse
            the realm of analytics with innovative perspectives and resourceful
            solutions.
          </p>
          <p className="py-2 text-[#141b24]-600">
            My diverse background equips me to thrive in diverse organizational
            settings. I bring the ability to approach challenges with an open
            mind and a fresh perspective, which I believe is vital for
            problem-solving and innovative thinking. Moreover, my experience in
            administration has instilled in me the significance of teamwork,
            effective communication, and the ability to manage complex tasks
            efficiently. I am dedicated to applying my growing analytical
            prowess to drive impactful results and contribute positively to the
            growth and success of any organization I am a part of.
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
