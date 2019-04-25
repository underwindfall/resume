import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { getResumeData } from './repositories/mainRepository';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Profile from './layout/Profile';
import { ResumeTheme } from './res/theme';
import { QFLoader } from './components/QFLoader';
import './App.css';
import Experience from './layout/Experience';

const DELAY_SHOW_LOADER = 3000;

class App extends Component {
    state = {
        data: {},
        loading: true
    };
    async componentDidMount() {
        this.setState({ loading: true });
        const { error, response } = await getResumeData();
        if (error) {
            console.log(error);
        } else {
            setTimeout(
                () => this.setState({ loading: false, data: response }),
                DELAY_SHOW_LOADER
            );
        }
    }

    render() {
        const { loading, data } = this.state;
        const { experiences, educations, projects, skills } = data;
        return (
            <MuiThemeProvider theme={ResumeTheme}>
                {loading ? (
                    <QFLoader />
                ) : (
                    <div>
                        <Header />
                        <main style={{ flexGrow: 1, height: '100vh' }}>
                            <Profile />
                            <Experience experiences={experiences} />
                        </main>
                        <Footer />
                    </div>
                )}
            </MuiThemeProvider>
        );
    }
}

export default App;
