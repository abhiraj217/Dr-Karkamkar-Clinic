import React from "react";
import "./AboutUs.css";
import doctorImg from "../../assets/banner/doctorImage.jpg";
import {Link} from "react-router-dom";

const AboutUs = () => {
  return (
    <section id="about-us" className="aboutUsSection">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE TEXT */}
          <div className="col-lg-6 aboutUsText">

            <h5 className="subTitle">ABOUT US</h5>
            <h2 className="mainTitle">Feel Amazing About Your Orthopedic Health</h2>

            <p className="introText">
              Dr. Sachin Karkamkar, a highly respected and accomplished Senior
              Consultant Orthopedic Surgeon in Hadapsar Pune. With a remarkable
              career dedicated to the field of orthopedics, Dr. Karkamkar is
              recognized for his expertise in shoulder, knee, and hip surgeries.
            </p>

            <div className="highlightBox">
              <h4>Areas of Specialization</h4>

              <ul>
                <li>
                  <strong>Shoulder Surgery:</strong> Dr. Karkamkar is adept at
                  diagnosing and treating various shoulder conditions, offering both
                  surgical and non-surgical solutions tailored to each patient's needs.
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
            </div>

      <Link to="/aboutUs" className="knowMoreBtn">Know More</Link>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6">
            <div className="doctorCard">
              <img src={doctorImg} alt="Doctor" className="doctorImg" />
              <div className="doctorBadge">
                <h4 className="docName">Dr. Sachin Karkamkar</h4>

                <div className="docDetails">
                  <p><strong>Sr. Consultant Orthopedic</strong></p>
                  <p>MBBS, MS (Orthopedic)</p>
                  <p>ISAKOS Fellow (Italy & Germany)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
