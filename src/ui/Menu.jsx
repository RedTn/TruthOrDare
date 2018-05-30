import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, Button } from '@material-ui/core';
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
    }

    setDrawer(open) {
        this.setState({
            isDrawerOpen: open
        });
    }

    handleFileUpload(file) {
        readFile(file[0], e => {
            const data = JSON.parse(window.atob(e.target.result));
            console.log(data);
        });
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
                    >
                        <label htmlFor="upload-questions-button">
                            <Button variant="raised" component="span">
                                Upload Questions
                            </Button>
                        </label>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Menu;
