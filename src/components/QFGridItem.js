import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid, withStyles } from '@material-ui/core';
import * as dimens from '../res/dimens';

const QFGridItem = ({ classes, children, className, ...remainProps }) => {
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
const styles = {
    grid: {
        position: 'relative',
        width: '100vh',
        minHeight: '1px',
        paddingRight: dimens.spacing.sLarge,
        paddingLeft: dimens.spacing.sLarge,
        flexBasis: 'auto'
    }
};
QFGridItem.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
};
QFGridItem.defaultProps = {
    className: ''
};

export default withStyles(styles)(QFGridItem);
