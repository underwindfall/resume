import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/es/styles';
import QFText from '../components/QFText';
import HeaderLinks from '../components/HeaderLinks';
import { boxShadow, transition } from '../styles';
import { strings } from '../i18n';
import * as dimens from '../res/dimens';
import * as colors from '../res/colors';

const WEB_HEADER_HEIGHT = 50;
export const HEADER_HEIGHT = 82;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.headerColorChange);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.headerColorChange);
    }

    handleDrawerToggle = () => {
        this.setState(state => ({
            mobileOpen: !state.mobileOpen
        }));
    };

    headerColorChange = () => {
        const { classes } = this.props;
        const changeColorOnScroll = classes.changeColorOnScroll;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body
                .getElementsByTagName('header')[0]
                .classList.remove(classes.appBarColor);
            document.body
                .getElementsByTagName('header')[0]
                .classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body
                .getElementsByTagName('header')[0]
                .classList.add(classes.appBarColor);
            document.body
                .getElementsByTagName('header')[0]
                .classList.remove(classes[changeColorOnScroll.color]);
        }
    };

    render() {
        const { classes, ...remainProps } = this.props;
        const { mobileOpen } = this.state;

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
        padding: dimens.spacing.lMedium,
        marginBottom: dimens.spacing.mLarge,
        width: '100%',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        position: 'fixed',
        zIndex: '1100',
        color: colors.primaryColorDark,
        backgroundColor: colors.transparent,
        boxShadow:
            '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)'
    },
    container: {
        flex: 1,
        height: WEB_HEADER_HEIGHT,
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
        textTransform: 'uppercase'
    },
    changeColorOnScroll: {
        height: 200,
        colors: 'white'
    }
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    changeColorOnScroll: PropTypes.shape({
        height: PropTypes.number.isRequired
    })
};
export default withStyles(styles)(Header);
