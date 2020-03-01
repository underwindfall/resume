import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconButton, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles = makeStyles({
  success: {
    backgroundColor: colors.secondaryDarkColor,
  },
  error: {
    backgroundColor: colors.errorColor,
  },
  info: {
    backgroundColor: colors.accentColor,
  },
  warning: {
    backgroundColor: colors.accentColorLight,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: dimens.spacing.medium,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

export const QFSnackBarContent = props => {
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];
  const classes = useStyles();
  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
};

QFSnackBarContent.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};
