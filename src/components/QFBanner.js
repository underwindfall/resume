import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const useStyles = makeStyles({
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
});

export const QFBanner = ({ image, style, children, ...remainProps }) => {
    const classes = useStyles();
    return (
        <div
            className={classes.banner}
            style={{ ...style, backgroundImage: 'url(' + image + ')' }}
            {...remainProps}
        >
            {children}
        </div>
    );
};

QFBanner.propTypes = {
    style: PropTypes.object,
    image: PropTypes.string,
    children: PropTypes.node
};

QFBanner.defaultProps = {
    style: undefined,
    image: undefined
};
