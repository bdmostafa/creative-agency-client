import React from 'react';
import ClientCompany from '../ClientCompany/ClientCompany';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import ContactUs from '../ContactUs/ContactUs';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import NavBar from '../Header/NavBar/NavBar';
import Services from '../Services/Services';
import WorksCarousel from '../WorksCarousel/WorksCarousel';

const Home = () => {
    return (
        <div>
            <NavBar />
            <HeaderMain />
            <ClientCompany />
            <Services />
            <WorksCarousel />
            <ClientsFeedback />
            <ContactUs />
        </div>
    );
};

export default Home;