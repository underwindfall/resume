import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as dimens from '../res/dimens';

const QFAvatar = ({ classes, image, style, ...remainProps }) => {
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

const styles = {
    avatar: {
        width: dimens.fontSize.avatarSize,
        height: dimens.fontSize.avatarSize,
        borderRadius: '50% !important',
        boxShadow:
            '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
    }
};
QFAvatar.propTypes = {
    image: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    style: PropTypes.object
};
QFAvatar.defaultProps = {
    style: {}
};

export default withStyles(styles)(QFAvatar);
