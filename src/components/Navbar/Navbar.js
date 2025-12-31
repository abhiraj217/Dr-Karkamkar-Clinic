import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ivoryimg from "../../assets/navbar/karkamkar-clinic-logo.png";
import { Link, useNavigate } from "react-router-dom";

import {
  CONTACTUS_SECTION_ID,
  SERVICE_SECTION_ID,
  ABOUTUS_SECTION_ID
} from "../../utils/Constant";

import { handleScroll } from "../../utils/Utils";

const Navbar = () => {
  const navigate = useNavigate();

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarItems = [
    { name: "Home", path: "/" },
    { name: "Know Your Doctor", id: ABOUTUS_SECTION_ID },

    {
      name: "Services",
      id: SERVICE_SECTION_ID,
      dropdownType: "services",
      dropdown: [
        {
          name: "Shoulder",
          id: "shoulder-id",
          subDropdown: [
            { name: "How is normal Shoulder", slug: "shoulder-normal" },
            { name: "Why does Shoulder pain", slug: "shoulder-pain" },
            { name: "Shoulder Arthroscopy", slug: "shoulder-arthroscopy" },
            { name: "Shoulder Replacement", slug: "shoulder-replacement" }
          ]
        },

        {
          name: "Knee",
          id: "knee-id",
          subDropdown: [
            { name: "How is Normal Knee", slug: "knee-normal" },
            { name: "Why Does Knee Pain", slug: "knee-pain" },
            { name: "Knee Arthroscopy", slug: "knee-arthroscopy" },
            { name: "Knee Replacement", slug: "knee-replacement" }
          ]
        },

        {
          name: "Hip",
          id: "hip-id",
          subDropdown: [
            { name: "How is normal Hip", slug: "hip-normal" },
            { name: "Why does Hip pain", slug: "hip-pain" },
            { name: "Hip Replacement", slug: "hip-replacement" }
          ]
        },

        { name: "Sports", slug: "sports" },
        { name: "Trauma", slug: "trauma" }
      ]
    },

    {
      name: "Gallery",
      dropdownType: "gallery",
      dropdown: [
        { name: "Clinic Images", path: "/gallery/clinic" },
        { name: "Videos", path: "/gallery/videos" }
      ]
    },

    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", id: CONTACTUS_SECTION_ID }
  ];

  const handleGalleryNavigation = (path) => {
    setGalleryDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
  };

  /* ---------------------------------------------
        SCROLL EFFECT
  ----------------------------------------------*/
  useEffect(() => {
    const handleScrollEffect = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

  /* ---------------------------------------------
        CLOSE DROPDOWNS ON OUTSIDE CLICK
  ----------------------------------------------*/
  useEffect(() => {
    const closeAll = (e) => {
      if (!e.target.closest(".dropdown")) {
        setServicesDropdownOpen(false);
        setGalleryDropdownOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("click", closeAll);
    return () => document.removeEventListener("click", closeAll);
  }, []);

  /* ---------------------------------------------
        TOGGLE MOBILE MENU
  ----------------------------------------------*/
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  /* ---------------------------------------------
        TOGGLE DROPDOWN (Services or Gallery)
  ----------------------------------------------*/
  const toggleDropdown = (e, dropdownType) => {
    e.stopPropagation();
    
    if (dropdownType === "services") {
      setServicesDropdownOpen(!servicesDropdownOpen);
      setGalleryDropdownOpen(false);
      setOpenSubmenu(null);
    } else if (dropdownType === "gallery") {
      setGalleryDropdownOpen(!galleryDropdownOpen);
      setServicesDropdownOpen(false);
      setOpenSubmenu(null);
    }
  };

  /* ---------------------------------------------
        NORMAL ITEM CLICK
  ----------------------------------------------*/
  const handleItemClick = (id, path) => {
    setServicesDropdownOpen(false);
    setGalleryDropdownOpen(false);
    setOpenSubmenu(null);
    setMobileMenuOpen(false);

    if (path) return navigate(path);

    // Handle sections that need to scroll on home page
    if (id === ABOUTUS_SECTION_ID || id === CONTACTUS_SECTION_ID) {
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
        HANDLE SERVICE NAVIGATION
  ----------------------------------------------*/
  const handleServiceNavigation = (slug) => {
    setServicesDropdownOpen(false);
    setGalleryDropdownOpen(false);
    setOpenSubmenu(null);
    setMobileMenuOpen(false);
    navigate(`/services/${slug}`);
  };

  /* ---------------------------------------------
                        RENDER NAVBAR
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

            {/* MOBILE MENU TOGGLER */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* NAVBAR LINKS */}
            <div className={`collapse navbar-collapse ${mobileMenuOpen ? "show" : ""}`} id="navbarNav">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                {navbarItems.map(({ name, id, dropdown, dropdownType, path }) => (
                  <li key={name} className={`nav-item ${dropdown ? "dropdown" : ""}`}>

                    {/* ---------------- DROPDOWNS (Services & Gallery) ---------------- */}
                    {dropdown ? (
                      <>
                        <button
                          className="nav-link dropdown-toggle"
                          onClick={(e) => toggleDropdown(e, dropdownType)}
                        >
                          {name}
                          <span className={`dropdown-arrow ${
                            (dropdownType === "services" && servicesDropdownOpen) ||
                            (dropdownType === "gallery" && galleryDropdownOpen)
                              ? "open"
                              : ""
                          }`}>
                            ▼
                          </span>
                        </button>

                        {/* SERVICES DROPDOWN */}
                        {dropdownType === "services" && (
                          <ul className={`dropdown-menu ${servicesDropdownOpen ? "show" : ""}`}>
                            <div className="services-row">
                              {dropdown.map((item) => (
                                <div key={item.name} className="dropdown-submenu">

                                  {/* ---- ITEMS WITH SUBMENU (Shoulder, Knee, Hip) ---- */}
                                  {item.subDropdown ? (
                                    <>
                                      <button
                                        className="submenu-toggle"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setOpenSubmenu(openSubmenu === item.id ? null : item.id);
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

                                      {/* SUBMENU LIST */}
                                      <ul className={`submenu ${openSubmenu === item.id ? "show" : ""}`}>
                                        {item.subDropdown.map((sub) => (
                                          <li key={sub.slug}>
                                            <button
                                              className="dropdown-item"
                                              onClick={() => handleServiceNavigation(sub.slug)}
                                            >
                                              {sub.name}
                                            </button>
                                          </li>
                                        ))}
                                      </ul>
                                    </>
                                  ) : (
                                    /* ---- NON SUBMENU ITEMS (Sports, Trauma) ---- */
                                    <button
                                      className="dropdown-item"
                                      onClick={() => handleServiceNavigation(item.slug)}
                                    >
                                      {item.name}
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </ul>
                        )}

                        {/* GALLERY DROPDOWN */}
                        {dropdownType === "gallery" && (
                          <ul className={`dropdown-menu ${galleryDropdownOpen ? "show" : ""}`}>
                            {dropdown.map((item) => (
                              <li key={item.name}>
                                <button
                                  className="dropdown-item"
                                  onClick={() => handleGalleryNavigation(item.path)}
                                >
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      /* ---------------- NORMAL LINKS ---------------- */
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