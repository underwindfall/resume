import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { PageContainer } from '../container/PageContainer';
import { QFText } from '../components/QFText';
import { strings } from '../i18n';

const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    }
});

export const IssuePage = ({ props }) => {
    const classes = useStyles();
    return (
        <PageContainer className={classes.root} {...props}>
            <QFText variant="h3" text={strings.issuePage.title} />
            <QFText variant="h4" text={strings.issuePage.content} />
        </PageContainer>
    );
};

IssuePage.propTypes = {};
