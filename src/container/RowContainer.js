import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

const RowContainer = ({
    classes,
    style,
    children,
    className,
    ...remainProps
}) => {
    const containerClasses = classNames({
        [classes.container]: true,
        [className]: className !== undefined
    });
    return (
        <div className={containerClasses} style={style} {...remainProps}>
            {children}
        </div>
    );
};
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

RowContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object
};
RowContainer.defaultProps = {
    style: {},
    className: undefined
};

export default withStyles(styles)(RowContainer);
