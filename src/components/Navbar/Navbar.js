import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ivoryimg from "../../assets/navbar/karkamkar-clinic-logo.png";
import { Link, useNavigate } from "react-router-dom";

import {
  BLOGS_SECTION_ID,
  CONTACTUS_SECTION_ID,
  HOME_SECTION_ID,
  SERVICE_SECTION_ID,
  TESTIMONIAL_SECTION_ID,
  ABOUTUS_SECTION_ID
} from "../../utils/Constant";

import { handleScroll } from "../../utils/Utils";

const Navbar = () => {
  const navigate = useNavigate();

  // Dropdown states
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navbarItems = [
    { name: "Home", path: "/" },
    { name: "Know Your Doctor", id: ABOUTUS_SECTION_ID },

    {
      name: "Services",
      id: SERVICE_SECTION_ID,
      dropdown: [
        { name: "Shoulder", id: "shoulder-id" },

        {
          name: "Knee",
          id: "knee-id",
          subDropdown: [
            { name: "How is Normal Knee", id: "knee-normal-id" },
            { name: "Why Does Knee Pain", id: "knee-pain-id" },
            { name: "Knee Arthroscopy", id: "knee-arthoscopy-id" },
            { name: "Knee Replacement", id: "knee-replacement-id" }
          ]
        },

        { 
          name: "Hip", 
          id: "hip-id",
          subDropdown: [
            { name: "How is normal Hip", id: "hip-normal-id" },
            { name: "Why does Hip pain", id: "hip-pain-id" },
            { name: "Hip Replacement", id: "hip-replacement-id" },
          ]
        },
        { name: "Sports", id: "sports-id" },
        { name: "Trauma", id: "trauma-id" }
      ]
    },

    { name: "Gallery", id: TESTIMONIAL_SECTION_ID },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", id: CONTACTUS_SECTION_ID }
  ];

  /* ---------------------------------------------
      SCROLL DETECTION
  ----------------------------------------------*/
  useEffect(() => {
    const handleScrollEffect = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

  /* ---------------------------------------------
      CLICK OUTSIDE TO CLOSE DROPDOWNS
  ----------------------------------------------*/
  useEffect(() => {
    const closeAll = (e) => {
      if (!e.target.closest(".dropdown")) {
        setDropdownOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("click", closeAll);
    return () => document.removeEventListener("click", closeAll);
  }, []);

  /* ---------------------------------------------
      MAIN DROPDOWN TOGGLE
  ----------------------------------------------*/
  const toggleMainDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
    setOpenSubmenu(null);
  };

  /* ---------------------------------------------
      ROUTING & SCROLL LOGIC
  ----------------------------------------------*/
  const handleItemClick = (id, path) => {
    setDropdownOpen(false);
    setOpenSubmenu(null);

    if (path) return navigate(path);

    if (id === ABOUTUS_SECTION_ID) {
      if (window.location.pathname === "/") {
        handleScroll(id);
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
      return;
    }

    if (id) handleScroll(id);
  };

  /* ---------------------------------------------
      RENDER COMPONENT
  ----------------------------------------------*/
  return (
    <div className={`main-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* LOGO */}
            <Link to="/" className="navbar-brand">
              <img src={ivoryimg} alt="logo" className="karkamkarimg" />
            </Link>

            {/* MOBILE HAMBURGER */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                {navbarItems.map(({ name, id, dropdown, path }) => (
                  <li
                    key={name}
                    className={`nav-item ${dropdown ? "dropdown" : ""}`}
                  >
                    {/* Services Main Dropdown */}
                    {dropdown ? (
                      <>
                        <button
                          className="nav-link dropdown-toggle"
                          onClick={toggleMainDropdown}
                        >
                          {name}
                          <span
                            className={`dropdown-arrow ${
                              dropdownOpen ? "open" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>

                        {/* MAIN DROPDOWN MENU */}
                        <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                          <div className="services-row">
                            {dropdown.map((item) => (
                              <div key={item.name} className="dropdown-submenu">
                                {/* If item has sub menu (KNEE) */}
                                {item.subDropdown ? (
                                  <>
                                    <button
                                      className="submenu-toggle"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenSubmenu(
                                          openSubmenu === item.id ? null : item.id
                                        );
                                      }}
                                    >
                                      {item.name}
                                      <span
                                        className={`submenu-arrow ${
                                          openSubmenu === item.id ? "open" : ""
                                        }`}
                                      >
                                        ▸
                                      </span>
                                    </button>

                                    {/* SECOND LEVEL SUBMENU */}
                                    <ul
                                      className={`submenu ${
                                        openSubmenu === item.id ? "show" : ""
                                      }`}
                                    >
                                      {item.subDropdown.map((sub) => (
                                        <li key={sub.id}>
                                          <button
                                            className="dropdown-item"
                                            onClick={() =>
                                              navigate("/services", {
                                                state: { kneeSection: sub.id }
                                              })
                                            }
                                          >
                                            {sub.name}
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                ) : (
                                  <button
                                    className="dropdown-item"
                                    onClick={() => handleItemClick(item.id)}
                                  >
                                    {item.name}
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </ul>
                      </>
                    ) : (
                      /* Normal links */
                      <button
                        className="nav-link"
                        onClick={() => handleItemClick(id, path)}
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
