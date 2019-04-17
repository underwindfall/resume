import React, { Component } from 'react';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/es/styles';
import HeaderLinks from '../components/HeaderLinks';
import QFText from '../components/QFText';
import { boxShadow, transition } from '../styles';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false
        };
    }

    handleDrawerToggle = () => {
        this.setState(state => ({
            mobileOpen: !state.mobileOpen
        }));
    };

    render() {
        const { classes, className, ...remainProps } = this.props;

        return (
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.container}>
                    <div className={classes.flex}>
                        <QFText text={'My Resume'} />
                    </div>
                    <Hidden smDown implementation="css">
                        <HeaderLinks />
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={'right'}
                        open={this.state.mobileOpen}
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
        padding: '0.625rem 0',
        marginBottom: '20px',
        color: '#555',
        width: '100%',
        backgroundColor: '#fff',
        boxShadow:
            '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
        transition: 'all 150ms ease 0s',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        position: 'relative',
        zIndex: 'unset'
    },
    container: {
        minHeight: '50px',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexWrap: 'nowrap'
    },
    appResponsive: {
        margin: '20px 10px'
    },
    drawerPaper: {
        border: 'none',
        bottom: '0',
        transitionProperty: 'top, bottom, width',
        transitionDuration: '.2s, .2s, .35s',
        transitionTimingFunction: 'linear, linear, ease',
        width: 260,
        ...boxShadow,
        position: 'fixed',
        display: 'block',
        top: '0',
        height: '100vh',
        right: '0',
        left: 'auto',
        visibility: 'visible',
        overflowY: 'visible',
        borderTop: 'none',
        textAlign: 'left',
        paddingRight: '0px',
        paddingLeft: '0',
        ...transition
    },
    flex: {
        flex: 1
    }
};
export default withStyles(styles)(Header);
