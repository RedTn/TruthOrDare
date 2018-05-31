import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Button, IconButton, Typography, Toolbar, AppBar } from '@material-ui/core';
import { CloudUpload, Save, Menu as MenuIcon } from '@material-ui/icons';
import FileSaver from 'file-saver';
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
    }

    setDrawer(open) {
        this.setState({
            isDrawerOpen: open
        });
    }

    handleFileUpload(file) {
        return readFile(file[0], e => {
            const data = JSON.parse(window.atob(e.target.result));
            this.props.handleFileUpload(data);
        });
    }

    saveQuestions() {
        const questions = window.btoa(
            JSON.stringify([
                {
                    truth: 'test',
                    dare: 'test2'
                },
                {
                    truth: 'test3',
                    dare: 'test4'
                }
            ])
        );
        const blob = new Blob([questions], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(blob, `TOD_${new Date().valueOf()}.txt`);
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
                    onChange={e => this.handleFileUpload(e.target.files)}
                />
                <Drawer open={this.state.isDrawerOpen} onClose={() => this.setDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => this.setDrawer(false)}
                        onKeyDown={() => this.setDrawer(false)}
                        className="menu-button"
                    >
                        <label htmlFor="upload-questions-button">
                            <Button variant="outlined" color="primary" component="span">
                                <p className="menu-item">Upload Questions</p> <CloudUpload />
                            </Button>
                        </label>
                    </div>
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
                </Drawer>
            </div>
        );
    }
}

Menu.propTypes = {
    handleFileUpload: PropTypes.func.isRequired
};

export default Menu;
