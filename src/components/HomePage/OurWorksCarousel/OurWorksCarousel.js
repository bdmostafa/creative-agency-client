import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { BsArrowRight } from 'react-icons/bs';
import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const OurWorksCarousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [service, setService] = useState({})

    const works = [carousel1, carousel2, carousel1, carousel2, carousel1, carousel2]

    useEffect(() => {
        const activeItem = works.find((works, index) => index.toString() === slideIndex.toString())
        setService(activeItem)
    }, [slideIndex])

// console.log(service, slideIndex)

    const onClickHandler = swiper => {
        if (swiper.clickedSlide) {
            if (swiper.clickedSlide.attributes) {
                var a = swiper.clickedSlide.attributes.getNamedItem('data-swiper-slide-index').value;
                setSlideIndex(a);
            }
        }
    }


    return (
        <Container className="text-center mb-5 pb-5">
            <h2 className="m-auto pt-5 text-white">Here are some of <span style={{ color: '#7AB259' }}> our works </span></h2>
            <Row>
                <Swiper
                    slidesPerView={3}
                    navigation
                    // Pagination
                    // Scrollbar
                    // A11y
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    onClick={(swiper) => onClickHandler(swiper)}
                    onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
                >
                    {works.map(w => {
                        return (
                            <SwiperSlide >
                                <Card.Img variant="top" src={w} className="w-100 m-5 mb-5 p-3"/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Row>
        </Container>
    );
};

export default OurWorksCarousel;