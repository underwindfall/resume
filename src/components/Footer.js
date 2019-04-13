import React from 'react';
import Typography from '@material-ui/core/Typography';
import {strings} from '../i18n/index';
import * as colors from '../res/colors';
import * as dimens from "../res/dimens";

export const Footer = () => {
    return (
        <footer style={styles.container}>
            <Typography style={styles.textStyle}>
                {strings.footer.title}
            </Typography>
        </footer>
    );
};

Footer.propTypes = {};

const styles = {
    container: {
        display: 'flex',
        position: 'fixed',
        width: '100%',
        bottom: 0,
        backgroundColor: colors.darkPrimary,
        padding: dimens.spacing.medium,
        justifyContent: 'center',
        color: colors.white
    },
    textStyle: {
        color: colors.white,
        align: 'center'
    }
};
