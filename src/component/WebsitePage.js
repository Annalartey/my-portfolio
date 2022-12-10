import React from "react";
import WebHeader from "./WebHeader";
import Footer from "./Footer";
import cal from "../projects-img/cal-light.png";
import stopwatch from "../projects-img/stopwatch.png";
import etrc from "../projects-img/etrc.png";
import bb from "../projects-img/bb.png";
import task from "../projects-img/task.png";


let projects = [
  {
    title: "Calculator",
    info: "A simple calculator made with vanilla JS, HTML/CSS",
    link: "https://a-calculator-for-you.netlify.app/",
    image: cal,
  },
  {
    title: "Task Tracker",
    info: "An app that helps you track your tasks for the day.",
    link: "https://trasker.netlify.app/",
    image: task,
  },
  {
    title: "Stopwatch",
    info: "A simple stopwatch built with vanilla JS, HTML/CSS",
    link: "https://a-stopwatch.netlify.app/",
    image: stopwatch,
  },
  {
    title: "One Big Family",
    info: "Just another website",
    link: "https://nifty-panini-23115f.netlify.app/",
    image: etrc,
  },
  {
    title: "Gessing Game App",
    info: "Just another website",
    link: "https://guessit-game.netlify.app",
    image: bb,
  },
  {
    title: "Fashion",
    info: "Just another website",
    link: "https://bbklartey.netlify.app",
    image: bb,
  }
];

function WebsitePage() {
  return (
    <div className="">
      <WebHeader />
      <div className="max-w-5xl mx-auto">
        <div className="p-10">
          <h1 className="my-10 font-extrabold text-2xl text-center md:text-left">
           Coding Projects
          </h1>
          <div className="flex flex-col md:flex-row flex-wrap">
          {projects.map((project, projectIndex) => {
            return (
              <a
                key={projectIndex}
                className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left py-6"
                href={project.link || ""}
                target="__blank"
                rel="noreferrer"
              >
                <div className="rounded shadow-lg w-80 pb-8 bg-white mx-auto md:mr-auto md:ml-o md:mx-0 ">
                <div
                  style={{ backgroundImage: `url(${project.image})` }}
                  className="bg-center bg-cover shadow-sm w-80 h-72 mx-auto md:mr-auto md:ml-o md:mx-0 "
                ></div>

                <div className="text-center">
                  <h1 className="font-bold text-xl mt-4 mb-4 text-gray-900">
                    {project.title}
                  </h1>
                  <p className="text-xl text-gray-900">
                    {project.info}
                  </p>
                </div>
                </div>
              </a>
            );
          })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WebsitePage;
