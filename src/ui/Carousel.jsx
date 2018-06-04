import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import QuestionCard from './QuestionCard';
import _ from 'lodash';
import './Carousel.css';

const Carousel = props => {
    const { questions = {} } = props;

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // const temp = {
    //     truths: [
    //         {id: '123', value: '345'},
    //         {id: '456', value: 'sdf'}
    //     ],
    //     dares: [
    //         {id: 'ncv', value: 'asd'},
    //         {id: 'op[', value: 'ghj'},
    //         {id: 'asd', value: 'nm,'}
    //     ]
    // };

    // const shuffledQuestions = _.mapValues(temp, (q) => _.shuffle(q));
    // const questions2 = {
    //     questions : _.zip(shuffledQuestions.truths, shuffledQuestions.dares)
    //         .map((pair) => _.zipObject(['truth', 'dare'], pair))
    // };

    _.mixin({ zipChain: arrays => _.zip.apply(_, arrays) });

    const shuffledQuestions = _(questions)
        .mapValues(q => _.shuffle(q))
        .values()
        .zipChain()
        .map(q => _.zipObject(['truth', 'dare'], q))
        .value();

    const questionCards = shuffledQuestions.map((question, i) => {
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
    questions: PropTypes.object
};

export default Carousel;
