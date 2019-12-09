import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as dimens from '../res/dimens';

const useStyles = makeStyles({
    grid: {
        position: 'relative',
        width: '100vh',
        minHeight: '1px',
        paddingRight: dimens.spacing.sLarge,
        paddingLeft: dimens.spacing.sLarge,
        flexBasis: 'auto'
    }
});

export const QFGridItem = ({ children, className = '', ...remainProps }) => {
    const classes = useStyles();
    const containerClasses = classNames({
        [classes.grid]: true,
        [className]: className !== undefined
    });
    return (
        <Grid item {...remainProps} className={containerClasses}>
            {children}
        </Grid>
    );
};

QFGridItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
