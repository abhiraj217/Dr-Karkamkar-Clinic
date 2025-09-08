import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31094.61083851508!2d73.7608371!3d18.5175326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e23fc53ce5%3A0xf54b8c1701cff564!2s2nd%20Floor%2C%20Deccan%2099%20Mall%2C%20Jangali%20Maharaj%20Rd%2C%20beside%20Joyalukkas%20Jewellers%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra%20411004!5e0!3m2!1sen!2sin!4v1708670000000!5m2!1sen!2sin'

    return (
        <section id='contact-section' className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>2nd Floor, Deccan 99 Mall, Jangali Maharaj Rd, Pune</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Ivory Dental is pleasure"/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;