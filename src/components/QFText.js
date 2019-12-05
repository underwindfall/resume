import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
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
});

export const QFText = ({
    text,
    className = undefined,
    font = 'regular',
    ...props
}) => {
    const classes = useStyles();
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

QFText.propTypes = {
    ...Typography.propTypes,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};
