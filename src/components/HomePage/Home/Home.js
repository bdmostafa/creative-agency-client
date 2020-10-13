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
        <>
            <div className="header-bg w-100" style={{ backgroundColor: '#FBD062' }}>
                <NavBar />
                <HeaderMain />
            </div>
            <ClientCompany />
            <Services />
            <div className="w-100" style={{ backgroundColor: '#111430' }}>
                <WorksCarousel />
            </div>
            <ClientsFeedback />
            <ContactUs />
        </>
    );
};

export default Home;