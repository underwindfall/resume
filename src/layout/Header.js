import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash.throttle';
import { makeStyles } from '@material-ui/styles';
import { useSetState } from '../hooks/useSetState';
import { PageContainer } from '../container/PageContainer';
import { QFBanner } from '../components/QFBanner';
import { QFAppBar, WEB_APP_BAR_HEIGHT } from '../components/QFAppBar';
import { QFAvatar } from '../components/QFAvatar';
import { QFFab } from '../components/QFFab';
import { BannerInfo } from '../components/BannerInfo';
import { resolver } from '../res/resolver';
import * as dimens from '../res/dimens';

const SCROLL_THROTTLE_VALUE = 10;

const useStyles = makeStyles({
  bannerStyle: {
    justifyContent: 'center',
  },
  avatar: {
    zIndex: 10,
    marginTop: -dimens.fontSize.avatarSize / 2,
    textAlign: 'center',
    '& img': {
      margin: '0 auto',
    },
  },
  showAvatar: {
    opacity: 1,
    transform: 'translate(0, 0)',
    transition: 'all 1s linear',
  },
  hideAvatar: {
    opacity: 0,
    transform: `translate(-48%, -120%) scale(0.1)`,
    transition: 'all 1s linear',
  },
  none: {
    display: 'none',
  },
});

export const Header = ({
  changeColorOnScrollHeight = dimens.fontSize.bannerSize,
  ...remainProps
}) => {
  const avatarRef = useRef();
  const classes = useStyles();
  const [state, setState] = useSetState({
    shouldChangeColor: false,
    shouldHideTitle: false,
    showAvatarLogo: false,
    showFAB: false,
  });

  const { shouldChangeColor, shouldHideTitle, showAvatarLogo, showFAB } = state;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('transitionend', handleTransitionEnd);
    };
  });

  const handleScroll = () => {
    const windowsScrollTop = window.pageYOffset;
    setState({
      shouldChangeColor: windowsScrollTop > changeColorOnScrollHeight - WEB_APP_BAR_HEIGHT,
      shouldHideTitle: windowsScrollTop > changeColorOnScrollHeight / 2,
      showAvatarLogo: shouldHideTitle,
      showFAB: windowsScrollTop > window.innerHeight * 1.2,
    });
  };

  const handleTransitionEnd = () =>
    throttle(() => {
      const { current } = avatarRef;
      if (shouldHideTitle) {
        current.classList.add(classes.none);
      } else {
        current.classList.remove(classes.none);
      }
      setState({ showAvatarLogo: shouldHideTitle });
    }, SCROLL_THROTTLE_VALUE);

  const avatarClass = classNames({
    [classes.avatar]: true,
    [classes.hideAvatar]: shouldHideTitle,
    [classes.showAvatar]: !shouldHideTitle,
  });

  return (
    <PageContainer {...remainProps}>
      <QFAppBar shouldChangeColor={shouldChangeColor} showAvatarLogo={showAvatarLogo} />
      <QFBanner image={resolver.bannerImage} className={classes.bannerStyle}>
        <BannerInfo />
      </QFBanner>
      <div className={avatarClass} ref={avatarRef}>
        <QFAvatar image={resolver.avatar} />
      </div>
      {showFAB && <QFFab />}
    </PageContainer>
  );
};

Header.propTypes = {
  changeColorOnScrollHeight: PropTypes.number,
};
