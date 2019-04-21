import React from 'react';
import GridContainer from '../container/GridContainer';
import { withStyles } from '@material-ui/core/styles';
import QFText from './QFText';
import QFButton from './QFButton';
import { infoText } from '../styles';
import { strings } from '../i18n';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';
import QFGridItem from './QFGridItem';

const openTab = url => () => window.open(url, '_blank');

const BannerInfo = ({ classes, ...remainProps }) => {
    return (
        <GridContainer
            direction="column"
            justify="center"
            alignItems="center"
            style={styles.textContainer}
            spacing={24}
            {...remainProps}
        >
            <QFGridItem xs={12} sm={12} md={12}>
                <QFText
                    font="bold"
                    className={classes.text}
                    text={strings.header.bannerInfo.word}
                />
            </QFGridItem>
            <QFGridItem xs={12} sm={12} md={12}>
                <QFButton
                    target="_blank"
                    color="download"
                    onClick={openTab(`${process.env.PUBLIC_URL}/resume.pdf`)}
                >
                    {strings.header.bannerInfo.download}
                </QFButton>
            </QFGridItem>
        </GridContainer>
    );
};
const styles = {
    textContainer: {
        marginTop: dimens.spacing.zero,
        textAlign: 'center',
        zIndex: 10
    },
    text: {
        ...infoText,
        textAlign: 'center',
        color: colors.white,
        fontSize: dimens.fontSize.bannerInfoTitle,
        fontWeight: 500
    }
};

export default withStyles(styles)(BannerInfo);
