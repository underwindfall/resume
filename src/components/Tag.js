import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const useStyles = makeStyles({
    tag: {
        color: colors.secondaryDarkColor,
        marginTop: dimens.spacing.mSmall,
        marginRight: dimens.spacing.mSmall
    }
});

export const Tag = ({ text = '', ...props }) => {
    const classes = useStyles();
    return <Chip {...props} className={classes.tag} label={text} />;
};

Tag.propTypes = {
    text: PropTypes.string.isRequired
};
