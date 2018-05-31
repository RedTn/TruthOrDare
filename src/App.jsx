import React from 'react';
import './App.css';
import Carousel from './container/Carousel';
import Menu from './container/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: { main: red[500] },
        secondary: { main: orange[500] }
    }
});

const App = () => {
    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <Menu />
                <Carousel />
            </MuiThemeProvider>
        </div>
    );
};

export default App;
