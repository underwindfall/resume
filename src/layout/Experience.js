import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SectionContainer from '../container/SectionContainer';
import PageContainer from '../container/PageContainer';
import {Timeline} from '../components/timeline/timeline';
import {strings} from '../i18n';
import * as dimens from '../res/dimens';

const Experience = ({ classes, experiences, ...remainProps }) => {
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
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: dimens.spacing.xxxLarge
    }
};
Experience.propTypes = {
    classes: PropTypes.object.isRequired,
    experiences: PropTypes.array.isRequired
};
Experience.defaultProps = {
    experiences: {}
};

export default withStyles(styles)(Experience);
