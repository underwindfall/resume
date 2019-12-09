import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export const RowContainer = ({
    style = {},
    children,
    className = undefined,
    ...remainProps
}) => {
    const classes = useStyles();
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

RowContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object
};
