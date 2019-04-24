import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SectionContainer from '../container/SectionContainer';
import PageContainer from '../container/PageContainer';
import QFTimeLine from '../components/QFTimeLine';
import { strings } from '../i18n';

const Experience = ({ classes, experiences, ...remainProps }) => {
    return (
        <PageContainer>
            <SectionContainer
                sectionIcon={strings.experience.icon}
                sectionTitle={strings.experience.title}
            >
                <QFTimeLine items={experiences} {...remainProps} />
            </SectionContainer>
        </PageContainer>
    );
};
const styles = {};
Experience.propTypes = {
    classes: PropTypes.object.isRequired,
    experiences: PropTypes.object.isRequired
};
Experience.defaultProps = {
    experiences: {}
};

export default withStyles(styles)(Experience);
