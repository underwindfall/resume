import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { makeStyles } from '@material-ui/styles';
import { SectionContainer } from '../container/SectionContainer';
import { PageContainer } from '../container/PageContainer';
import { SkillInfo } from '../components/skill/SkillInfo';
import { strings } from '../i18n';
import * as dimens from '../res/dimens';

const useStyles = makeStyles({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: dimens.spacing.xxxLarge
    }
});

export const Skills = ({ skills = [], ...remainProps }) => {
    const classes = useStyles();
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

Skills.propTypes = {
    skills: PropTypes.object.isRequired
};
