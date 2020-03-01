import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';
import { makeStyles } from '@material-ui/styles';
import { SectionContainer } from '../container/SectionContainer';
import { PageContainer } from '../container/PageContainer';
import { Timeline } from '../components/timeline/timeline';
import { strings } from '../i18n';
import * as dimens from '../res/dimens';

const useStyles = makeStyles({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimens.spacing.xxxLarge,
  },
});

export const Experience = ({ experiences = {}, ...remainProps }) => {
  const classes = useStyles();
  return (
    <PageContainer className={classes.container}>
      <SectionContainer
        sectionIcon={strings.experience.icon}
        sectionTitle={strings.experience.title}
      >
        <Timeline items={experiences} {...remainProps} />
      </SectionContainer>
    </PageContainer>
  );
};

Experience.propTypes = {
  experiences: PropTypes.array.isRequired,
};
