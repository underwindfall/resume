import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import * as dimens from '../res/dimens';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  grid: {
    marginRight: dimens.spacing.zero,
    marginLeft: dimens.spacing.zero,
    width: 'auto',
  },
});

export const GridContainer = ({ children, style, className = '', ...remainProps }) => {
  const classes = useStyles();
  return (
    <Grid container {...remainProps} className={classes.grid + ' ' + className} style={style}>
      {children}
    </Grid>
  );
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};
