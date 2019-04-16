import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

export const QFTextContent = ({ text, className, font = 'regular', props }) => {
    return (
        <Typography
            style={styles.textStyles[font]}
            className={className}
            {...props}
        >
            {text}
        </Typography>
    );
};

const styles = {
    textStyles: {
        regular: {
            fontFamily: 'Montserrat-Regular'
        },
        light: {
            fontFamily: 'Montserrat-Light'
        },
        bold: {
            fontFamily: 'Montserrat-Bold'
        }
    }
};

export const QFText = withStyles(styles)(QFTextContent);

QFText.propTypes = {
    ...Typography.propTypes,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};
QFText.defaultProps = {
    className: undefined
};
