import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import lottie from 'lottie-web';
import { makeStyles } from '@material-ui/styles';
import { PageContainer } from '../container/PageContainer';
import { resolver } from '../res/resolver';
import * as colors from '../res/colors';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: resolver.loader
};

const useStyles = makeStyles({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: colors.backgroundColor
    },
    loader: {
        width: '20%',
        height: '20%',
        display: 'block',
        margin: '0 auto'
    }
});

export const QFLoader = React.memo(({ style, options, ...remainProps }) => {
    const lottieRef = useRef();
    const classes = useStyles();
    useEffect(() => {
        lottie.loadAnimation({
            container: lottieRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            ...options
        });
    });

    return (
        <PageContainer className={classes.container}>
            <div ref={lottieRef} className={classes.loader} {...remainProps} />
        </PageContainer>
    );
});

QFLoader.propTypes = {
    options: PropTypes.object,
    style: PropTypes.object
};
QFLoader.defaultProps = {
    style: {},
    options: defaultOptions
};
