import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-scroll';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import * as dimens from '../res/dimens';
import * as colors from '../res/colors';
import QFText from './QFText';

class QFLink extends PureComponent {
    state = {
        isLinkActive: false
    };

    handleChangeActiveLink = () => {
        this.setState(state => ({
            isLinkActive: !state.isLinkActive
        }));
    };

    render() {
        const {
            to,
            title,
            enableNavigationItemClass,
            classes,
            offset,
            ...remainProps
        } = this.props;
        const { isLinkActive } = this.state;
        return (
            <Link
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={offset}
                className={classNames({
                    [classes.scrollChor]: true,
                    [classes.navigationItem]: enableNavigationItemClass
                })}
            >
                onChangeActive={this.handleChangeActiveLink}
                {...remainProps}
                >
                <QFText
                    className={classNames({
                        [classes.activeTitle]: isLinkActive
                    })}
                    text={title}
                />
                <span
                    className={classNames({
                        [classes.spanClass]: true,
                        [classes.activeSpanClass]: isLinkActive
                    })}
                />
            </Link>
        );
    }
}

const styles = theme => ({
    scrollChor: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: '14',
        fontWeight: 700,
        lineHeight: 1,
        textDecoration: 'none',
        marginRight: dimens.spacing.xxLarge,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        [theme.breakpoints.down('md')]: {
            marginRight: dimens.spacing.zero,
            marginBottom: dimens.spacing.xxLarge,
            color: colors.white
        }
    },
    navigationItem: {
        color: 'black',
        [theme.breakpoints.down('md')]: {
            color: colors.white
        }
    },
    spanClass: {
        height: dimens.fontSize.span,
        marginTop: dimens.spacing.lMedium,
        width: '100%',
        backgroundColor: colors.transparent
    },
    activeSpanClass: {
        backgroundColor: colors.primaryColor,
        [theme.breakpoints.down('md')]: {
            backgroundColor: colors.transparent
        }
    }
});

QFLink.propTypes = {
    ...Link.propTypes,
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    enableNavigationItemClass: PropTypes.bool.isRequired,
    offset: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired
};

QFLink.defaultProps = {
    enableNavigationItemClass: false,
    offset: -120
};

export default withStyles(styles)(QFLink);
