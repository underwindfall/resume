import React from 'react';
import PropTypes from 'prop-types';
import * as colors from '../res/colors';

export const QFLoader = ({
    style,
    size = 'large',
    color = colors.darkPrimary
}) => (
    <div style={[styles.container, style]}>
        <ActivityIndicator size={size} color={color} />
    </div>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

QFLoader.propTypes = {
    ...View.propTypes,
    size: PropTypes.string,
    color: PropTypes.string
};
