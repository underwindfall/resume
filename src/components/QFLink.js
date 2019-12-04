import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-scroll';
import {QFText} from './QFText';
import * as dimens from '../res/dimens';
import * as colors from '../res/colors';

const useStyles = makeStyles(theme => ({
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
}));

export const QFLink = ({
    to,
    title,
    enableNavigationItemClass,
    offset,
    ...remainProps
}) => {
    const [isLinkActive, setLinkActive] = useState(false);

    const handleChangeActiveLink = () => setLinkActive(prevState => !prevState);

    const classes = useStyles();
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
            onChangeActive={handleChangeActiveLink}
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
};

QFLink.propTypes = {
    ...Link.propTypes,
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    enableNavigationItemClass: PropTypes.bool.isRequired,
    offset: PropTypes.number.isRequired
};

QFLink.defaultProps = {
    enableNavigationItemClass: false,
    offset: -120
};
