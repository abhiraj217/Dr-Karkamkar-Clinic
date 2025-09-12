import React from "react";
import "./AboutUs.css";
import doctorImg from "../../assets/banner/doctorImage.jpg"; // replace with your actual image

const AboutUs = () => {
  return (
    <section id="about-us" className="aboutUsSection container aos-init" data-aos="fade-up" data-aos-duration="2000">
      <div className="row">
        
        {/* Left Content */}
        <div className="col-lg-6 col-md-12 aboutUsText">
          <h5 className="section-subtitle">ABOUT US</h5>
          <h2 className="section-title">
            Feel amazing about your oral health
          </h2>

          <p>
            Dr. Sachin Karkamkar, a highly respected and accomplished Senior
            Consultant Orthopedic Surgeon in Hadapsar Pune. With a remarkable
            career dedicated to the field of orthopedics, Dr. Karkamkar is
            recognized for his expertise in shoulder, knee, and hip surgeries.
          </p>

          <h4>Areas of Specialization</h4>
          <ul>
            <li>
              <strong>Shoulder Surgery:</strong> Dr. Karkamkar is adept at
              diagnosing and treating various shoulder conditions, offering both
              surgical and non-surgical solutions tailored to each patient's
              needs.
            </li>
            <li>
              <strong>Knee Surgery:</strong> From minimally invasive arthroscopic
              procedures to complex knee replacements, Dr. Karkamkar provides
              cutting-edge treatment options designed to restore mobility and
              alleviate pain.
            </li>
            <li>
              <strong>Hip Surgery:</strong> With a focus on innovative techniques
              and patient-centered care, Dr. Karkamkar excels in performing hip
              surgeries, ensuring optimal outcomes and faster recovery times.
            </li>
          </ul>

          <p>
            Whether you're dealing with chronic pain, a sports injury, or require
            a surgical intervention, Dr. Karkamkar is here to help. Schedule an
            appointment today to start your journey towards better orthopedic
            health.
          </p>

          <button className="knowMoreBtn">Know More</button>
        </div>

        {/* Right Content */}
        <div className="col-lg-6 col-md-12 text-center aboutUsImage">
          <img src={doctorImg} alt="Dr. Sachin Karkamkar" className="doctorImg" />
          <div className="doctorInfo">
            <h4>Dr. Sachin Karkamkar</h4>
            <p>
              Sr Consultant Orthopedic <br />
              Orthopedic Surgery <br />
              MBBS, MS (Orthopedic) ISAKOS Fellow (Italy Germany) <br />
              Shoulder Knee & Hip Surgeon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
