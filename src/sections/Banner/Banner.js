import React from "react";
import "./Banner.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { whatsAppBotListener } from "../../utils/Utils";
import { PHONE_NUMBER } from "../../utils/Constant";
import clinicAvatar from "../../assets/navbar/karkamkar-clinic-logo.png";

const Banner = () => {
  return (
    <section
      id="banner-section"
      className="section-bg home-bg banner-section"
    >
      <div className="banner-overlay">
        {/* Optional content can go here later */}
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
    </section>
  );
};

export default Banner;
