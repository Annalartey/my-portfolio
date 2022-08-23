import React from "react";
import WebHeader from "./WebHeader";
import Footer from "./Footer";


let projects = [
  {
    title: "Calculator",
    info: "A simple calculator made with vanilla JS, HTML/CSS",
    link: "https://a-calculator-for-you.netlify.app/",
  },
  {
    title: "Task Tracker",
    info: "An app that helps you track your tasks for the day.",
    link: "https://trasker.netlify.app/",
  },
  {
    title: "Stopwatch",
    info: "A simple stopwatch built with vanilla JS, HTML/CSS",
    link: "https://a-stopwatch.netlify.app/"
  },
  {
    title: "One Big Family",
    info: "Just another website",
    link: "https://nifty-panini-23115f.netlify.app/"
  },
  {
    title: "Gessing Game App",
    info: "Just another website",
    link: "https://guessit-game.netlify.app"
  },
  {
    title: "Fashion",
    info: "Just another website",
    link: "https://bbklartey.netlify.app"
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
                  <div className="rounded bg-[url('../images/web1.jpg')] bg-center bg-cover shadow-lg w-72 h-72 bg-gray-300 mx-auto md:mr-auto md:ml-o md:mx-0 ">
                    <h1 className="font-bold text-xl mt-3 text-gray-900">
                      {project.title}
                    </h1>
                    <p className="font-semibold text-xl mt-3 text-gray-900">
                      {project.info}
                    </p>
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
