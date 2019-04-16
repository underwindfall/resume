import React from 'react';

import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';

import {Welcome} from '@storybook/react/demo';
import {Footer} from '../layout/Footer';
import {ScreenContainer} from './container/ScreenContainer';
//
storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
));

storiesOf('Footer', module).add('responsive Footer', () => (
    <ScreenContainer>
        <Footer />
    </ScreenContainer>
));
