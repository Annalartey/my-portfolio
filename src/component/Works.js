import React, { useState } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
// import web1 from "../images/web1.jpg";
import cal from "../projects-img/cal-light.png";
import stopwatch from "../projects-img/stopwatch.png";
import task from "../projects-img/task.png";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
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
  const handleClick = (way) => {
    console.log("clicked");
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="left-container">Hello</div>
              </div>
              <div className="right">
                <div className="right-container">
                  <img src={d.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow-left" onClick={() => handleClick("left")}>
        left{" "}
      </button>
      <button className="arrow-right" onClick={() => handleClick("right")}>
        right{" "}
      </button>
    </div>
  );
}
