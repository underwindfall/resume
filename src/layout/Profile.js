import React from 'react';
import { Fade } from 'react-reveal';
import { makeStyles } from '@material-ui/styles';
import { GridContainer } from '../container/GridContainer';
import { PageContainer } from '../container/PageContainer';
import { QFGridItem } from '../components/QFGridItem';
import { ProfileInfo } from '../components/ProfileInfo';
import { QFText } from '../components/QFText';
import { strings } from '../i18n';
import * as colors from '../res/colors';

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    position: 'relative',
    background: colors.transparent,
    width: '100%',
    margin: '0 auto',
  },
  profile: {
    textAlign: 'center',
    '& img': {
      margin: '0 auto',
    },
  },
  textContainer: {
    textAlign: 'center',
  },
  descriptionContainer: {
    margin: '1.071rem auto 0',
    maxWidth: '600px',
    textAlign: 'center !important',
  },
  description: {
    color: colors.gray,
    fontWeight: 500,
  },
});

export const Profile = ({ props }) => {
  const classes = useStyles();
  return (
    <PageContainer className={classes.container}>
      <Fade left>
        <div className={classes.profile}>
          <GridContainer justify="center" {...props}>
            <QFGridItem className={classes.textContainer} xs={12} sm={12} md={6}>
              <ProfileInfo />
            </QFGridItem>
          </GridContainer>
          <div className={classes.descriptionContainer}>
            <QFText
              text={strings.about.info.descriptionOne}
              font="regular"
              variant="h4"
              className={classes.description}
            />
            <QFText
              text={strings.about.info.descriptionTwo}
              font="regular"
              variant="h4"
              className={classes.description}
            />
          </div>
        </div>
      </Fade>
    </PageContainer>
  );
};

Profile.propTypes = {};
