import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SocialIcon } from 'react-social-icons';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const socialResources = [
  {
    url: 'https://github.com/underwindfall',
    bgColor: colors.primaryTextColor,
  },
  {
    url: 'https://www.linkedin.com/in/qifan-yang/',
    bgColor: colors.primaryTextColor,
  },
];

const useStyles = makeStyles({
  container: {
    item: true,
    container: true,
    spacing: dimens.spacing.small,
    backgroundColor: colors.transparent,
  },
  item: {
    margin: dimens.spacing.small,
    fontSize: dimens.fontSize.socialIcon,
  },
});

export const SocialIconList = ({ props }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} {...props}>
      {socialResources.map((item, index) => (
        <SocialIcon key={index} {...item} className={classes.item} />
      ))}
    </Grid>
  );
};

SocialIconList.propTypes = {};
