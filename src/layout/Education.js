import React from 'react';
import PropTypes from 'prop-types';
import {Fade} from 'react-reveal';
import {withStyles} from '@material-ui/core/styles';
import SectionContainer from '../container/SectionContainer';
import PageContainer from '../container/PageContainer';
import EducationInfo from '../components/EducationInfo';
import {strings} from '../i18n';
import * as dimens from '../res/dimens';

const Education = ({ classes, education, ...remainProps }) => {
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
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: dimens.spacing.xxxLarge
    }
};
Education.propTypes = {
    classes: PropTypes.object.isRequired,
    education: PropTypes.array.isRequired
};
Education.defaultProps = {
    education: []
};

export default withStyles(styles)(Education);
