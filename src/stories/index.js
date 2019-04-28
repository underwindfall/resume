import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { ScreenContainer } from './container/ScreenContainer';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { QFLoader } from '../components/QFLoader';
import { mockTimeLine } from './mocks/mockTimeLine';
import QFTimeLine from '../components/QFTimeLine';
import SkillChip from '../components/skill/SkillChip';
import { resolver } from '../res/resolver';

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
));

storiesOf('Chip', module).add('Skill Chip', () => (
    <SkillChip icon={resolver.css} text={'Deletable Secondary Chip'} />
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

storiesOf('Layout', module)
    .add('responsive Footer', () => (
        <ScreenContainer>
            <Footer />
        </ScreenContainer>
    ))
    .add('responsive Header', () => (
        <ScreenContainer>
            <Header />
        </ScreenContainer>
    ))
    .add('responsive TimeLine', () => (
        <ScreenContainer>
            <QFTimeLine items={mockTimeLine} />
        </ScreenContainer>
    ));
