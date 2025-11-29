import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ServicesPageContent.css";
import kneeContent from "./kneeContent";
import TabsPill from "./TabsPill";



const ServicePageContent = () => {
const location = useLocation();
const defaultSection = location.state?.kneeSection ?? "knee-arthroscopy-id";

const [selected, setSelected] = React.useState(defaultSection);

// 🔥 FIX: Update content when navigating inside /services
useEffect(() => {
  if (location.state?.kneeSection) {
    setSelected(location.state.kneeSection);
  }
}, [location.state]);

const data = kneeContent[selected] ?? kneeContent["knee-arthroscopy-id"];


// ... inside JSX return, replace regular mapping for the arthroscopy case:
return (
  <div className="container service-wrapper fade-in">
    <h1 className="serviceKnee-title slide-up">{data.title}</h1>

{selected === "knee-arthoscopy-id" || selected === "knee-replacement-id" ? (
  <TabsPill sections={data.sections} />
) : (
  // existing renderer
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
          {section.caption && <p className="img-caption">{section.caption}</p>}
        </div>
      );
    }
    if (section.type === "image-row") {
      return (
        <div key={index} className="service-image-row fade-in">
          {section.images.map((item, i) => (
            <div className="image-col" key={i}>
              <img src={item.img} alt="" />
              {item.caption && <p className="img-caption">{item.caption}</p>}
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
