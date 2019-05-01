import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import PageContainer from '../container/PageContainer';
import QFText from '../components/QFText';
import { strings } from '../i18n';

const IssuePage = ({ classes, ...props }) => {
    return (
        <PageContainer className={classes.root} {...props}>
            <QFText variant="h3" text={strings.issuePage.title} />
            <QFText variant="h4" text={strings.issuePage.content} />
        </PageContainer>
    );
};

const styles = {
    root: {
        textAlign: 'center'
    }
};
IssuePage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IssuePage);
