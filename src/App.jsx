import React from 'react';
import './App.css';
import Menu from './container/Menu';
import Home from './routes/Home';
import AddQuestions from './routes/AddQuestions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: { main: red[500] },
        secondary: { main: orange[500] }
    }
});

const RoutedMenu = withRouter(props => <Menu {...props} />);

const App = () => {
    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <div>
                        <RoutedMenu />
                        <Route exact path="/" component={Home} />
                        <Route path="/add-questions" component={AddQuestions} />
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        </div>
    );
};

export default App;
