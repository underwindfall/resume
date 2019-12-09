import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import * as dimens from '../res/dimens';

const useStyles = makeStyles({
    avatar: {
        width: dimens.fontSize.avatarSize,
        height: dimens.fontSize.avatarSize,
        borderRadius: '50% !important',
        boxShadow:
            '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
    }
});

export const QFAvatar = ({ image, style = {}, ...remainProps }) => {
    const classes = useStyles();
    return (
        <img
            {...remainProps}
            alt="avatar"
            src={image}
            className={classes.avatar}
            style={style}
        />
    );
};

QFAvatar.propTypes = {
    image: PropTypes.string.isRequired,
    style: PropTypes.object
};
