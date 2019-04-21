import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import * as dimens from '../res/dimens';

const styles = {
    grid: {
        marginRight: dimens.spacing.zero,
        marginLeft: dimens.spacing.zero,
        width: 'auto'
    }
};

const GridContainer = ({
    classes,
    children,
    style,
    className,
    ...remainProps
}) => (
    <Grid
        container
        {...remainProps}
        className={classes.grid + ' ' + className}
        style={style}
    >
        {children}
    </Grid>
);

GridContainer.defaultProps = {
    className: ''
};

GridContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object
};

export default withStyles(styles)(GridContainer);
