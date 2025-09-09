import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { handleScroll, whatsAppBotListener } from "../../utils/Utils";
import { CONTACTUS_SECTION_ID, PHONE_NUMBER } from "../../utils/Constant";
import clinicIcon from '../../assets/ivory/ivory-img.jpg';

const Banner = () => {
    return (
        <section
            id="banner-section"
            className="section-bg home-bg banner-section"
        >
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container banner-text-div">
                        <div className="row">
                            <div className="col-lg-6 heading-text-div">
                                <div
                                    className="banner-text"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <h1 className="banner-para">Every smile deserves expert care</h1>
                                    <p className="para-trust">
                                        We believe in collaborative approach to
                                        dental care at{" "}
                                        <span className="clinic-name-text">
                                            Ivory Multispeciality Dental Clinic
                                        </span>
                                        , listening to your concern and working
                                        with you to develop a personalized
                                        treatment plan that suites your needs.
                                    </p>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <Link onClick={() => handleScroll(CONTACTUS_SECTION_ID)}>
                                                Book an appointment
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div
                                    className="banner-img-area"
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                    data-aos-delay="0"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What's app bot section */}
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
