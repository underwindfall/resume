import React, {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Header from './layout/Header';
import Footer from "./layout/Footer";
import {ResumeTheme} from './res/theme';
import './App.css';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={ResumeTheme}>
                <Header />
                <Footer />
            </MuiThemeProvider>
        );
    }
}

export default App;
