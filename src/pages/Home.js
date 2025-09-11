import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Blogs from '../sections/Blogs/Blogs';
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Services/Services';
import Testimonial from '../sections/Testimonial/Testimonial';
import AboutUs from '../components/AboutUs/AboutUs';
import Achievements from '../sections/Achievements/Achievements';


const Home = () => {

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