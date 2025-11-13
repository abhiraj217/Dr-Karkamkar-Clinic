import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ivoryimg from '../../assets/navbar/karkamkar-clinic-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import {
  BLOGS_SECTION_ID,
  CONTACTUS_SECTION_ID,
  HOME_SECTION_ID,
  SERVICE_SECTION_ID,
  TESTIMONIAL_SECTION_ID,
  ABOUTUS_SECTION_ID
} from '../../utils/Constant';
import { handleScroll } from '../../utils/Utils';

const Navbar = () => {

  const navigate = useNavigate();

  const navbarItems = [
    { name: 'Home', path:'/'},

    // FIXED → Now added path
    { name: 'Know Your Doctor', id: ABOUTUS_SECTION_ID },

    { 
      name: 'Services', 
      id: SERVICE_SECTION_ID,
      dropdown: [
        { name: 'Shoulder', id: 'shoulder-id' },
        { name: 'Knee', id: 'knee-id' },
        { name: 'Hip', id: 'hip-id' },
        { name: 'Sports', id: 'sports-id' },
        { name: 'Trauma', id: 'trauma-id' },
      ]
    },

    { name: 'Gallery', id: TESTIMONIAL_SECTION_ID },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', id: CONTACTUS_SECTION_ID }
  ];

  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Detect active section while scrolling
  useEffect(() => {
    const handleScrollEffect = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);

      // Active section highlight
      navbarItems.forEach(({ id }) => {
        if (id) {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= 100) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, [navbarItems]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownItemClick = (itemId) => {
    setDropdownOpen(false);
    handleScroll(itemId);
  };

  return (
    <div className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">

            {/* LOGO */}
            <Link to="/" className="navbar-brand">
              <img src={ivoryimg} alt="logo" className='karkamkarimg' />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                {navbarItems.map(({ name, id, dropdown, path }) => (
                  <li key={name} className={`nav-item ${dropdown ? 'dropdown' : ''}`}>

                    {/* DROPDOWN HANDLING */}
                    {dropdown ? (
                      <>
                        <button
                          className={`nav-link dropdown-toggle ${activeSection === id ? "active" : ""}`}
                          onClick={handleDropdownToggle}
                          style={{ background: 'none', border: 'none' }}
                        >
                          {name}
                          <span className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>▼</span>
                        </button>

                        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                          {dropdown.map((item) => (
                            <li key={item.id}>
                              <button
                                className="dropdown-item"
                                onClick={() => handleDropdownItemClick(item.id)}
                              >
                                {item.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (

                      /* NORMAL NAV ITEMS: ROUTE + SCROLL SUPPORT */
                    <button
                      className={`nav-link ${activeSection === id ? "active" : ""}`}
                      onClick={() => {
                        if (path) {
                          navigate(path);
                        } 
                        else if (id === ABOUTUS_SECTION_ID) {
                          if (window.location.pathname === "/") {
                          // Already on home → scroll
                            handleScroll(id);
                          } else {
                            // Navigate to home and pass scroll target
                            navigate("/", { state: { scrollTo: id } });
                          }
                        }
                        else if (id) {
                          handleScroll(id);
                        }
                      }}
                    >
                      {name}
                    </button>

                    )}

                  </li>
                ))}

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
