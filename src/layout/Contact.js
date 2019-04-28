import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SectionContainer from '../container/SectionContainer';
import PageContainer from '../container/PageContainer';
import GridContainer from '../container/GridContainer';
import QFGridItem from '../components/QFGridItem';
import QFButton from '../components/QFButton';
import QFText from '../components/QFText';
import { strings } from '../i18n';
import * as dimens from '../res/dimens';
import * as colors from '../res/colors';

const handleClick = () => {
    window.location = new URL(
        'mailto:yangqifan02@gmail.com',
        window.location
    ).toString();
};
const Contact = ({ classes, ...remainProps }) => {
    return (
        <PageContainer className={classes.container}>
            <SectionContainer
                sectionIcon={strings.contact.icon}
                sectionTitle={strings.contact.title}
            >
                <div className={classes.section} {...remainProps}>
                    <GridContainer
                        justify="center"
                        alignItems="center"
                        className={classes.grid}
                    >
                        <QFGridItem
                            cs={12}
                            sm={12}
                            md={8}
                            className={classes.item}
                        >
                            <QFText
                                text={strings.contact.description}
                                className={classes.description}
                                variant="h4"
                            />
                            <QFButton color="download" onClick={handleClick}>
                                SEND
                            </QFButton>
                        </QFGridItem>
                    </GridContainer>
                </div>
            </SectionContainer>
        </PageContainer>
    );
};
const styles = theme => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: dimens.spacing.xxxLarge,
        marginBottom: dimens.spacing.xxxLarge
    },
    grid: {
        [theme.breakpoints.down('sm')]: {
            width: '400px'
        },
        [theme.breakpoints.up('md')]: {
            width: '750px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '1084px'
        }
    },
    item: {
        textAlign: 'center'
    },
    section: {
        padding: '70px 0'
    },
    title: {
        color: colors.primaryTextDarkColor,
        margin: '1.75rem 0 0.875rem',
        fontWeight: '700',
        marginBottom: '50px',
        marginTop: '30px',
        minHeight: '32px',
        textDecoration: 'none',
        textAlign: 'center'
    },
    description: {
        color: colors.primaryTextDarkColor,
        textAlign: 'center',
        fontWeight: 400,
        marginBottom: dimens.spacing.large
    }
});
Contact.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
