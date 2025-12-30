import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import "./GalleryContent.css";

// ---- IMAGES ----
import drKrakamkarownImg from "../../assets/GalleryImages/drKrakamkarImg.jpeg";
import drKrakamkarownImg2 from "../../assets/GalleryImages/drKrakamkarImg.jpeg";
import drKrakamkarClinicImg from "../../assets/GalleryImages/clinicImage.jpeg";
import drKrakamkarOfficeImg from "../../assets/GalleryImages/drKarkamkarOfficeImg.jpeg";
import drKrakamkarStandingImg from "../../assets/GalleryImages/drKarkamkarStandImg.jpeg";
import drKrakamkarFriendImg from "../../assets/GalleryImages/drKarkamkarfriendImage.jpeg";
import drKrakamkarSeminarImg from "../../assets/GalleryImages/drKarkamkarSeminarImage'.jpeg";
import drKrakamkarOperationImg from "../../assets/GalleryImages/drKarkamkarOperationImage.jpeg";
import drKrakamkarAllFriendImg from "../../assets/GalleryImages/drKarkamkarallFriendsImg.jpeg";
import drKrakamkarGraduationImg from "../../assets/GalleryImages/DrKarkmkarGrduationImage.jpeg";
import drKrakamkarInterviewImg from "../../assets/GalleryImages/DrkarkamkarInterviewZ24TasImg.jpeg";
import drKrakamkarTeachingImg from "../../assets/GalleryImages/drkarkamkarTeahcingImg2.jpeg";
import drKrakamkarTeachingImg2 from "../../assets/GalleryImages/drKarkamkarTeachingImg.jpeg";
import drKrakamkarAcademyImg from "../../assets/GalleryImages/drKarkamkarAcademyImg.jpeg";
import drKrakamkarAcademyCertificateImg from "../../assets/GalleryImages/drKarkamkarCertfiacate.jpeg";


// ---- VIDEO DATA ----
const videoList = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/-P_qkzxTAME",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/krxjrMZgZbs",
  },
   {
    id: 3,
    url: "https://www.youtube.com/embed/6kVKTxypqyI",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/mvFhP0pC85E",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/hDEwNBrwESc",
  },
   {
    id: 6,
    url: "https://www.youtube.com/embed/es1TNw19y2M",
  },
  {
    id: 7,
    url: "https://www.youtube.com/embed/xlbISqBihEw",
  },
  {
    id: 8,
    url: "https://www.youtube.com/embed/CQg6ZZlruZ4",
  }
];

const clinicImages = [
  { id: 1, url: drKrakamkarownImg },
  { id: 3, url: drKrakamkarClinicImg },
  { id: 4, url: drKrakamkarOfficeImg },
  { id: 5, url: drKrakamkarStandingImg },
  { id: 6, url: drKrakamkarFriendImg },
  { id: 7, url: drKrakamkarSeminarImg },
  { id: 8, url: drKrakamkarOperationImg },
  { id: 9, url: drKrakamkarAllFriendImg },
  { id: 10, url: drKrakamkarGraduationImg },
  { id: 11, url: drKrakamkarInterviewImg },
  { id: 12, url: drKrakamkarTeachingImg },
    { id: 13, url: drKrakamkarTeachingImg2 },
  { id: 14, url: drKrakamkarAcademyImg },
  { id: 15, url: drKrakamkarAcademyCertificateImg },
];

const GalleryContent = () => {
  const location = useLocation();

  const isClinic = location.pathname === "/gallery/clinic";
  const isVideos = location.pathname === "/gallery/videos";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section className="gallery-section">
      <div className="container">

        {/* HEADER */}
        <div className="gallery-header">
          <h1>{isClinic ? "Our Clinic" : "Clinic Videos"}</h1>
          <p>
            {isClinic
              ? "Explore our modern clinic infrastructure"
              : "Watch our clinic videos & patient stories"}
          </p>
        </div>

        {/* IMAGE GRID */}
        {isClinic && (
          <div className="gallery-grid">
            {clinicImages.map((img) => (
              <div key={img.id} className="gallery-card">
                <img src={img.url} alt="clinic" />
              </div>
            ))}
          </div>
        )}

        {/* VIDEO GRID */}
        {isVideos && (
          <div className="video-grid">
            {videoList.map((video) => (
              <div key={video.id} className="video-card">
                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="220px"
                  controls
                />
                {/* <p>{video.title}</p> */}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default GalleryContent;
