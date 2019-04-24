import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridContainer from '../container/GridContainer';
import QFGridItem from './QFGridItem';
import QFText from './QFText';
import * as dimens from '../res/dimens';
import * as colors from '../res/colors';

const TimeLineItem = ({
    classes,
    style,
    startTime,
    endTime,
    companyName,
    title,
    description
}) => (
    <div>
        <QFGridItem xs={12} sm={3} md={2}>
            <div style={styles.workYear}>
                <QFText
                    style={[styles.prevY, styles.span]}
                    text={startTime}
                    font="bold"
                />
                <QFText
                    style={[styles.afterY, styles.span]}
                    text={endTime}
                    font="bold"
                />
            </div>
        </QFGridItem>
        <QFGridItem xs={12} sm={9} md={10}>
            <div style={styles.arrowPart} />
            <div style={styles.exCon}>
                <QFText
                    text={companyName}
                    variant="h4"
                    className={classes.company}
                />
                <QFText text={title} variant="h5" className={classes.title} />
                <QFText text={description} className={classes.description} />
            </div>
        </QFGridItem>
    </div>
);
const QFTimeLine = ({ items, classes, ...remainProps }) => (
    <GridContainer className={classes.container} {...remainProps}>
        {items.map(item => <TimeLineItem {...item} />)}
    </GridContainer>
);

const styles = {
    container: {},
    workDetails: {
        borderLeft: 'dashed 1px #897f8a',
        paddingBottom: dimens.spacing.xxxLarge,
        '& > div:last-child': {
            paddingBottom: dimens.spacing.zero
        }
    },
    arrowPart: {
        marginLeft: -dimens.spacing.xLarge,
        marginTop: dimens.spacing.xxLarge,
        float: 'left',
        width: dimens.spacing.mLarge,
        height: dimens.spacing.mLarge,
        background: 'url(../images/arrow-left.png) no-repeat 0 0 #FFFFFF'
    },
    workYear: {
        color: colors.white,
        fontSize: dimens.fontSize.heading3,
        lineHeight: dimens.fontSize.workYearDate
    },
    span: {
        display: 'block',
        fontSize: dimens.fontSize.heading3,
        padding: `0 ${dimens.spacing.mLarge}px`,
        whiteSpace: 'nowrap',
        float: 'right',
        marginBottom: dimens.spacing.small,
        marginRight: dimens.spacing.xLarge
    },
    prevY: {
        backgroundColor: colors.accentColorDarkGradient
    },
    afterY: {
        backgroundColor: colors.backgroundLightGradient
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
    items: PropTypes.object.isRequired
};
QFTimeLine.defaultProps = {
    items: {}
};
export default withStyles(styles)(QFTimeLine);
