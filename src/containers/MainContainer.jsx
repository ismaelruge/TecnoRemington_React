import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Products from '../components/products/Products';
import WelcomeSection from '../components/welcomeSectioon/WelcomeSection';
import AboutUs from '../components/aboutUs/AboutUs';
import ContactUs from '../components/contactUs/ContactUs';
import Footer from '../components/footer/Footer';

const MainContainer = () => {
    return (
        <div>
            <Navbar />
            <WelcomeSection />
            <Products />
            <AboutUs />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default MainContainer;
