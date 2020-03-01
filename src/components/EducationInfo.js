import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { GridContainer } from '../container/GridContainer';
import { QFGridItem } from './QFGridItem';
import { QFText } from './QFText';
import { responsiveContainer } from '../styles';
import * as dimens from '../res/dimens';
import * as colors from '../res/colors';

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: dimens.spacing.sLarge,
    paddingLeft: dimens.spacing.sLarge,
    marginRight: 'auto',
    marginLeft: 'auto',
    ...responsiveContainer(theme),
  },
  container: {
    lineHeight: '27px',
    width: 'inherit',
    margin: '0 auto',
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  educationYearContainer: {
    background: colors.accentColor,
    textAlign: 'center',
  },
  desContainer: {
    [theme.breakpoints.up('md')]: {
      paddingRight: dimens.spacing.sLarge,
      paddingLeft: dimens.spacing.sLarge,
    },
    textAlign: 'start',
  },
  collegeName: {
    color: colors.primaryColorDark,
  },
  branch: {
    color: colors.primaryColorLight,
  },
  description: {
    fontSize: dimens.spacing.sLarge,
    color: colors.primaryColorLight,
  },
  header: {
    color: colors.primaryTextColor,
    fontSize: dimens.spacing.large,
    fontWeight: 'bold',
  },
}));

export const EducationInfo = ({ items = [], ...remainProps }) => {
  const classes = useStyles();
  return (
    <List className={classes.root} {...remainProps}>
      {items.map((item, index) => (
        <ListItem alignItems="flex-start" key={index}>
          <GridContainer
            justify="center"
            alignItems="center"
            container
            spacing={5}
            className={classes.container}
          >
            <QFGridItem xs={12} sm={12} md={4} className={classes.educationYearContainer}>
              <Fade left>
                <QFText text={item.time} font="bold" className={classes.header} />
                <QFText text={item.title} font="bold" className={classes.header} />
              </Fade>
            </QFGridItem>

            <QFGridItem xs={12} sm={12} md={8} className={classes.desContainer}>
              <Fade right>
                <QFText text={item.collegeName} variant="h4" className={classes.collegeName} />
                <QFText text={item.branch} variant="h5" className={classes.branch} />
                <QFText paragraph text={item.description} className={classes.description} />
              </Fade>
            </QFGridItem>
          </GridContainer>
        </ListItem>
      ))}
    </List>
  );
};

EducationInfo.propTypes = {
  items: PropTypes.array.isRequired,
};
