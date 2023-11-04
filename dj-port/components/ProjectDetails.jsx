import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ProjectDetails = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    const isFirstProject = currentIndex === 0;
    const newIndex = isFirstProject
      ? props.projectList.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextProject = () => {
    const isLastProject = currentIndex === props.projectList.length - 1;
    const newIndex = isLastProject ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#164879] to-[#7189A1]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={props.projectList[currentIndex].bgImage}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={20} onClick={prevProject} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={20} onClick={nextProject} />
      </div>

      <div className="hidden group-hover:block absolute top-[40%] sm:top-[40%] xs:top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {props.projectList[currentIndex].title}
        </h3>
      </div>

      <div className="hidden group-hover:block absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-4">
        <Link href={props.projectList[currentIndex].projectRoute}>
          <p className="text-center p-3 rounded-lg bg-white text-[#141b24]-700 font-bold text-lg cursor-pointer">
            Details
          </p>
        </Link>
      </div>

      <div className="hidden group-hover:block absolute bottom-4 right-0 left-0 text-center">
        <div className="flex items-center justify-center gap-2">
          {props.projectList.map((_, i) => (
            <div
              key={_.id}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                currentIndex === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
