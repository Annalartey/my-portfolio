import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import web1 from "../images/web1.jpg";

function Designs() {
  let projects = [
    {
      title: "Calculator",
      info: "A simple calculator made with vanilla JS, HTML/CSS",
      link: "https://a-calculator-for-you.netlify.app/",
      image: web1,
    },
    {
      title: "Task Tracker",
      info: "An app that helps you track your tasks for the day.",
      link: "https://trasker.netlify.app/",
      image: web1,
    },
    {
      title: "Stopwatch",
      info: "A simple stopwatch built with vanilla JS, HTML/CSS",
      link: "https://a-stopwatch.netlify.app/",
      image: web1,
    },
  ];

  let graphics = [
    {
      title: "Calculator",
      info: "A simple calculator made with vanilla JS, HTML/CSS",
      link: "https://a-calculator-for-you.netlify.app/",
      image: web1,
    },
    {
      title: "Task Tracker",
      info: "An app that helps you track your tasks for the day.",
      link: "https://trasker.netlify.app/",
      image: web1,
    },
    {
      title: "Stopwatch",
      info: "A simple stopwatch built with vanilla JS, HTML/CSS",
      link: "https://a-stopwatch.netlify.app/",
      image: web1,
    },
  ];

  let lyricsVideos = [
    {
      title: "Calculator",
      info: "A simple calculator made with vanilla JS, HTML/CSS",
      link: "https://a-calculator-for-you.netlify.app/",
      image: web1,
    },
    {
      title: "Task Tracker",
      info: "An app that helps you track your tasks for the day.",
      link: "https://trasker.netlify.app/",
      image: web1,
    },
    {
      title: "Stopwatch",
      info: "A simple stopwatch built with vanilla JS, HTML/CSS",
      link: "https://a-stopwatch.netlify.app/",
      image: web1,
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div id="designs" data-aos="fade-up" className="app-design py-4">
        <div className="text-4xl font-bold lg:mx-40 mt-14">
          <h1 className="text-center lg:text-left lg:text-7xl font-semibold my-8 ">
            Coding Projects
          </h1>
          <div className="w-40 lg:w-20 h-1 bg-red-600 mb-2 rounded-2xl "></div>
          <div className="w-40 lg:w-20  h-1 bg-red-600 ml-14 mb-10 rounded-2xl"></div>
        </div>

        <div className="lg:mx-40 flex flex-col md:flex-row flex-wrap">
          {projects.map((project, projectIndex) => {
            return (
              <a
                key={projectIndex}
                className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left py-6"
                href={project.link || ""}
                target="__blank"
                rel="noreferrer"
              >
                <div className="rounded bg-center bg-cover shadow-lg w-72 h-72 bg-gray-300 mx-auto md:mr-auto md:ml-o md:mx-0 ">
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

        <Link to="/design-website">
          <button>View more</button>
        </Link>
      </div>

      <div id="designs" data-aos="fade-up" className="app-design py-4">
        <div className="text-4xl font-bold lg:mx-40 mt-14">
          <h1 className="text-center lg:text-left lg:text-7xl font-semibold my-8 ">
            Graphic Designs
          </h1>
          <div className="w-40 lg:w-20 h-1 bg-red-600 mb-2 rounded-2xl "></div>
          <div className="w-40 lg:w-20  h-1 bg-red-600 ml-14 mb-10 rounded-2xl"></div>
        </div>

        <div className="lg:mx-40 flex flex-col md:flex-row flex-wrap">
          {graphics.map((graphic, graphicIndex) => {
            return (
              <a
                key={graphicIndex}
                className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left py-6"
                href={graphic.link || ""}
                target="__blank"
                rel="noreferrer"
              >
                <div className="rounded bg-center bg-cover shadow-lg w-72 h-72 bg-gray-300 mx-auto md:mr-auto md:ml-o md:mx-0 ">
                  <h1 className="font-bold text-xl mt-3 text-gray-900">
                    {graphic.title}
                  </h1>
                  <p className="font-semibold text-xl mt-3 text-gray-900">
                    {graphic.info}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <Link to="/design-graphics">
          <button>View more</button>
        </Link>
      </div>

      <div id="designs" data-aos="fade-up" className="app-design py-4">
        <div className="text-4xl font-bold lg:mx-40 mt-14">
          <h1 className="text-center lg:text-left lg:text-7xl font-semibold my-8 ">
            Lyrics Videos
          </h1>
          <div className="w-40 lg:w-20 h-1 bg-red-600 mb-2 rounded-2xl "></div>
          <div className="w-40 lg:w-20  h-1 bg-red-600 ml-14 mb-10 rounded-2xl"></div>
        </div>

        <div className="lg:mx-40 flex flex-col md:flex-row flex-wrap">
          {lyricsVideos.map((lyricsVideo, lyricsVideoIndex) => {
            return (
              <a
                key={lyricsVideoIndex}
                className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left py-6"
                href={lyricsVideo.link || ""}
                target="__blank"
                rel="noreferrer"
              >
                <div className="rounded bg-center bg-cover shadow-lg w-72 h-72 bg-gray-300 mx-auto md:mr-auto md:ml-o md:mx-0 ">
                  <h1 className="font-bold text-xl mt-3 text-gray-900">
                    {lyricsVideo.title}
                  </h1>
                  <p className="font-semibold text-xl mt-3 text-gray-900">
                    {lyricsVideo.info}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <Link to="/design-lyrics">
          <button>View more</button>
        </Link>
      </div>

    </div>
  );
}

export default Designs;
