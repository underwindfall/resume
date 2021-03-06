import React from 'react';
import classNames from 'classnames';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SectionContainer } from '../container/SectionContainer';
import { PageContainer } from '../container/PageContainer';
import { GridContainer } from '../container/GridContainer';
import { QFGridItem } from '../components/QFGridItem';
import { QFButton } from '../components/QFButton';
import { QFText } from '../components/QFText';
import { useTimeout } from '../hooks/useTimeout';
import { responsiveContainer } from '../styles';
import { strings } from '../i18n';
import * as dimens from '../res/dimens';
import * as colors from '../res/colors';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: dimens.spacing.xxxLarge,
    marginBottom: dimens.spacing.xxxLarge,
  },
  grid: {
    ...responsiveContainer(theme),
  },
  item: {
    textAlign: 'center',
  },
  section: {
    padding: '70px 0',
  },
  title: {
    color: colors.primaryTextDarkColor,
    margin: '1.75rem 0 0.875rem',
    fontWeight: '700',
    marginBottom: '50px',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
    textAlign: 'center',
  },
  description: {
    color: colors.primaryTextDarkColor,
    textAlign: 'center',
    fontWeight: 200,
    marginBottom: dimens.spacing.large,
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
}));

export const Contact = ({ props }) => {
  const { handleAction, loading, success } = useTimeout(
    () => (window.location = new URL('mailto:yangqifan02@gmail.com', window.location).toString()),
  );
  const classes = useStyles();
  const buttonClassname = classNames({
    [classes.buttonSuccess]: success,
  });

  return (
    <PageContainer className={classes.container}>
      <SectionContainer sectionIcon={strings.contact.icon} sectionTitle={strings.contact.title}>
        <div className={classes.section} {...props}>
          <GridContainer justify="center" alignItems="center" className={classes.grid}>
            <QFGridItem cs={12} sm={12} md={8} className={classes.item}>
              <QFText
                text={strings.contact.description}
                className={classes.description}
                variant="h4"
              />
              <QFButton
                color="download"
                disabled={loading}
                className={buttonClassname}
                onClick={handleAction}
              >
                SEND
              </QFButton>
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </QFGridItem>
          </GridContainer>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

Contact.propTypes = {};
