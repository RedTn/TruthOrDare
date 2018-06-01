import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Button, IconButton, Typography, Toolbar, AppBar } from '@material-ui/core';
import {
    CloudUpload,
    Save,
    Menu as MenuIcon,
    VideogameAsset,
    Edit,
    Delete
} from '@material-ui/icons';
import FileSaver from 'file-saver';
import { Link } from 'react-router-dom';
import './Menu.css';

function readFile(file, onLoadCallback) {
    const reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.readAsText(file);
}

class Menu extends Component {
    constructor() {
        super();

        this.state = {
            isDrawerOpen: false
        };

        this.setDrawer = this.setDrawer.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.saveQuestions = this.saveQuestions.bind(this);
        this.clearQuestions = this.clearQuestions.bind(this);
    }

    setDrawer(open) {
        this.setState({
            isDrawerOpen: open
        });
    }

    handleFileUpload(file) {
        return readFile(file[0], e => {
            if (e && e.target && e.target.result) {
                try {
                    const data = JSON.parse(window.atob(e.target.result));
                    this.props.handleFileUpload(data);
                } catch (e) {
                    console.error(e);
                } finally {
                    this.uploadField.value = null;
                }
            }
        });
    }

    saveQuestions() {
        const { questions } = this.props;
        const questionsBlob = window.btoa(JSON.stringify(questions));
        const blob = new Blob([questionsBlob], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(blob, `TOD_${new Date().valueOf()}.txt`);
    }

    clearQuestions() {
        this.props.clearQuestions();
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Menu"
                            onClick={() => this.setDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Truth or Dare
                        </Typography>
                    </Toolbar>
                </AppBar>
                <input
                    id="upload-questions-button"
                    className="hide-button"
                    type="file"
                    ref={c => {
                        this.uploadField = c;
                    }}
                    onChange={e => this.handleFileUpload(e.target.files)}
                />
                <Drawer open={this.state.isDrawerOpen} onClose={() => this.setDrawer(false)}>
                    <div>
                        <ul className="menu-ul">
                            <li>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={() => this.setDrawer(false)}
                                    onKeyDown={() => this.setDrawer(false)}
                                    className="menu-button"
                                >
                                    <Button
                                        component={Link}
                                        to="/"
                                        onClick={() => this.setDrawer(false)}
                                        variant="outlined"
                                        color="primary"
                                    >
                                        <p className="menu-item-home">Play Game</p>{' '}
                                        <VideogameAsset />
                                    </Button>
                                </div>
                            </li>
                            <li>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={() => this.setDrawer(false)}
                                    onKeyDown={() => this.setDrawer(false)}
                                    className="menu-button"
                                >
                                    <Button
                                        component={Link}
                                        to="/add-questions"
                                        onClick={() => this.setDrawer(false)}
                                        variant="outlined"
                                        color="primary"
                                    >
                                        <p className="menu-item-add">Set Questions</p> <Edit />
                                    </Button>
                                </div>
                            </li>
                            <li>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={() => this.setDrawer(false)}
                                    onKeyDown={() => this.setDrawer(false)}
                                    className="menu-button"
                                >
                                    <label htmlFor="upload-questions-button">
                                        <Button variant="outlined" color="primary" component="span">
                                            <p className="menu-item">Upload Questions</p>{' '}
                                            <CloudUpload />
                                        </Button>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={() => this.setDrawer(false)}
                                    onKeyDown={() => this.setDrawer(false)}
                                    className="menu-button"
                                >
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        component="span"
                                        onClick={this.saveQuestions}
                                    >
                                        <p className="menu-item-2">Save Questions</p> <Save />
                                    </Button>
                                </div>
                            </li>
                            <li>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={() => this.setDrawer(false)}
                                    onKeyDown={() => this.setDrawer(false)}
                                    className="menu-button"
                                >
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        component="span"
                                        onClick={this.clearQuestions}
                                    >
                                        <p className="menu-item-clear">Clear Questions</p>{' '}
                                        <Delete />
                                    </Button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Drawer>
            </div>
        );
    }
}

Menu.propTypes = {
    questions: PropTypes.array,
    handleFileUpload: PropTypes.func.isRequired,
    clearQuestions: PropTypes.func
};

export default Menu;
