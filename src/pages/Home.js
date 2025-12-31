import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import { handleScroll } from "../utils/Utils";
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Services/Services';
import Testimonial from '../sections/Testimonial/Testimonial';
import AboutUs from '../components/AboutUs/AboutUs';
import Achievements from '../sections/Achievements/Achievements';


const Home = () => {
 const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        handleScroll(location.state.scrollTo);
      }, 300);
    }
  }, [location]);
    return (
        <>
            <Navbar/>
            <Banner/>
            <AboutUs />
            <Services/>
            <Achievements />
            <Testimonial/>
            <Appointment/>
            <Footer/>
        </>
    );
};

export default Home;