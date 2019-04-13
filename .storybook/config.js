import {configure} from '@storybook/react';
import 'babel-polyfill';

function loadStories() {
    require('../src/stories');
    require('../public/index.css');
}

configure(loadStories, module);
