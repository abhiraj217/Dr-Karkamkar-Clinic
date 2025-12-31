import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ServicesPageContent.css";

import kneeContent from "./kneeContent";
import hipContent from "./hipContent";
import shoulderContent from "./shoulderContent";
import traumaContent from "./traumaContent";
import sportsContent from "./sportsContent";
import TabsPill from "./TabsPill";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { whatsAppBotListener } from "../../utils/Utils";
import { PHONE_NUMBER } from "../../utils/Constant";
import clinicAvatar from "../../assets/navbar/karkamkar-clinic-logo.png";

const ServicePageContent = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Map slugs to content IDs
  const slugToId = {
    // Knee
    "knee-normal": "knee-normal-id",
    "knee-pain": "knee-pain-id",
    "knee-arthroscopy": "knee-arthoscopy-id",
    "knee-replacement": "knee-replacement-id",

    // Shoulder
    "shoulder-normal": "shoulder-normal-id",
    "shoulder-pain": "shoulder-pain-id",
    "shoulder-arthroscopy": "shoulder-arthroscopy-id",
    "shoulder-replacement": "shoulder-replacement-id",

    // Hip
    "hip-normal": "hip-normal-id",
    "hip-pain": "hip-pain-id",
    "hip-replacement": "hip-replacement-id",

    // Others
    "sports": "sports-id",
    "trauma": "trauma-id"
  };

  // Redirect if invalid slug
  useEffect(() => {
    if (!slug || !slugToId[slug]) {
      navigate("/services/knee-arthroscopy", { replace: true });
    }
  }, [slug, navigate]);

  // Get content ID from slug
  const contentId = slugToId[slug];

  // If no valid contentId, return null (will redirect via useEffect)
  if (!contentId) return null;

  // Load the correct content object
  const data =
    kneeContent[contentId] ||
    hipContent[contentId] ||
    shoulderContent[contentId] ||
    traumaContent[contentId] ||
    sportsContent[contentId];

  // If no data found, return error message
  if (!data) {
    return (
      <div className="container service-wrapper fade-in">
        <h1>Content not found</h1>
        <p>The requested service page could not be loaded.</p>
      </div>
    );
  }

  // Sections that need tab view
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
    <div className="bgColor">
    <div className="container service-wrapper fade-in">
      <h1 className="serviceKnee-title slide-up">{data.title}</h1>

      {/* If section has tabs */}
      {tabSections.includes(contentId) ? (
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
                  alt={section.caption || ""}
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
                    <img src={item.img} alt={item.caption || ""} />
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
      {/* WhatsApp bot */}
      <FloatingWhatsApp
        avatar={clinicAvatar}
        notification={false}
        accountName="Dr. Karkamkar"
        phoneNumber={PHONE_NUMBER}
        onSubmit={(e) => {
          whatsAppBotListener(e.target[0].value);
        }}
      />
    </div>
  );
};

export default ServicePageContent;