import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PageContainer from '../container/PageContainer';
import QFBanner from '../components/QFBanner';
import QFAppBar from '../components/QFAppBar';
import BannerInfo from '../components/BannerInfo';
import { resolver } from '../res/resolver';

// export const HEADER_HEIGHT = 62;

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
            <PageContainer {...remainProps}>
                <QFAppBar mobileOpen={mobileOpen} />
                <QFBanner
                    image={resolver.bannerImage}
                    style={styles.bannerStyle}
                >
                    <BannerInfo />
                </QFBanner>
            </PageContainer>
        );
    }
}

const styles = {
    changeColorOnScroll: {
        height: 200,
        colors: 'white'
    },
    bannerStyle: {
        justifyContent: 'center'
    }
};

Header.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);
