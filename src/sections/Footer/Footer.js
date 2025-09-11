import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter,FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ivoryimg from "../../assets/navbar/karkamkar-clinic-logo.png";

const Footer = () => {
  const footerMenu = [
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Dental Services",
      link: "/",
    },
    {
      name: "Dentist",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/",
    },
    {
      name: "FAQs",
      link: "/",
    },
  ];

  const footerContacts = [
    {
      title: "Phone Number",
      info: "+91 9607812684",
      icon:<FaPhoneAlt />,
    },
    {
      title: "Open Hour",
      info: "10:00 AM - 09:00 PM",
      icon: <FaClock />,
    },
    {
      title: "Clinic Address",
      info: "408A, City Center, Pune - Solapur Rd, Triveni Nagar, Hadapsar, Pune, Maharashtra 411013",
      icon: <FaMapMarkerAlt />,
    },
    {
      info: "SN 163, Bhosale Garden Rd, Laxmi Vihar, Hadapsar, Pune, Maharashtra 411028",
      icon: <FaMapMarkerAlt />,
    },
  ];

  return (
    <footer className="pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5">
            <div className="footer-logo">
              {/* <img src={ivoryimg} alt="logo" /> */}
                  <img src={ivoryimg} about="ivoryimg" alt="ivory logo" className="clinic-img" />
            </div>
            <p className="footer-text">
            Trusted by the community for expert orthopedic and sports injury care. Committed to personalized treatment and your speedy recovery with compassion and advanced solutions.
            </p>

            <div className="social-logo">
              <p>Follow us on</p>
              <ul>
                <li>
                  <a href="/">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-2">
            <div className="footer-link">
              <p>Quick Links</p>
              <ul>
                {footerMenu.map((singleMenu) => (
                  <li>
                    <Link to="/">{singleMenu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="footer-contact">
              <p>Contact & Information</p>

              {footerContacts.map((footerContact) => {
                return (
                  <div className="contact-list">
                    <div className="footer-icons">
                    {footerContact.icon} 
                    </div>
                    <div className="contact-text">
                      <p>{footerContact.title}</p>
                      <h5>{footerContact.info}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="copy-text">
            <p>&copy; Dr Karkamkar. All Right Reserved</p>
          </div>
          <div className="copy-links">
            <ul>
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
