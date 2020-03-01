import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as dimens from '../res/dimens';

const useStyles = makeStyles({
  avatar: {
    width: dimens.spacing.logo,
    height: dimens.spacing.logo,
    borderRadius: '50% !important',
    boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
});

export const QFLogo = ({ className, image, style = {}, ...remainProps }) => {
  const classes = useStyles();
  const logoClasses = classNames({
    [classes.avatar]: true,
    [className]: className,
  });
  return <Avatar {...remainProps} alt="avatar" src={image} style={style} className={logoClasses} />;
};

QFLogo.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
};
