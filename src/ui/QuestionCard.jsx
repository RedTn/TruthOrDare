import React from 'react';
import PropTypes from 'prop-types';
import './QuestionCard.css';
import { IconButton, Typography, Card, CardActions, CardContent } from '@material-ui/core';
import { Flip } from '@material-ui/icons';

const QuestionCard = props => {
    const DirectionCard = props => {
        const { question, type, flip } = props;

        DirectionCard.propTypes = {
            flip: PropTypes.bool
        };

        return (
            <Card className={(flip ? 'flip-content-upside-down' : '').concat(' question-card')}>
                <CardContent>
                    <Typography variant="display3" component="h1">
                        {type === 'truth' ? 'Truth' : 'Dare'}
                    </Typography>
                    <Typography variant="display1" component="p">
                        {type === 'truth' ? question.truth : question.dare}
                    </Typography>
                    <CardActions>
                        <IconButton size="large" color="primary">
                            <Flip />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        );
    };

    return (
        <div>
            <DirectionCard {...props} flip={true} />
            <DirectionCard {...props} />
        </div>
    );
};

QuestionCard.propTypes = {
    question: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
};

export default QuestionCard;
