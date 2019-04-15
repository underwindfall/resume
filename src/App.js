import React, {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {Footer} from './components/Footer';
import {ResumeTheme} from './res/theme';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={ResumeTheme}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
                <Footer />
            </MuiThemeProvider>
        );
    }
}

export default App;
