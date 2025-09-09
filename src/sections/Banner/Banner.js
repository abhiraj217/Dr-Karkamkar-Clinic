import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css'

import clinicIcon from '../../assets/ivory/ivory-img.jpg';
import  cliniImage2 from '../../assets/banner/clinicImage.jpg';
import hipImage from '../../assets/banner/hipJoinImage.jpg';
import legImage from '../../assets/banner/legjointImage.jpg';
import traumaImage from '../../assets/banner/jointxrayImage.jpg';
import skullImage from '../../assets/banner/skulljointImage.jpg';
import football from '../../assets/banner/footaballlimage.jpg';

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
            <img className="d-block w-100 carusalImg" src={hipImage} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carusalImg" src={legImage} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carusalImg" src={skullImage} alt="Fifth slide" />
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
        avatar={clinicIcon}
        notification={false}
        accountName="Dr. Simran Singh"
        phoneNumber={PHONE_NUMBER}
        onSubmit={(e) => {
          whatsAppBotListener(e.target[0].value);
        }}
      />
    </section>
  );
};

export default Banner;
