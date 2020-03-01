import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Chip, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as colors from '../../res/colors';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1),
    color: colors.accentColor,
  },
}));

export const SkillChip = ({ icon, text, className, ...remainProps }) => {
  const classes = useStyles();
  const chipClasses = classNames({
    [classes.chip]: true,
    [className]: className !== undefined,
  });
  return (
    <Chip
      {...remainProps}
      avatar={<Avatar src={icon} />}
      label={text}
      className={chipClasses}
      variant="outlined"
      component="div"
    />
  );
};

SkillChip.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
