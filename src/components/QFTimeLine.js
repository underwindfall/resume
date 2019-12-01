import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import PageContainer from '../container/PageContainer';
import GridContainer from '../container/GridContainer';
import QFGridItem from './QFGridItem';
import QFText from './QFText';
import { resolver } from '../res/resolver';
import * as dimens from '../res/dimens';
import * as colors from '../res/colors';

const TimeLineItem = ({
    classes,
    style,
    startTime,
    endTime,
    companyName,
    title,
    description,
    image = resolver.arrowLeft
}) => (
    <GridContainer
        justify="center"
        alignItems="center"
        spacing={24}
        className={classes.workDetails}
    >
        <QFGridItem xs={12} sm={3} md={2} className={classes.workYear}>
            <QFText
                style={{ ...styles.prevY, ...styles.span }}
                text={startTime}
                font="bold"
            />
            <QFText
                style={{ ...styles.afterY, ...styles.span }}
                text={endTime}
                font="bold"
            />
        </QFGridItem>
        <QFGridItem xs={12} sm={9} md={10}>
            <div
                style={{
                    ...styles.arrowPart,
                    backgroundImage: 'url(' + image + ')'
                }}
            />
            <div style={styles.exCon}>
                <QFText
                    text={companyName}
                    variant="h5"
                    className={classes.company}
                />
                <QFText
                    text={title}
                    variant="subtitle1"
                    className={classes.title}
                />
                {/*<QFText text={description} className={classes.description} />*/}
            </div>
        </QFGridItem>
    </GridContainer>
);
const QFTimeLine = ({ items, classes, ...remainProps }) => (
    <PageContainer className={classes.container} {...remainProps}>
        {items.map((item, index) => (
            <TimeLineItem key={index} classes={classes} {...item} />
        ))}
    </PageContainer>
);

const styles = {
    container: {
        alignItems: 'center'
    },
    workDetails: {
        borderLeft: 'dashed 1px #897f8a',
        paddingBottom: dimens.spacing.xxxLarge,
        '& > div:lastChild': {
            paddingBottom: dimens.spacing.zero
        }
    },
    arrowPart: {
        marginLeft: -dimens.spacing.xLarge,
        width: dimens.spacing.mLarge,
        height: dimens.spacing.mLarge,
        background: 'no-repeat 0 0 transparent'
    },
    workYear: {
        color: colors.white,
        fontSize: dimens.fontSize.heading3,
        textAlign: 'center',
        lineHeight: dimens.fontSize.workYearDate
    },
    span: {
        display: 'block',
        fontSize: dimens.fontSize.heading3,
        padding: `${dimens.spacing.medium}px ${dimens.spacing.large}px`,
        whiteSpace: 'nowrap',
        marginBottom: dimens.spacing.small,
        color: colors.primaryTextColor,
        marginRight: dimens.spacing.xLarge
    },
    prevY: {
        backgroundColor: colors.accentColorDark
    },
    afterY: {
        backgroundColor: colors.accentColorLight
    },
    exCon: {
        width: 'auto',
        padding: '0 47px 6px 70px',
        marginLeft: dimens.spacing.sLarge,
        textAlign: 'left'
    },
    company: {
        color: colors.primaryTextDarkColor,
        paddingBottom: '1px',
        marginTop: -dimens.spacing.medium
    },
    title: {
        color: colors.primaryTextDarkColor,
        paddingBottom: dimens.spacing.lMedium
    },
    description: {
        color: colors.secondaryTextColor,
        lineHeight: dimens.spacing.heading1
    }
};

QFTimeLine.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
};
QFTimeLine.defaultProps = {
    items: {}
};
export default withStyles(styles)(QFTimeLine);
