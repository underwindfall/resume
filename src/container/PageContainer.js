import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const PageContainer = ({
    classes,
    className,
    style,
    children,
    ...remainProps
}) => {
    const containerClasses = classNames({
        [classes.container]: true,
        [className]: className !== undefined
    });
    return (
        <div style={style} className={containerClasses} {...remainProps}>
            {children}
        </div>
    );
};
const styles = {
    container: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
};

PageContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object
};

PageContainer.defaultProps = {
    style: {},
    className: undefined
};

export default withStyles(styles)(PageContainer);
