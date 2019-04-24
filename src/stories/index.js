import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { ScreenContainer } from './container/ScreenContainer';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { QFLoader } from '../components/QFLoader';

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
));

storiesOf('Footer', module).add('responsive Footer', () => (
    <ScreenContainer>
        <Footer />
    </ScreenContainer>
));

storiesOf('Header', module).add('responsive Header', () => (
    <ScreenContainer>
        <Header />
    </ScreenContainer>
));

storiesOf('Loader', module)
    .add('Lottie Loader', () => (
        <ScreenContainer>
            <QFLoader />
        </ScreenContainer>
    ))
    .add('Lottie Google', () => (
        <ScreenContainer>
            <QFLoader
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: require('../assets/animation/google.json')
                }}
            />
        </ScreenContainer>
    ));
