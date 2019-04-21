import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const QFBanner = ({ classes, image, style, ...remainProps }) => (
    <div
        className={classes.banner}
        style={{ ...style, backgroundImage: 'url(' + image + ')' }}
        {...remainProps}
    />
);

const styles = {
    banner: {
        display: 'flex',
        alignItems: 'center',
        height: dimens.fontSize.bannerSize,
        overflow: 'hidden',
        position: 'relative',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        margin: dimens.spacing.zero,
        padding: dimens.spacing.zero,
        border: dimens.spacing.zero,
        '&:before': {
            background: colors.bannerBackGround
        },
        '&:after,&:before': {
            position: 'absolute',
            zIndex: '1',
            width: '100%',
            height: '100%',
            display: 'block',
            left: dimens.spacing.zero,
            top: dimens.spacing.zero,
            content: "''"
        }
    }
};

QFBanner.propTypes = {
    classes: PropTypes.object.isRequired,
    style: PropTypes.string,
    image: PropTypes.string
};

QFBanner.defaultProps = {
    style: undefined,
    image: undefined
};

export default withStyles(styles)(QFBanner);
