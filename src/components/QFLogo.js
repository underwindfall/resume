import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, withStyles } from '@material-ui/core';
import * as dimens from '../res/dimens';
import classNames from 'classnames';

const QFLogo = ({ classes, className, image, style, ...remainProps }) => {
    const logoClasses = classNames({
        [classes.avatar]: true,
        [className]: className
    });
    return (
        <Avatar
            {...remainProps}
            alt="avatar"
            src={image}
            style={style}
            className={logoClasses}
        />
    );
};

const styles = {
    avatar: {
        width: dimens.spacing.logo,
        height: dimens.spacing.logo,
        borderRadius: '50% !important',
        boxShadow:
            '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
    }
};
QFLogo.propTypes = {
    ...Avatar.propTypes,
    image: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    style: PropTypes.object
};
QFLogo.defaultProps = {
    style: {}
};

export default withStyles(styles)(QFLogo);
