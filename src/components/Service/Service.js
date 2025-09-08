import React from "react";
import ReactPlayer from "react-player";
import "./Service.scss";

const Service = ({ serviceList }) => {
  const { title, urlLink, description } = serviceList;

  return (
    <div className=" story-reels-container">
      <div className="service-box">
        <div className="video-area">
          <ReactPlayer
            url={urlLink}
            playing={true}
            controls={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
          />
        </div>

        <div className="service-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
