import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { QFText } from './QFText';
import { QFButton } from './QFButton';
import { RowContainer } from '../container/RowContainer';
import { infoText } from '../styles';
import { strings } from '../i18n';
import * as dimens from '../res/dimens';

const handleClick = url => () => window.open(url, '_blank');

const useStyles = makeStyles({
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: dimens.spacing.zero,
  },
  name: {
    ...infoText,
    marginTop: dimens.spacing.xxLarge,
    fontWeight: 700,
  },
  title: {
    ...infoText,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  icon: {
    margin: dimens.spacing.mSmall,
  },
});

export const ProfileInfo = ({ ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.infoContainer} {...props}>
      <QFText className={classes.name} text={strings.about.info.author} font="bold" variant="h3" />
      <QFText className={classes.title} text={strings.about.info.title} font="bold" variant="h5" />
      <RowContainer className={classes.iconContainer}>
        <QFButton
          justIcon
          link
          className={classes.icon}
          onClick={handleClick('https://github.com/underwindfall')}
        >
          <i className={'fab fa-github'} />
        </QFButton>
        <QFButton
          justIcon
          link
          className={classes.icon}
          onClick={handleClick('https://www.linkedin.com/in/qifan-yang/')}
        >
          <i className={'fab fa-linkedin'} />
        </QFButton>
      </RowContainer>
    </div>
  );
};

ProfileInfo.propTypes = {};
