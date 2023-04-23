import React from "react";
import ProjectDetails from "./ProjectDetails";
import mernTodoImage from "../public/assets/projects/mern-todo.png";
import goGameImage from "../public/assets/projects/go-game.png";
import pythonGenImage from "../public/assets/projects/py-page-gen.png";
import goNotesImage from "../public/assets/projects/go-notes.png";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "MERN Todo",
      bgImage: mernTodoImage,
      projectRoute: "/Merntodo",
    },
    {
      id: 2,
      title: "Go Guessing Game",
      bgImage: goGameImage,
      projectRoute: "/Gogame",
    },
    {
      id: 3,
      title: "Python Webpage Generator",
      bgImage: pythonGenImage,
      projectRoute: "/Pythongen",
    },
    {
      id: 4,
      title: "Go Notes",
      bgImage: goNotesImage,
      projectRoute: "/Gonotes",
    },
  ];

  return (
    <div
      id="projects"
      className="w-full p-2 lg:h-screen md:mt-10 sm:mt-10 xs:mt-10"
    >
      <div className="mx-auto px-4 py16 max-w-[1240px]">
        <p className="text-xl tracking-widest uppercase text-[#164879]">
          Projects
        </p>
        <h2 className="py-4">Projects I've Completed</h2>
        <div className="flex flex-col justify-center group w-[80%] sm:w-[100%] xs:w-[100%] h-auto m-auto">
          <ProjectDetails projectList={projectList} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
