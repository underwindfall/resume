import React from 'react';
import PropTypes from 'prop-types';
import Lottie from './Lottie';
import { resolver } from '../res/resolver';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: resolver.lottie
};

export const QFLoader = ({ style, options, ...remainProps }) => {
    return (
        <Lottie
            options={options}
            style={[styles.container, style]}
            {...remainProps}
        />
    );
};

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

QFLoader.propTypes = {
    ...Lottie.propTypes,
    style: PropTypes.object
};
QFLoader.defaultProps = {
    style: {},
    options: defaultOptions
};
