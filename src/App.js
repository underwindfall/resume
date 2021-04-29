import React, { Fragment, useEffect, Suspense } from 'react';
import { MuiThemeProvider, Snackbar } from '@material-ui/core';
import { QFSnackBarContent } from './components/QFSnackBarContent';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Profile } from './layout/Profile';
import { Experience } from './layout/Experience';
import { Skills } from './layout/Skills';
import { Education } from './layout/Education';
import { Contact } from './layout/Contact';
import { getResumeData } from './repositories/mainRepository';
import { QFLoader } from './components/QFLoader';
import { ResumeTheme } from './res/theme';
import { getLanguage } from './i18n';
import { useSetState } from './hooks/useSetState';
import './App.css';

const DELAY_SHOW_LOADER = 2000;

const IssuePage = React.lazy(() => import('./layout/IssuePage').then(module => ({ default: module.IssuePage })));

export const App = () => {
  const [state, setState] = useSetState({
    data: {},
    loading: true,
    open: false,
    error: false,
    errorMessage: '',
  });

  const { loading, data, open, error, errorMessage } = state;
  const { experiences, educations, projects, skills } = data;

  const language = getLanguage();

  useEffect(() => {
    const fetchingData = async () => {
      setState({ loading: true });
      const { error, response } = await getResumeData(language);
      setTimeout(() => {
        if (error) {
          setState({
            loading: false,
            error: true,
            open: true,
            errorMessage: response.message,
          });
        } else {
          setState({
            loading: false,
            data: response,
          });
        }
      }, DELAY_SHOW_LOADER);
    };
    fetchingData();
  }, [language]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ open: false });
  };

  return (
    <MuiThemeProvider theme={ResumeTheme}>
      {loading ? (
        <QFLoader />
      ) : (
        <Fragment>
          <Header />
          <main style={{ flexGrow: 1 }}>
            {error ? (
              <Suspense fallback={<QFLoader />}>
                <IssuePage />
              </Suspense>
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
              horizontal: 'center',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <QFSnackBarContent onClose={handleClose} variant="error" message={errorMessage} />
          </Snackbar>
        </Fragment>
      )}
    </MuiThemeProvider>
  );
};
