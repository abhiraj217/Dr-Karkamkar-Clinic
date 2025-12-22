import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ServicesPageContent.css";

import kneeContent from "./kneeContent";
import hipContent from "./hipContent";
import shoulderContent from "./shoulderContent";
import traumaContent from "./traumaContent";
import sportsContent from "./sportsContent";
import TabsPill from "./TabsPill";

const ServicePageContent = () => {
  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
      
  const location = useLocation();

  /* ---------------------------------------------
        DEFAULT SECTION (ON DIRECT NAVIGATION)
  ----------------------------------------------*/
  const defaultSection =
    location.state?.kneeSection ||
    location.state?.hipSection ||
    location.state?.shoulderSection ||
    location.state?.traumaSection ||
    location.state?.sportsSection ||   // ✅ SPORTS SUPPORT
    "knee-arthoscopy-id";

  const [selected, setSelected] = useState(defaultSection);

  /* ---------------------------------------------
        UPDATE SELECTED WHEN NAVIGATING
  ----------------------------------------------*/
  useEffect(() => {
    if (location.state?.kneeSection) {
      setSelected(location.state.kneeSection);
    }
    if (location.state?.hipSection) {
      setSelected(location.state.hipSection);
    }
    if (location.state?.shoulderSection) {
      setSelected(location.state.shoulderSection);
    }
    if (location.state?.traumaSection) {
      setSelected(location.state.traumaSection);
    }
    if (location.state?.sportsSection) {   // ✅ Missing previously
      setSelected(location.state.sportsSection);
    }
  }, [location.state]);

  /* ---------------------------------------------
        LOAD THE CORRECT CONTENT OBJECT
  ----------------------------------------------*/
  const data =
    kneeContent[selected] ||
    hipContent[selected] ||
    shoulderContent[selected] ||
    traumaContent[selected] ||
    sportsContent[selected] ||   // ✅ SPORTS CONTENT
    kneeContent["knee-arthoscopy-id"]; // fallback

  /* ---------------------------------------------
        SECTIONS THAT NEED TAB VIEW
  ----------------------------------------------*/
  const tabSections = [
    "knee-arthoscopy-id",
    "knee-replacement-id",
    "hip-replacement-id",
    "shoulder-arthroscopy-id",
    "shoulder-replacement-id"
  ];

  /* ---------------------------------------------
                      RENDER
  ----------------------------------------------*/
  return (
    <div className="container service-wrapper fade-in">
      <h1 className="serviceKnee-title slide-up">{data.title}</h1>

      {/* If section has tabs */}
      {tabSections.includes(selected) ? (
        <TabsPill sections={data.sections} />
      ) : (
        data.sections?.map((section, index) => {
          
          /* ---- TEXT ---- */
          if (section.type === "text") {
            return (
              <div
                key={index}
                className="serviceknee-text fade-in"
                dangerouslySetInnerHTML={{ __html: section.content }}
              ></div>
            );
          }

          /* ---- SINGLE IMAGE ---- */
          if (section.type === "image") {
            return (
              <div
                key={index}
                className={`service-image-block fade-in ${section.className || ""}`}
              >
                <img
                  src={section.img}
                  alt=""
                  className={section.className || ""}
                />
                {section.caption && (
                  <p className="img-caption">{section.caption}</p>
                )}
              </div>
            );
          }

          /* ---- MULTIPLE IMAGES ---- */
          if (section.type === "image-row") {
            return (
              <div key={index} className="service-image-row fade-in">
                {section.images.map((item, i) => (
                  <div className="image-col" key={i}>
                    <img src={item.img} alt="" />
                    {item.caption && (
                      <p className="img-caption">{item.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            );
          }

          return null;
        })
      )}
    </div>
  );
};

export default ServicePageContent;
