import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {SocialIconList} from '../components/SocialIconList';
import {QFText} from '../components/QFText';
import {strings} from '../i18n';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

export const FooterContent = ({ classes, props }) => {
    return (
        <footer style={styles.container} className={classes.root} {...props}>
            <SocialIconList />
            <QFText text={strings.footer.title} className={classes.textStyle} />
        </footer>
    );
};
const styles = {
    root: {
        width: '100%',
        display: 'flex',
        position: 'fixed',
        bottom: 0,
        backgroundColor: colors.primaryColorDark,
        padding: dimens.spacing.medium,
        flexDirection: 'column',
        alignItems: 'center',
        color: colors.primaryText
    },
    textStyle: {
        color: '#FFFFFF',
        align: 'center'
    }
};
export const Footer = withStyles(styles)(FooterContent);
Footer.propTypes = {
    classes: PropTypes.object
};
