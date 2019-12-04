import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconButton, AppBar, Toolbar, Hidden, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Menu from '@material-ui/icons/Menu';
import { HeaderLinks } from './HeaderLinks';
import { CountryFlag } from './countryflag/CountryFlag';
import { QFText } from './QFText';
import { QFLogo } from './QFLogo';
import { setValue } from '../utils/Storage';
import { countries } from './countryflag/countries';
import { boxShadow, transition } from '../styles';
import { resolver } from '../res/resolver';
import { strings } from '../i18n';
import * as dimens from '../res/dimens';
import * as colors from '../res/colors';

export const WEB_APP_BAR_HEIGHT = 50;

const useStyles = makeStyles({
    appBar: {
        display: 'flex',
        border: '0',
        borderRadius: '3px',
        paddingTop: dimens.spacing.mSmall,
        paddingBottom: dimens.spacing.mSmall,
        paddingLeft: dimens.spacing.mSmall,
        paddingRight: dimens.spacing.zero,
        width: '100%',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        position: 'fixed',
        zIndex: '1100',
        color: colors.white,
        backgroundColor: colors.transparent,
        boxShadow:
            '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)'
    },
    container: {
        flex: 1,
        height: WEB_APP_BAR_HEIGHT,
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexWrap: 'nowrap'
    },
    appResponsive: {
        margin: '20px 10px'
    },
    drawerPaper: {
        position: 'fixed',
        display: 'block',
        ...boxShadow,
        ...transition,
        border: 'none',
        bottom: dimens.spacing.zero,
        top: dimens.spacing.zero,
        height: '100vh',
        paddingRight: dimens.spacing.zero,
        paddingLeft: dimens.spacing.zero,
        right: dimens.spacing.zero,
        left: 'auto',
        width: dimens.fontSize.drawerWidth,
        visibility: 'visible',
        overflowY: 'visible',
        borderTop: 'none',
        textAlign: 'left',
        transitionProperty: 'top, bottom, width',
        transitionDuration: '.2s, .2s, .35s',
        transitionTimingFunction: 'linear, linear, ease'
    },
    flex: {
        flex: 1
    },
    title: {
        padding: '0.9375rem',
        fontSize: dimens.fontSize.title,
        color: 'inherit',
        textTransform: 'uppercase'
    },
    changeColor: {
        color: '#555',
        backgroundColor: '#fff !important'
    }
});

export const QFAppBar = ({
    shouldChangeColor,
    showAvatarLogo,
    ...remainProps
}) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () =>
        setMobileOpen(prevMobileOpen => !prevMobileOpen);

    const handleClickLanguage = language => () => {
        setValue(language);
        window.location.reload();
    };

    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes.changeColor]: shouldChangeColor
    });

    return (
        <AppBar className={appBarClasses} {...remainProps}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    {showAvatarLogo ? (
                        <QFLogo image={resolver.avatar} />
                    ) : (
                        <QFText
                            text={strings.header.title}
                            className={classes.title}
                            font="bold"
                        />
                    )}
                </div>
                <Hidden smDown>
                    {countries.map((country, index) => (
                        <CountryFlag
                            key={index}
                            code={country.iso2_cc}
                            styleProps={{
                                fontSize: '2rem'
                            }}
                            onClick={handleClickLanguage(country.language)}
                        />
                    ))}
                    <HeaderLinks changeColor={mobileOpen} />
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                    >
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    onClose={handleDrawerToggle}
                >
                    <div className={classes.appResponsive}>
                        <HeaderLinks changeColor={mobileOpen} />
                    </div>
                </Drawer>
            </Hidden>
        </AppBar>
    );
};

QFAppBar.propTypes = {
    shouldChangeColor: PropTypes.bool,
    showAvatarLogo: PropTypes.bool
};
QFAppBar.defaultProps = {
    shouldChangeColor: false,
    showAvatarLogo: false
};
