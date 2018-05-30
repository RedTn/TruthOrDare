import React from 'react';
import Slider from 'react-slick';
import QuestionCard from './QuestionCard';
import './Carousel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const question = {
        truth: 'test',
        dare: 'test2'
    };
    return (
        <Slider {...settings} className="question-carousel">
            <div>
                <QuestionCard question={question} type="truth" />
            </div>
            <div>
                <QuestionCard question={question} type="truth" />
            </div>
        </Slider>
    );
};

export default Carousel;
