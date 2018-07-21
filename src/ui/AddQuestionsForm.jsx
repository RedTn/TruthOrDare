import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TextField,
    Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Divider,
    Grid
} from '@material-ui/core';
import { ExpandMore, Delete } from '@material-ui/icons';
import './AddQuestionsForm.css';

const GridItem = ({ values, label, onClick }) => (
    <Grid item xs={6}>
        <div className="values-list">
            {values.map((value, i) => {
                return (
                    <div key={i}>
                        <Button
                            variant="fab"
                            color="primary"
                            className="delete-button"
                            onClick={() => onClick(value)}
                        >
                            <Delete />
                        </Button>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                                <Typography>
                                    {label} {i}
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>{value.value}</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <Divider />
                    </div>
                );
            })}
        </div>
    </Grid>
);

GridItem.propTypes = {
    values: PropTypes.array,
    label: PropTypes.string,
    onClick: PropTypes.func
};

class AddQuestionsForm extends Component {
    constructor() {
        super();

        this.state = {
            truth: '',
            dare: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteTruth = this.deleteTruth.bind(this);
        this.deleteDare = this.deleteDare.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleSubmit(e) {
        if (this.state.truth && typeof this.state.truth === 'string') {
            this.props.addTruth(this.state.truth);
        }
        if (this.state.dare && typeof this.state.dare === 'string') {
            this.props.addDare(this.state.dare);
        }
        this.setState({
            truth: '',
            dare: ''
        });
        e.preventDefault();
    }

    deleteDare(dare) {
        this.props.deleteDare(dare);
    }

    deleteTruth(truth) {
        this.props.deleteTruth(truth);
    }

    render() {
        const {
            questions: { truths = [], dares = [] }
        } = this.props;
        return (
            <div>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <span className="question-fields">
                            <TextField
                                id="truth"
                                label="Truth"
                                value={this.state.truth}
                                multiline
                                onChange={this.handleChange('truth')}
                                margin="normal"
                            />
                        </span>
                        <span className="question-fields">
                            <TextField
                                id="dare"
                                label="Dare"
                                value={this.state.dare}
                                multiline
                                onChange={this.handleChange('dare')}
                                margin="normal"
                            />
                        </span>
                    </div>

                    <div>
                        <Button variant="raised" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
                <Grid container spacing={8}>
                    <GridItem
                        values={truths}
                        label="Truth"
                        onClick={truth => this.deleteTruth(truth)}
                    />
                    <GridItem values={dares} label="Dare" onClick={dare => this.deleteDare(dare)} />
                </Grid>
            </div>
        );
    }
}

AddQuestionsForm.propTypes = {
    questions: PropTypes.object,
    addTruth: PropTypes.func,
    addDare: PropTypes.func,
    deleteTruth: PropTypes.func,
    deleteDare: PropTypes.func
};

export default AddQuestionsForm;
