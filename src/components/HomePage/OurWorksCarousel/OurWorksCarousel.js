import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import CarouselData from './CarouselData';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const OurWorksCarousel = () => {

    return (
        <Container className="text-center mb-5 pb-5">
            <h2 className="m-auto pt-5 text-white">Here are some of <span style={{ color: '#7AB259' }}> our works </span></h2>
            <Row>
                <Swiper
                    slidesPerView={3}
                    navigation
                    Pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                      }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                >
                    {CarouselData.map((carousel, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <Card.Img variant="top" src={carousel} className="w-100 m-5 mb-5 p-3"/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Row>
        </Container>
    );
};

export default OurWorksCarousel;