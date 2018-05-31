import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import QuestionCard from './QuestionCard';
import './Carousel.css';

const Carousel = props => {
    const { questions = [] } = props;

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const questionCards = questions.map((question, i) => {
        return (
            <div key={i}>
                <QuestionCard question={question} />
            </div>
        );
    });

    return (
        <div>
            <Slider {...settings} className="question-carousel">
                {questionCards.length > 0 ? (
                    questionCards
                ) : (
                    <h1>Upload or create your questions from the menu!</h1>
                )}
            </Slider>
        </div>
    );
};

Carousel.propTypes = {
    questions: PropTypes.array
};

export default Carousel;
