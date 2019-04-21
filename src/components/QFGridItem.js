import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import * as dimens from '../res/dimens';

const QFGridItem = ({ classes, children, className, ...remainProps }) => (
    <Grid item {...remainProps} className={classes.grid + ' ' + className}>
        {children}
    </Grid>
);

const styles = {
    grid: {
        position: 'relative',
        width: '100%',
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
