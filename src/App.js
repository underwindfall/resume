import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Profile from './layout/Profile';
import { ResumeTheme } from './res/theme';
import './App.css';
import { getExperiences } from './repositories/mainRepository';

class App extends Component {
    async componentDidMount() {
        const { error, response } = await getExperiences();
        console.log(error, response);
    }

    render() {
        return (
            <MuiThemeProvider theme={ResumeTheme}>
                <Header />
                <main style={{ flexGrow: 1, height: '100vh' }}>
                    <Profile />
                </main>
                <Footer />
            </MuiThemeProvider>
        );
    }
}

export default App;
