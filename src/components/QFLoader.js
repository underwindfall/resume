import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lottie from 'lottie-web';
import { resolver } from '../res/resolver';
import PageContainer from '../container/PageContainer';
import * as colors from '../res/colors';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: resolver.lottie
};

export class QFLoader extends Component {
    ref;
    componentDidMount() {
        const { options } = this.props;
        lottie.loadAnimation({
            container: this.ref,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: resolver.lottie,
            ...options
        });
    }

    render() {
        const { style, ...remainProps } = this.props;
        return (
            <PageContainer style={styles.container}>
                <div
                    ref={ref => (this.ref = ref)}
                    style={{ ...styles.loader, ...style }}
                    {...remainProps}
                />
            </PageContainer>
        );
    }
}

const styles = {
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
};

QFLoader.propTypes = {
    options: PropTypes.object,
    style: PropTypes.object
};
QFLoader.defaultProps = {
    style: {},
    options: defaultOptions
};
