import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash.throttle';
import { withStyles } from '@material-ui/core/styles';
import PageContainer from '../container/PageContainer';
import QFBanner from '../components/QFBanner';
import QFAppBar, { WEB_APP_BAR_HEIGHT } from '../components/QFAppBar';
import QFAvatar from '../components/QFAvatar';
import QFFab from '../components/QFFab';
import BannerInfo from '../components/BannerInfo';
import { resolver } from '../res/resolver';
import * as dimens from '../res/dimens';

const SCROLL_THROTTLE_VALUE = 10;

class Header extends Component {
    avatarRef;
    constructor(props) {
        super(props);
        this.state = {
            shouldChangeColor: false,
            shouldHideTitle: false,
            showAvatarLogo: false,
            showFAB: false
        };
        this.handleScroll = throttle(this.handleScroll, SCROLL_THROTTLE_VALUE);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('transitionend', this.handleTransitionEnd);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('transitionend', this.handleTransitionEnd);
    }

    handleScroll = () => {
        const { changeColorOnScrollHeight } = this.props;
        const windowsScrollTop = window.pageYOffset;
        this.setState(state => ({
            shouldChangeColor:
                windowsScrollTop >
                changeColorOnScrollHeight - WEB_APP_BAR_HEIGHT,
            shouldHideTitle: windowsScrollTop > changeColorOnScrollHeight / 2,
            showAvatarLogo: state.shouldHideTitle,
            showFAB: windowsScrollTop > window.innerHeight * 1.2
        }));
    };

    handleTransitionEnd = () => {
        if (this.avatarRef) {
            const { classes } = this.props;
            const { shouldHideTitle } = this.state;
            if (shouldHideTitle) {
                this.avatarRef.classList.add(classes.none);
            } else {
                this.avatarRef.classList.remove(classes.none);
            }
            this.setState(state => ({
                showAvatarLogo: state.shouldHideTitle
            }));
        }
    };

    render() {
        const { classes } = this.props;
        const {
            shouldChangeColor,
            shouldHideTitle,
            showAvatarLogo,
            showFAB
        } = this.state;
        const avatarClass = classNames({
            [classes.avatar]: true,
            [classes.hideAvatar]: shouldHideTitle,
            [classes.showAvatar]: !shouldHideTitle
        });
        return (
            <PageContainer>
                <QFAppBar
                    shouldChangeColor={shouldChangeColor}
                    showAvatarLogo={showAvatarLogo}
                />
                <QFBanner
                    image={resolver.bannerImage}
                    style={styles.bannerStyle}
                >
                    <BannerInfo />
                </QFBanner>
                <div
                    className={avatarClass}
                    ref={ref => {
                        this.avatarRef = ref;
                    }}
                >
                    <QFAvatar image={resolver.avatar} />
                </div>
                {showFAB && <QFFab />}
            </PageContainer>
        );
    }
}

const styles = {
    bannerStyle: {
        justifyContent: 'center'
    },
    avatar: {
        zIndex: 10,
        marginTop: -dimens.fontSize.avatarSize / 2,
        textAlign: 'center',
        '& img': {
            margin: '0 auto'
        }
    },
    showAvatar: {
        opacity: 1,
        transform: 'translate(0, 0)',
        transition: 'all 1s linear'
    },
    hideAvatar: {
        opacity: 0,
        transform: `translate(-48%, -120%) scale(0.1)`,
        transition: 'all 1s linear'
    },
    none: {
        display: 'none'
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
