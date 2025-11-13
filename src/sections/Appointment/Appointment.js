import React from 'react';
import './Appointment.css';
import { AiFillHome, AiTwotonePhone } from "react-icons/ai";

const PHONE_NUMBER = "+919876543210";

const locations = [
  {
    address: "408A, City Center, Pune - Solapur Rd, Triveni Nagar, Hadapsar, Pune, Maharashtra 411028",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5933798621445!2d73.9272412759271!3d18.502068769737733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c7940c0f35%3A0x7df571fa87fcf8ed!2sDr.%20Sachin%20Karkamkar!5e0!3m2!1sen!2sin!4v1757608055830!5m2!1sen!2sin",
    timing: "Mon - Sat",
    timeRange: "5:00 PM – 9:00 PM"
  },
  {
    address: "SN 163, Aru Nagar, Laxmi Vihar, Hadapsar, Pune",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5756742569606!2d73.9295654751913!3d18.502869982587242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f76ced78d7%3A0xeffa72af5128eaab!2sSahyadri%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1757607399073!5m2!1sen!2sin",
    timing: "Tue • Thu • Sat",
    timeRange: "11:00 AM – 3:00 PM"
  },
];
const Appointment = () => (
  <section id='contact-section' className='appointment-section pb-70'>
    <div className="container">

      {/* Heading */}
      <div className="appointment-header">

      {/* NEW Good Catch heading */}

      <h5 className="sub">GET IN TOUCH</h5>
      <h2 className="main-title">Visit Our Practice Locations</h2>
    </div>

      {/* ONE SMALL CALL BOX */}
      <a href={`tel:${PHONE_NUMBER}`} className="single-call-box">
        <AiTwotonePhone />
        <span>Click here to call</span>
      </a>

      {/* Practice Locations */}
      <div className="maps-row">
        {locations.map(({ address, mapLink, timing, timeRange }, idx) => (
          <div key={idx} className="google-map-wrapper">

            {/* Timing Box */}
            <div className="map-timing-box">
              <h4>{timing}</h4>
              <p>{timeRange}</p>
            </div>

            {/* Map */}
            <div className="google-map">
              <iframe title={`map-${idx}`} src={mapLink}></iframe>

              {/* Address Box */}
              <div className="location-name">
                <AiFillHome />
                <p>{address}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Appointment;