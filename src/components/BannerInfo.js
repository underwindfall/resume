import React from 'react';
import classNames from 'classnames';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { GridContainer } from '../container/GridContainer';
import { QFText } from './QFText';
import { QFButton } from './QFButton';
import { QFGridItem } from './QFGridItem';
import { useTimeout } from '../hooks/useTimeout';
import { infoText } from '../styles';
import { strings } from '../i18n';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const useStyles = makeStyles({
  textContainer: {
    marginTop: dimens.spacing.zero,
    textAlign: 'center',
    zIndex: 10,
  },
  text: {
    ...infoText,
    textAlign: 'center',
    color: colors.white,
    fontSize: '5em',
    fontWeight: 500,
  },
  buttonProgress: {
    color: colors.accentColorLight,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonSuccess: {
    backgroundColor: colors.secondaryColor,
    '&:hover': {
      backgroundColor: colors.secondaryDarkColor,
    },
  },
});

export const BannerInfo = React.memo(({ props }) => {
  const { handleAction, loading, success } = useTimeout(() =>
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank'),
  );

  const classes = useStyles();
  const buttonClassname = classNames({
    [classes.buttonSuccess]: success,
  });

  return (
    <GridContainer
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.textContainer}
      spacing={3}
      {...props}
    >
      <QFGridItem xs={12} sm={12} md={12}>
        <QFText font="bold" className={classes.text} text={strings.header.bannerInfo.word} />
      </QFGridItem>
      <QFGridItem xs={12} sm={12} md={12}>
        <QFButton
          target="_blank"
          color="download"
          disabled={loading}
          className={buttonClassname}
          onClick={handleAction}
        >
          {strings.header.bannerInfo.download}
        </QFButton>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </QFGridItem>
    </GridContainer>
  );
});
