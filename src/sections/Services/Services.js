import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Services.scss";
import ServicesData from "./ServiceData";
import Service from "../../components/Service/Service";

const Services = () => {
  // Split services into chunks of 4
  const chunkSize = 4;
  const serviceChunks = [];
  
  for (let i = 0; i < ServicesData.length; i += chunkSize) {
    serviceChunks.push(ServicesData.slice(i, i + chunkSize));
  }

  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle navigation 
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === serviceChunks.length - 1 ? 0 : prev + 1));
    if (window.innerWidth <= 1024) {
      // Scroll to the top of the cards section
      document.getElementById('service-cards-top').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? serviceChunks.length - 1 : prev - 1));
    // Only scroll on mobile devices
    if (window.innerWidth <= 1024) {
      // Scroll to the top of the cards section
      document.getElementById('service-cards-top').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="service-section"
      className="service-section pt-100 pb-70"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <SectionTitle
              title="Feel amazing about your oral health"
              subTitle="Services"
            />
          </div>
          <div className="col-lg-6 col-sm-6">
            <p className="service-title-text">
              We specialize in family dentistry, providing gentle and attentive
              care for patients of all ages, from children to seniors, equipped
              with advanced technology and techniques to deliver precise and
              minimally invasive treatments.
            </p>
          </div>
        </div>
        <div id="service-cards-top"></div>
        <div className="carousel-container">
          <div className="story-reel-div">
            {serviceChunks[currentSlide].map((singleService, index) => (
              <Service 
                serviceList={singleService} 
                key={`service-${currentSlide}-${index}`}
              />
            ))}
          </div>
          
          {serviceChunks.length > 1 && (
            <div className="carousel-controls">
              <button 
                className="carousel-control prev"
                onClick={goToPrevSlide}
              >
                <span>&#10094;</span>
              </button>
              
              <div className="carousel-indicators">
                {serviceChunks.map((_, index) => (
                  <span 
                    key={`indicator-${index}`}
                    className={`indicator ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              
              <button 
                className="carousel-control next"
                onClick={goToNextSlide}
              >
                <span>&#10095;</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;