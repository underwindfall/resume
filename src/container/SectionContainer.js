import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import QFButton from '../components/QFButton';
import RowContainer from './RowContainer';
import PageContainer from './PageContainer';
import QFText from '../components/QFText';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const iconClassName = sectionIcon => {
    switch (sectionIcon.toLowerCase()) {
        case 'experience':
            return 'suitcase';
        case 'skills':
            return 'palette';
        case 'education':
            return 'graduation-cap';
        case 'contact':
            return 'envelope-open';
        default:
            break;
    }
};

const SectionContainer = ({
    classes,
    style,
    sectionIcon,
    sectionTitle,
    children,
    ...remainProps
}) => {
    return (
        <PageContainer
            className={classes.container}
            style={style}
            {...remainProps}
        >
            <RowContainer className={classes.rowContainer}>
                <QFButton justIcon link className={classes.icon}>
                    <i className={`fas fa-${iconClassName(sectionIcon)}`} />
                </QFButton>
                <QFText
                    variant="h3"
                    font="bold"
                    className={classes.textIcon}
                    text={sectionTitle}
                />
            </RowContainer>
            <PageContainer className={classes.itemContainer}>
                {children}
            </PageContainer>
        </PageContainer>
    );
};
const styles = theme => ({
    container: {
        zIndex: '3',
        alignItems: 'center'
    },
    icon: {
        margin: dimens.spacing.mSmall,
        color: colors.primaryColorDark
    },
    rowContainer: {
        marginTop: dimens.spacing.mLarge,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textIcon: {
        fontWeight: 700,
        padding: dimens.spacing.zero,
        marginLeft: dimens.spacing.lMedium
    },
    itemContainer: {
        background: colors.white,
        position: 'relative',
        margin: '0 auto',
        marginTop: dimens.spacing.large,
        padding: dimens.spacing.large,
        borderRadius: '6px',
        boxShadow:
            '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
    }
});

SectionContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    sectionIcon: PropTypes.oneOf([
        'experience',
        'skills',
        'education',
        'contact'
    ]).isRequired,
    children: PropTypes.node,
    style: PropTypes.object
};
SectionContainer.defaultProps = {
    style: {},
    className: undefined
};

export default withStyles(styles)(SectionContainer);
