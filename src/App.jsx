import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import QuestionCard from './ui/QuestionCard';

const App = () => {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        Truth or Dare
                    </Typography>
                </Toolbar>
            </AppBar>
            <QuestionCard />
        </div>
    );
};

export default App;
