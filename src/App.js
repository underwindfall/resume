import React, { Component, Fragment } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import QFSnackBarContent from './components/QFSnackBarContent';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Profile from './layout/Profile';
import Experience from './layout/Experience';
import Skills from './layout/Skills';
import Education from './layout/Education';
import Contact from './layout/Contact';
import IssuePage from './layout/IssuePage';
import { getResumeData } from './repositories/mainRepository';
import { QFLoader } from './components/QFLoader';
import { ResumeTheme } from './res/theme';
import './App.css';
import {getLanguage} from "./i18n";

const DELAY_SHOW_LOADER = 4000;

class App extends Component {
    state = {
        data: {},
        loading: true,
        open: false,
        error: false,
        errorMessage: ''
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    async componentDidMount() {
        this.setState({ loading: true });
        const language = getLanguage();
        const { error, response } = await getResumeData(language);
        setTimeout(() => {
            if (error) {
                this.setState({
                    loading: false,
                    error: true,
                    open: true,
                    errorMessage: response.message
                });
            } else {
                this.setState({ loading: false, data: response });
            }
        }, DELAY_SHOW_LOADER);
    }

    render() {
        const { loading, data, open, error, errorMessage } = this.state;
        const { experiences, educations, projects, skills } = data;
        return (
            <MuiThemeProvider theme={ResumeTheme}>
                {loading ? (
                    <QFLoader />
                ) : (
                    <Fragment>
                        <Header />
                        <main style={{ flexGrow: 1 }}>
                            {error ? (
                                <IssuePage />
                            ) : (
                                <Fragment>
                                    <section id="sectionProfile">
                                        <Profile />
                                    </section>
                                    <section id="sectionExperience">
                                        <Experience experiences={projects} />
                                    </section>
                                    <section id="sectionSkills">
                                        <Skills skills={skills} />
                                    </section>
                                    <section id="sectionEducation">
                                        <Education education={educations} />
                                    </section>
                                    <section id="sectionContact">
                                        <Contact />
                                    </section>
                                </Fragment>
                            )}
                        </main>
                        <Footer />
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                            }}
                            open={open}
                            autoHideDuration={6000}
                            onClose={this.handleClose}
                        >
                            <QFSnackBarContent
                                onClose={this.handleClose}
                                variant="error"
                                message={errorMessage}
                            />
                        </Snackbar>
                    </Fragment>
                )}
            </MuiThemeProvider>
        );
    }
}

export default App;
