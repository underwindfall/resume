import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const RowContainer = ({ classes, style, children, ...remainProps }) => {
    return (
        <div className={classes.container} style={style} {...remainProps}>
            {children}
        </div>
    );
};
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
};

RowContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    style: PropTypes.object
};
RowContainer.defaultProps = {
    style: {},
    className: undefined
};

export default withStyles(styles)(RowContainer);
