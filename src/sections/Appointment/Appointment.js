import React from 'react';
import './Appointment.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { AiFillHome } from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const locations = [
  {
    address: "2nd Floor, Deccan 99 Mall, Jangali Maharaj Rd, Pune",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5933798621445!2d73.9272412759271!3d18.502068769737733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c7940c0f35%3A0x7df571fa87fcf8ed!2sDr.%20Sachin%20Karkamkar%20%7C%20Orthopedics%20Surgeon%20in%20Hadapsar%20%7C%20Robotic%20Joint%20Replacement%20%7C%20Arthoscopy!5e0!3m2!1sen!2sin!4v1757608055830!5m2!1sen!2sin",
    timing: "Mon - Sat, 5:00pm to 9:00pm"
  },
  {
    address: "SN 163, Aru Nagar, Laxmi Vihar, Hadapsar, Pune",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5756742569606!2d73.9295654751913!3d18.502869982587242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f76ced78d7%3A0xeffa72af5128eaab!2sSahyadri%20Super%20Speciality%20Hospital%20Hadapsar!5e0!3m2!1sen!2sin!4v1757607399073!5m2!1sen!2sin",
    timing: "Tue, Thu, Sat 11:00am to 3:00pm"
  },
];

const services = [
  'Knee',
  'Shoulder',
  'Hip',
  'Trauma',
  'Sports Services',
];

const Appointment = () => (
  <section id='contact-section' className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
    <div className="container">
      {/* OR Text at Top */}
      <div className="row">
        <div className="col-12">
          <div className="appointment-form-area">
            <SectionTitle 
              subTitle="BOOK APPOINTMENT"
              title="Care at Dr Karkamkar is pleasure"
            />
            <ContactForm services={services} />
          </div>
        </div>
      </div>

      {/* Practice Locations Heading */}
      <div className="practice-locations">
        <h4>Practice Locations:</h4>
      </div>

      {/* Maps and Timings */}
      <div className="row align-items-start">
        <div className="maps-row">
          {locations.map(({ address, mapLink, timing }, idx) => (
            <div key={idx} className="google-map-wrapper">
              <div className="map-timing">{timing}</div>
              <div className="google-map">
                <iframe title={`map-${idx}`} src={mapLink}></iframe>
                <div className="location-name">
                  <AiFillHome />
                  <p>{address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Appointment;
