import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div className="container">
      <h1>Video Beluga</h1>
      <iframe
        src="https://www.youtube.com/embed/mhzXp2W3HrU?si=z6CZHMRf7wbZHchD"
        width="600"
        height="400"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>Este es mi segundo componente</h3>
    </div>
  );
};

export default Video;
