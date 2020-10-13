import React from 'react';
import ClientCompany from '../ClientCompany/ClientCompany';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import ContactUs from '../ContactUs/ContactUs';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import NavBar from '../Header/NavBar/NavBar';
import Services from '../Services/Services';
import OurWorksCarousel from '../OurWorksCarousel/OurWorksCarousel';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <>
            <div className="w-100" style={{ backgroundColor: '#FBD062' }}>
                <NavBar />
                <HeaderMain />
            </div>
            <ClientCompany />
            <Services />
            <div className="w-100" style={{ backgroundColor: '#111430' }}>
                <OurWorksCarousel />
            </div>
            <ClientsFeedback />
            <div className="w-100" style={{ backgroundColor: '#FBD062' }}>
                <ContactUs />
                <Footer />
            </div>
            
        </>
    );
};

export default Home;