import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import ivoryimg from '../../assets/ivory/teeth-clinic-img.png';
import { Link } from 'react-router-dom';
import {
  BLOGS_SECTION_ID,
  CONTACTUS_SECTION_ID,
  HOME_SECTION_ID,
  SERVICE_SECTION_ID,
  TESTIMONIAL_SECTION_ID
} from '../../utils/Constant';
import { handleScroll } from '../../utils/Utils';

const Navbar = () => {
  const navbarItems = [
    { name: 'Home', id: HOME_SECTION_ID },
    { name: 'Services', id: SERVICE_SECTION_ID },
    { name: 'Testimonials', id: TESTIMONIAL_SECTION_ID },
    { name: 'Blogs', id: BLOGS_SECTION_ID },
    { name: 'Contact Us', id: CONTACTUS_SECTION_ID }
  ];

  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Detect active section while scrolling
  useEffect(() => {
    const handleScrollEffect = () => {
      // Check scroll position to change navbar background
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // For active section detection
      navbarItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, [navbarItems]);

  return (
    <div className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo */}
            <Link className="navbar-brand">
              <h1 className='ivory-title'>
                IV
                <img src={ivoryimg} alt='ivory logo' className='ivory-img' />
                RY
              </h1>
              <p className='ivory-para'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Multispeciality <br></br> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dental Clinic </p>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Navbar Links */}
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                {navbarItems.map(({ name, id }) => (
                  <li key={id} className="nav-item">
                    <button
                      className={`nav-link ${activeSection === id ? "active" : ""}`}
                      onClick={() => handleScroll(id)}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Navbar Button */}
              <div className="theme-btn">
                <Link onClick={() => handleScroll(CONTACTUS_SECTION_ID)}>Book an appointment</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;