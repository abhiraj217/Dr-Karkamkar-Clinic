import React, { useState , useEffect} from "react";
import "./Faq.css";
import faqData from "./faqData";

/* ✅ ADD THIS */
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
          className={`faq-tab ${activeTab === "shoulderArthroscopy" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("shoulderArthroscopy");
            setOpenIndex(null);
          }}
        >
          Shoulder Arthroscopy
        </button>

        <button
          className={`faq-tab ${activeTab === "shoulderReplacement" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("shoulderReplacement");
            setOpenIndex(null);
          }}
        >
          Shoulder Replacement
        </button>
      </div>

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
              <span className={`faq-arrow ${openIndex === index ? "open" : ""}`}>
                ▾
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>
                {item.a}
                {item.link && (
                    <>
                    {" "}
                    <a href={item.link} className="faq-link">
                        Read more
                    </a>
                    </>
                )}
                </p>

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
