import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css'

import  cliniImage2 from '../../assets/banner/clinicImage.jpg';
import hipImage from '../../assets/banner/newhip.jpg';
import legImage from '../../assets/banner/newkneew.jpg';
import traumaImage from '../../assets/banner/jointxrayImage.jpg';
import skullImage from '../../assets/banner/newshoulder.jpg';
import football from '../../assets/banner/footaballlimage.jpg';
import clinicAvatar from '../../assets/navbar/karkamkar-clinic-logo.png';

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { whatsAppBotListener } from "../../utils/Utils";
import { PHONE_NUMBER } from "../../utils/Constant";

const Banner = () => {
  return (
    <section id="banner-section" className="section-bg home-bg banner-section">
      <div className="carusalContainer homePageCarousalDiv">
        <Carousel interval={2500} controls={true} indicators={true} fade={false}>
          <Carousel.Item>
            <img className="d-block w-100 carusalImg" src={cliniImage2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carusalImg" src={skullImage} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carusalImg" src={legImage} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carusalImg" src={hipImage} alt="Fifth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carusalImg" src={traumaImage} alt="Sixth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carusalImg" src={football} alt="Seventh slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* WhatsApp bot section */}
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
