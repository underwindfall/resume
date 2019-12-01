import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';
import { withStyles } from '@material-ui/core';
import SectionContainer from '../container/SectionContainer';
import PageContainer from '../container/PageContainer';
import SkillInfo from '../components/skill/SkillInfo';
import { strings } from '../i18n';
import * as dimens from '../res/dimens';

const Skills = ({ classes, skills, ...remainProps }) => {
    return (
        <Fade>
            <PageContainer className={classes.container}>
                <SectionContainer
                    sectionIcon={strings.skills.icon}
                    sectionTitle={strings.skills.title}
                >
                    <SkillInfo />
                </SectionContainer>
            </PageContainer>
        </Fade>
    );
};
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: dimens.spacing.xxxLarge
    }
};
Skills.propTypes = {
    classes: PropTypes.object.isRequired,
    skills: PropTypes.object.isRequired
};
Skills.defaultProps = {
    skills: []
};

export default withStyles(styles)(Skills);
