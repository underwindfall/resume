import React from 'react';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const DELAY_SCROLL = 300;
const scrollToTop = () => setTimeout(() => window.scrollTo(0, 0), DELAY_SCROLL);

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    zIndex: 100000,
  },
}));

export const QFFab = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Fab
      {...props}
      color="secondary"
      component="button"
      aria-label="scroll"
      className={classes.fab}
      onClick={scrollToTop}
    >
      <ExpandLessIcon fontSize="large" />
    </Fab>
  );
};

QFFab.propTypes = {};
