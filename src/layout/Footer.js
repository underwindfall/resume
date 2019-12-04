import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { QFText } from '../components/QFText';
import { SocialIconList } from '../components/SocialIconList';
import { strings } from '../i18n';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        bottom: dimens.spacing.zero,
        backgroundColor: colors.primaryColor,
        paddingLeft: dimens.spacing.medium,
        paddingRight: dimens.spacing.medium,
        paddingTop: dimens.spacing.medium,
        paddingBottom: dimens.spacing.zero,
        color: colors.primaryTextColor
    },
    textStyle: {
        textAlign: 'center',
        color: colors.white,
        marginTop: dimens.spacing.lMedium
    }
});

export const Footer = ({ ...props }) => {
    const classes = useStyles();
    return (
        <footer className={classes.root} {...props}>
            <SocialIconList />
            <QFText text={strings.footer.title} className={classes.textStyle} />
        </footer>
    );
};

Footer.propTypes = {};
