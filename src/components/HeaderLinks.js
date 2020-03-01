import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { QFText } from './QFText';
import { strings } from '../i18n';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const useStyles = makeStyles(theme => ({
  list: {
    listStyle: 'none',
    margin: dimens.spacing.zero,
    paddingLeft: dimens.spacing.zero,
    paddingTop: dimens.spacing.zero,
    paddingBottom: dimens.spacing.zero,
    color: 'inherit',
  },
  listItem: {
    float: 'left',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: dimens.spacing.zero,
    padding: dimens.spacing.zero,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: `calc(100% - ${dimens.spacing.xxLarge}px)`,
        display: 'block',
        height: '1px',
        marginLeft: dimens.spacing.sLarge,
      },
    },
  },
  navLink: {
    color: 'inherit',
    position: 'relative',
    padding: '0.9rem',
    fontWeight: '400',
    fontSize: dimens.fontSize.link,
    borderRadius: '3px',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    '&:hover,&:focus': {
      color: 'inherit',
      background: colors.backgroundGrey,
    },
    [theme.breakpoints.down('sm')]: {
      width: `calc(100% - ${dimens.spacing.xxLarge}px)`,
      marginLeft: dimens.spacing.sLarge,
      marginBottom: dimens.spacing.medium,
      marginTop: dimens.spacing.medium,
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
    },
  },
  changeColor: {
    color: colors.secondaryDarkColor,
  },
}));

export const HeaderLinks = ({ changeColor, ...props }) => {
  const classes = useStyles();
  const listItemClasses = classNames({
    [classes.listItem]: true,
    [classes.changeColor]: changeColor,
  });

  return (
    <List className={classes.list} {...props}>
      <ListItem className={listItemClasses}>
        <a href="#sectionProfile">
          <QFText text={strings.header.list.About} className={classes.navLink} font="regular" />
        </a>
      </ListItem>
      <ListItem className={listItemClasses}>
        <a href="#sectionExperience">
          <QFText
            text={strings.header.list.Experience}
            className={classes.navLink}
            font="regular"
          />
        </a>
      </ListItem>
      <ListItem className={listItemClasses}>
        <a href="#sectionSkills">
          <QFText text={strings.header.list.Skills} className={classes.navLink} font="regular" />
        </a>
      </ListItem>
      <ListItem className={listItemClasses}>
        <a href="#sectionEducation">
          <QFText text={strings.header.list.Education} className={classes.navLink} font="regular" />
        </a>
      </ListItem>
      <ListItem className={listItemClasses}>
        <a href="#sectionContact">
          <QFText text={strings.header.list.Contact} className={classes.navLink} font="regular" />
        </a>
      </ListItem>
    </List>
  );
};

HeaderLinks.propTypes = {
  changeColor: PropTypes.bool.isRequired,
};
