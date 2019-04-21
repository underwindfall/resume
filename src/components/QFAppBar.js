import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import HeaderLinks from './HeaderLinks';
import IconButton from '@material-ui/core/es/IconButton';
import MenuIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import QFText from './QFText';
import { boxShadow, transition } from '../styles';
import { strings } from '../i18n';
import * as dimens from '../res/dimens';
import * as colors from '../res/colors';

const WEB_APP_BAR_HEIGHT = 50;

class QFAppBar extends Component {
    render() {
        const { classes, mobileOpen, ...remainProps } = this.props;
        return (
            <AppBar className={classes.appBar} {...remainProps}>
                <Toolbar className={classes.container}>
                    <div className={classes.flex}>
                        <QFText
                            text={strings.header.title}
                            className={classes.title}
                            font="bold"
                        />
                    </div>
                    <Hidden smDown>
                        <HeaderLinks />
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                        >
                            <MenuIcon />
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
                        onClose={this.handleDrawerToggle}
                    >
                        <div className={classes.appResponsive}>
                            <HeaderLinks />
                        </div>
                    </Drawer>
                </Hidden>
            </AppBar>
        );
    }
}

const styles = {
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
    }
};

QFAppBar.propTypes = {
    mobileOpen: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QFAppBar);
