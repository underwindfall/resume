import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';
import { makeStyles } from '@material-ui/styles';
import { SectionContainer } from '../container/SectionContainer';
import { PageContainer } from '../container/PageContainer';
import { EducationInfo } from '../components/EducationInfo';
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

export const Education = ({ education = [], ...remainProps }) => {
  const classes = useStyles();
  return (
    <Fade>
      <PageContainer className={classes.container} {...remainProps}>
        <SectionContainer
          sectionIcon={strings.education.icon}
          sectionTitle={strings.education.title}
        >
          <EducationInfo items={education} />
        </SectionContainer>
      </PageContainer>
    </Fade>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};
