import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export const PageContainer = ({ className = undefined, style = {}, children, ...remainProps }) => {
  const classes = useStyles();
  const containerClasses = classNames({
    [classes.container]: true,
    [className]: className !== undefined,
  });
  return (
    <div style={style} className={containerClasses} {...remainProps}>
      {children}
    </div>
  );
};

PageContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};
