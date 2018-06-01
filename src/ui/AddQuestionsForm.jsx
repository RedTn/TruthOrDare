import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TextField,
    Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Divider
} from '@material-ui/core';
import { ExpandMore, Delete } from '@material-ui/icons';
import './AddQuestionsForm.css';

class AddQuestionsForm extends Component {
    constructor() {
        super();

        this.state = {
            truth: '',
            dare: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleSubmit(e) {
        this.props.addQuestion(this.state);
        this.setState({
            truth: '',
            dare: ''
        });
        e.preventDefault();
    }

    deleteQuestion(question) {
        this.props.deleteQuestion(question);
    }

    render() {
        const { questions } = this.props;
        return (
            <div>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            id="truth"
                            label="Truth"
                            value={this.state.truth}
                            multiline
                            required
                            onChange={this.handleChange('truth')}
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="dare"
                            label="Dare"
                            value={this.state.dare}
                            multiline
                            required
                            onChange={this.handleChange('dare')}
                            margin="normal"
                        />
                    </div>
                    <div>
                        <Button variant="raised" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
                <div className="questions-list">
                    {questions.map((question, i) => {
                        return (
                            <div key={i}>
                                <Button
                                    variant="fab"
                                    color="primary"
                                    className="delete-button"
                                    onClick={() => this.deleteQuestion(question)}
                                >
                                    <Delete />
                                </Button>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                                        <Typography>Truth {i}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>{question.truth}</Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                                        <Typography>Dare {i}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>{question.dare}</Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <Divider />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

AddQuestionsForm.propTypes = {
    questions: PropTypes.array,
    addQuestion: PropTypes.func,
    deleteQuestion: PropTypes.func
};

export default AddQuestionsForm;
