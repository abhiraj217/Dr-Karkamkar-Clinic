import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ServicesPageContent.css";

import kneeContent from "./kneeContent";
import hipContent from "./hipContent";
import TabsPill from "./TabsPill";

const ServicePageContent = () => {
  const location = useLocation();

  // Detect initial section from navigation
  const defaultSection =
    location.state?.kneeSection ||
    location.state?.hipSection ||
    "knee-arthoscopy-id";

  const [selected, setSelected] = useState(defaultSection);

  /* ------------------------------------------------------------------
     UPDATE SELECTED SECTION WHEN NAVIGATION OCCURS
  ------------------------------------------------------------------ */
  useEffect(() => {
    if (location.state?.kneeSection) {
      setSelected(location.state.kneeSection);
    }
    if (location.state?.hipSection) {
      setSelected(location.state.hipSection);
    }
  }, [location.state]);

  /* ------------------------------------------------------------------
     LOAD DATA FOR KNEE OR HIP
  ------------------------------------------------------------------ */
  const data =
    kneeContent[selected] ||
    hipContent[selected] ||
    kneeContent["knee-arthoscopy-id"];

  /* ------------------------------------------------------------------
     WHICH SECTIONS SHOULD USE TabsPill?
     Adding hip-replacement-id also here
  ------------------------------------------------------------------ */
  const tabSections = [
    "knee-arthoscopy-id",
    "knee-replacement-id",
    "hip-replacement-id"
  ];

  /* ------------------------------------------------------------------
     RENDER PAGE
  ------------------------------------------------------------------ */
  return (
    <div className="container service-wrapper fade-in">
      <h1 className="serviceKnee-title slide-up">{data.title}</h1>

      {tabSections.includes(selected) ? (
        <TabsPill sections={data.sections} />
      ) : (
        data.sections?.map((section, index) => {
          if (section.type === "text") {
            return (
              <div
                key={index}
                className="serviceknee-text fade-in"
                dangerouslySetInnerHTML={{ __html: section.content }}
              ></div>
            );
          }

          if (section.type === "image") {
            return (
              <div key={index} className="service-image-block fade-in">
                <img src={section.img} alt="" />
                {section.caption && (
                  <p className="img-caption">{section.caption}</p>
                )}
              </div>
            );
          }

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
