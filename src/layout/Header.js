import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PageContainer from '../container/PageContainer';
import QFBanner from '../components/QFBanner';
import QFAppBar from '../components/QFAppBar';
import BannerInfo from '../components/BannerInfo';
import { resolver } from '../res/resolver';
import * as dimens from '../res/dimens';

// export const HEADER_HEIGHT = 62;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
            shouldChangeColor: false
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
        const { changeColorOnScrollHeight } = this.props;
        const windowsScrollTop = window.pageYOffset;
        this.setState({
            shouldChangeColor: windowsScrollTop > changeColorOnScrollHeight
        });
    };

    render() {
        const { mobileOpen, shouldChangeColor } = this.state;
        return (
            <PageContainer>
                <QFAppBar
                    mobileOpen={mobileOpen}
                    shouldChangeColor={shouldChangeColor}
                />
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
    bannerStyle: {
        justifyContent: 'center'
    }
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    changeColorOnScrollHeight: PropTypes.number
};
Header.defaultProps = {
    changeColorOnScrollHeight: dimens.fontSize.bannerSize
};
export default withStyles(styles)(Header);
