import React from 'react'
import ImageGallery from "react-image-gallery"
import web1 from "../images/web1.jpg";
import cal from "../projects-img/cal-light.png";
import stopwatch from "../projects-img/stopwatch.png";
import task from "../projects-img/task.png";

function Gallery() {
    const images = [
        {
            original: web1,
            thumbnail: web1,
        },
        {
            original: cal,
            thumbnail: cal,
        },
        {
            original: stopwatch,
            thumbnail: stopwatch,
        },
        {
            original: task,
            thumbnail: task,
        },
    ]
  return (
    <ImageGallery items={images}/>
  )
}

export default Gallery