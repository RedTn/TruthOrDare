import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionCard.css';
import { IconButton, Typography, Card, CardActions, CardContent } from '@material-ui/core';
import { Flip } from '@material-ui/icons';

class DirectionCard extends Component {
    render() {
        const { question, isTruth, flip, doubleSided } = this.props;
        const { truth = {}, dare = {} } = question;

        return (
            <Card
                className={(flip ? 'flip-content-upside-down' : '').concat(
                    doubleSided ? ' question-card-half' : ' question-card'
                )}
            >
                <CardContent>
                    <Typography variant="display1" component="h1">
                        {isTruth ? 'Truth' : 'Dare'}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {isTruth
                            ? truth.value || '**THIS CARD HAS NO TRUTH**'
                            : dare.value || '**THIS CARD HAS NO DARE**'}
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
        const { doubleSided } = this.props;

        return (
            <div>
                {doubleSided ? (
                    <DirectionCard
                        {...this.props}
                        isTruth={this.state.isTruth}
                        flip={true}
                        onFlipToggled={this.handleFlipToggled}
                    />
                ) : (
                    ''
                )}
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
    question: PropTypes.object.isRequired,
    doubleSided: PropTypes.bool
};

DirectionCard.propTypes = {
    ...QuestionCard.propTypes,
    isTruth: PropTypes.bool,
    flip: PropTypes.bool
};

export default QuestionCard;
