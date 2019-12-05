import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import lottie from 'lottie-web';
import { PageContainer } from '../container/PageContainer';
import { makeStyles } from '@material-ui/styles';
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

export const QFLoader = ({
    options = defaultOptions,
    style = {},
    ...remainProps
}) => {
    const classes = useStyles();
    const loaderRef = useRef();
    useEffect(() => {
        lottie.loadAnimation({
            container: loaderRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            ...options
        });
    }, []);
    return (
        <PageContainer className={classes.container}>
            <div
                ref={loaderRef}
                className={classes.loader}
                style={{ ...style }}
                {...remainProps}
            />
        </PageContainer>
    );
};

QFLoader.propTypes = {
    options: PropTypes.object,
    style: PropTypes.object
};
