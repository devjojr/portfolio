import React from "react";
import ProjectDetails from "./ProjectDetails";
import goGameImage from "../public/assets/projects/go-game.png";
import pythonGenImage from "../public/assets/projects/py-page-gen.png";
import goNotesImage from "../public/assets/projects/go-notes.png";
import cycCaseStudy from "../public/assets/projects/case-study-cyc1.png";
import repeatCalls from "../public/assets/projects/business_intelligence/bg_repeat_calls.png";
import mernNoteImage from "../public/assets/projects/mern-note.png";
import triviaAppImage from "../public/assets/projects/trivia-app.png";
import weatherImage from "../public/assets/projects/weather-app.png";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "MERN Notes",
      bgImage: mernNoteImage,
      projectRoute: "/MernNotes",
    },
    {
      id: 2,
      title: "Trivia App",
      bgImage: triviaAppImage,
      projectRoute: "/TriviaApp",
    },
    {
      id: 3,
      title: "Weather App",
      bgImage: weatherImage,
      projectRoute: "/WeatherApp",
    },
    {
      id: 4,
      title: "Customer Service Dashboard",
      bgImage: repeatCalls,
      projectRoute: "/CustomerServiceDashboard",
    },
    {
      id: 5,
      title: "Cyclistic Case Study",
      bgImage: cycCaseStudy,
      projectRoute: "/CaseStudyCyclistic",
    },
    {
      id: 6,
      title: "Go Guessing Game",
      bgImage: goGameImage,
      projectRoute: "/Gogame",
    },
    {
      id: 7,
      title: "Python Webpage Generator",
      bgImage: pythonGenImage,
      projectRoute: "/Pythongen",
    },
    {
      id: 8,
      title: "Go Notes",
      bgImage: goNotesImage,
      projectRoute: "/Gonotes",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <br />
      <br />
      <div className="m-auto px-4 py-16 max-w-[1240px]">
        <p className="text-xl tracking-widest uppercase text-[#164879]">
          Projects
        </p>
        <h2 className="py-4">Projects I've Completed</h2>
        <br />
        <div className="flex flex-col justify-center w-full sm:w-[80%] xs:w-[100%] m-auto">
          <ProjectDetails projectList={projectList} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
