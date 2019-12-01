import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography, withStyles } from '@material-ui/core';

const QFText = ({ text, classes, className, font = 'regular', ...props }) => {
    const textClass = classNames({
        [classes.textStyles[font]]: font,
        [className]: className
    });
    return (
        <Typography className={textClass} {...props}>
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

export default withStyles(styles)(QFText);

QFText.propTypes = {
    ...Typography.propTypes,
    text: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
};
QFText.defaultProps = {
    className: undefined
};
