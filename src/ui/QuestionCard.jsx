import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionCard.css';
import { IconButton, Typography, Card, CardActions, CardContent } from '@material-ui/core';
import { Flip } from '@material-ui/icons';

class DirectionCard extends Component {
    render() {
        const { question, isTruth, flip } = this.props;

        return (
            <Card className={(flip ? 'flip-content-upside-down' : '').concat(' question-card')}>
                <CardContent>
                    <Typography variant="display3" component="h1">
                        {isTruth ? 'Truth' : 'Dare'}
                    </Typography>
                    <Typography variant="display1" component="p">
                        {isTruth ? question.truth : question.dare}
                    </Typography>
                    <CardActions>
                        <IconButton size="large" color="primary" onClick={this.props.onFlipToggled}>
                            <Flip />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        );
    }
}

class QuestionCard extends Component {
    constructor() {
        super();

        this.state = {
            isTruth: true
        };

        this.handleFlipToggled = this.handleFlipToggled.bind(this);
    }

    handleFlipToggled() {
        this.setState(prevState => {
            return {
                isTruth: !prevState.isTruth
            };
        });
    }

    render() {
        return (
            <div>
                <DirectionCard
                    {...this.props}
                    isTruth={this.state.isTruth}
                    flip={true}
                    onFlipToggled={this.handleFlipToggled}
                />
                <DirectionCard
                    {...this.props}
                    isTruth={this.state.isTruth}
                    onFlipToggled={this.handleFlipToggled}
                />
            </div>
        );
    }
}

QuestionCard.propTypes = {
    question: PropTypes.object.isRequired
};

DirectionCard.propTypes = {
    ...QuestionCard.propTypes,
    isTruth: PropTypes.bool,
    flip: PropTypes.bool
};

export default QuestionCard;
