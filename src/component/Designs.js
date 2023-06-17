import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import web1 from "../images/web1.jpg";
import cal from "../projects-img/cal-light.png";
import stopwatch from "../projects-img/stopwatch.png";
import task from "../projects-img/task.png";
import med1 from "../images/med1.PNG";
import med2 from "../images/med2.PNG";
import img1 from "./flyers/img1-min.jpg"
import img3 from "./flyers/img3-min.jpg"
import img6 from "./flyers/img6-min.jpg"
import ViewButton from "./ViewButton";
import ReactPlayer from 'react-player/youtube'

function Designs() {
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
  ];

  let lyricsVideos = [
    {
      title: "Knowing you",
      artist: "GUC",
      url: "https://www.youtube.com/watch?v=HMqUCNixWtw",
      image: web1,
    },
    {
      title: "Na you dey reign",
      artist: "Mercy Chinwo",
      url: "https://www.youtube.com/watch?v=r8JE-mFnnmI",
      image: web1,
    },
    {
      title: "Journey",
      artist: "D'bloved",
      url: "https://www.youtube.com/watch?v=_vLLNyYk4XU",
      image: web1,
    },
  ];

  let articles = [
    {
      title: "How to create a simple calculator with react on replit",
      info: "An article for beginners",
      link: "https://a-calculator-for-you.netlify.app/",
      image: med1,
    },
    {
      title: "How to display user's name using react useContext hook",
      info: "An article for beginners",
      link: "https://trasker.netlify.app/",
      image: med2,
    },
    {
      title: "How to implement a counter using react useState hook",
      info: "An article for beginners",
      link: "https://trasker.netlify.app/",
      image: med2,
    },
  ]
  let graphics = [
    {
      link: "https://a-calculator-for-you.netlify.app/",
      image: img1,
    },
    {
      link: "https://trasker.netlify.app/",
      image: img3,
    },
    {
      link: "https://trasker.netlify.app/",
      image: img6,
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div id="designs" data-aos="fade-right" className="app-design py-4">
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
                data-aos="fade-right"
                data-aos-delay="100"
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

        <Link to="/design-website">
          <ViewButton />
        </Link>
      </div>

      <div id="designs" data-aos="fade-left" className="app-design py-4">
        <div className="text-4xl font-bold lg:mx-40 mt-14">
          <h1 className="text-center lg:text-left lg:text-7xl font-semibold my-8 ">
            Technical Articles
          </h1>
          <div className="w-40 lg:w-20 h-1 bg-red-600 mb-2 rounded-2xl "></div>
          <div className="w-40 lg:w-20  h-1 bg-red-600 ml-14 mb-10 rounded-2xl"></div>
        </div>

        <div className="lg:mx-40 flex flex-col md:flex-row flex-wrap">
          {articles.map((article, articleIndex) => {
            return (
              <a
                key={articleIndex}
                className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left py-6"
                href={article.link || ""}
                target="__blank"
                rel="noreferrer"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                 <div className="rounded shadow-lg w-80 pb-8 bg-white mx-auto md:mr-auto md:ml-o md:mx-0 ">
                <div
                  style={{ backgroundImage: `url(${article.image})` }}
                  className="bg-center bg-cover shadow-sm w-80 h-72 mx-auto md:mr-auto md:ml-o md:mx-0 "
                >
                </div>
                </div>
              </a>
            );
          })}
        </div>

        <a href="/" className="view-btn">
          Veiw More
        </a>
      </div>

      <div id="designs" data-aos="fade-right" className="app-design py-4">
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
                className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left py-6"
                href={graphic.link || ""}
                target="__blank"
                rel="noreferrer"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div
                  style={{ backgroundImage: `url(${graphic.image})` }}
                  className="rounded bg-center bg-cover shadow-lg w-92 h-72 bg-gray-300 mx-auto md:mr-auto md:ml-o md:mx-0 "
                >
                </div>
              </a>
            );
          })}
        </div>

        <Link to="/design-graphics">
          <ViewButton />
        </Link>
      </div>

      <div id="designs" data-aos="fade-left" className="app-design py-4">
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
                className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left px-4 py-6 rounded-lg"
                href={lyricsVideo.link || ""}
                target="__blank"
                rel="noreferrer"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                    <ReactPlayer
                        width="100%"
                            url={lyricsVideo.url}
                        />
              </a>
            );
          })}
        </div>

        <Link to="/design-lyrics">
          <ViewButton />
        </Link>
      </div>
    </div>
  );
}

export default Designs;
