import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import QFText from '../components/QFText';
import SocialIconList from '../components/SocialIconList';
import { strings } from '../i18n';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const Footer = ({ classes, ...props }) => {
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
};
export default withStyles(styles)(Footer);

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};
