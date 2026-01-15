import React, { useState, useEffect } from "react";
import "./Faq.css";
import faqData from "./faqData";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { whatsAppBotListener } from "../../utils/Utils";
import { PHONE_NUMBER } from "../../utils/Constant";
import clinicAvatar from "../../assets/navbar/karkamkar-clinic-logo.png";

/* Convert question text to sentence case */
const toSentenceCase = (text = "") => {
  if (!text) return "";
  const lower = text.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("kneeReplacement");
  const [openIndex, setOpenIndex] = useState(null);

  const activeFaqs = faqData[activeTab] || [];

  return (
    <div className="faq-wrapper container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      {/* Tabs */}
      <div className="faq-tabs">
        <button
          className={`faq-tab ${activeTab === "kneeReplacement" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("kneeReplacement");
            setOpenIndex(null);
          }}
        >
          Knee Replacement
        </button>

        <button
          className={`faq-tab ${activeTab === "hipReplacement" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("hipReplacement");
            setOpenIndex(null);
          }}
        >
          Hip Replacement
        </button>

        <button
          className={`faq-tab ${
            activeTab === "shoulderArthroscopy" ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab("shoulderArthroscopy");
            setOpenIndex(null);
          }}
        >
          Shoulder Arthroscopy
        </button>

        <button
          className={`faq-tab ${
            activeTab === "shoulderReplacement" ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab("shoulderReplacement");
            setOpenIndex(null);
          }}
        >
          Shoulder Replacement
        </button>

        <button
          className={`faq-tab ${
            activeTab === "kneeArthroscopy" ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab("kneeArthroscopy");
            setOpenIndex(null);
          }}
        >
          Knee Arthroscopy
        </button>

        <button
          className={`faq-tab ${
            activeTab === "sportsMedicine" ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab("sportsMedicine");
            setOpenIndex(null);
          }}
        >
          Sports Medicine
        </button>

        <button
          className={`faq-tab ${activeTab === "trauma" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("trauma");
            setOpenIndex(null);
          }}
        >
          Trauma
        </button>
      </div>

      {/* FAQ List */}
      <div className="faq-list">
        {activeFaqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {toSentenceCase(item.q)}
              <span
                className={`faq-arrow ${
                  openIndex === index ? "open" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                {/* Render HTML safely */}
                <div
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              </div>
            )}
          </div>
        ))}
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

export default Faq;
