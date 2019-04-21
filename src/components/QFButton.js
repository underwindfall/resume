import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import * as colors from '../res/colors';

const QFButton = ({
    classes,
    color,
    size,
    round,
    simple,
    link,
    justIcon,
    children,
    className,
    ...remainProps
}) => {
    const buttonClasses = classNames({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [classes[color]]: color,
        [classes.simple]: simple,
        [className]: className
    });
    return (
        <Button {...remainProps} className={buttonClasses}>
            {children}
        </Button>
    );
};

const styles = {
    button: {
        minHeight: 'auto',
        minWidth: 'auto',
        backgroundColor: colors.gray,
        color: colors.white,
        boxShadow:
            '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
        border: 'none',
        borderRadius: '3px',
        position: 'relative',
        padding: '12px 30px',
        margin: '.3125rem 1px',
        fontSize: '12px',
        fontWeight: '400',
        textTransform: 'uppercase',
        letterSpacing: '0',
        willChange: 'box-shadow, transform',
        transition:
            'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        lineHeight: '1.42857143',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        touchAction: 'manipulation',
        cursor: 'pointer',
        '&:hover,&:focus': {
            color: '#FFFFFF',
            backgroundColor: colors.gray,
            boxShadow:
                '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
        },
        '& .fab,& .fas,& .far,& .fal,& .material-icons': {
            position: 'relative',
            display: 'inline-block',
            top: '0',
            fontSize: '1.1rem',
            marginRight: '4px',
            verticalAlign: 'middle'
        },
        '& svg': {
            position: 'relative',
            display: 'inline-block',
            top: '0',
            width: '18px',
            height: '18px',
            marginRight: '4px',
            verticalAlign: 'middle'
        },
        '&$justIcon': {
            '& .fab,& .fas,& .far,& .fal,& .material-icons': {
                marginRight: '0px',
                position: 'absolute',
                width: '100%',
                transform: 'none',
                left: '0px',
                top: '0px',
                height: '100%',
                lineHeight: '41px',
                fontSize: '20px'
            }
        }
    },
    link: {
        '&,&:hover,&:focus': {
            backgroundColor: 'transparent',
            color: '#999999',
            boxShadow: 'none'
        }
    },
    justIcon: {
        paddingLeft: '12px',
        paddingRight: '12px',
        fontSize: '20px',
        height: '41px',
        minWidth: '41px',
        width: '41px',
        '& .fab,& .fas,& .far,& .fal,& svg,& .material-icons': {
            marginRight: '0px'
        },
        '&$lg': {
            height: '57px',
            minWidth: '57px',
            width: '57px',
            lineHeight: '56px',
            '& .fab,& .fas,& .far,& .fal,& .material-icons': {
                fontSize: '32px',
                lineHeight: '56px'
            },
            '& svg': {
                width: '32px',
                height: '32px'
            }
        },
        '&$sm': {
            height: '30px',
            minWidth: '30px',
            width: '30px',
            '& .fab,& .fas,& .far,& .fal,& .material-icons': {
                fontSize: '17px',
                lineHeight: '29px'
            },
            '& svg': {
                width: '17px',
                height: '17px'
            }
        }
    },
    linkedin: {
        backgroundColor: '#55acee',
        color: '#fff',
        boxShadow:
            '0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)',
        '&:hover,&:focus,&:visited': {
            backgroundColor: '#55ACEE',
            color: '#fff',
            boxShadow:
                '0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)'
        }
    },
    github: {
        backgroundColor: '#333333',
        color: colors.white,
        boxShadow:
            '0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)',
        '&:hover,&:focus': {
            backgroundColor: '#333333',
            color: colors.white,
            boxShadow:
                '0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)'
        }
    },
    download: {
        backgroundColor: '#54968A',
        color: colors.white,
        boxShadow:
            '0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)',
        '&:hover,&:focus': {
            backgroundColor: '#54968A',
            color: colors.white,
            boxShadow:
                '0 14px 26px -12px rgba(84, 150, 138, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(84, 150, 138, 0.2)'
        }
    },
    simple: {
        '&,&:focus,&:hover,&:visited': {
            color: '#FFFFFF',
            background: 'transparent',
            boxShadow: 'none'
        },
        '&$linkedin': {
            '&,&:focus,&:hover,&:visited': {
                color: '#55ACEE'
            }
        },
        '&$github': {
            '&,&:focus,&:hover,&:visited': {
                color: '#333333'
            }
        },
        '&$download': {
            '&,&:focus,&:hover,&:visited': {
                color: '#54968A'
            }
        }
    },
    lg: {
        padding: '1.125rem 2.25rem',
        fontSize: '0.875rem',
        lineHeight: '1.333333',
        borderRadius: '0.2rem'
    },
    sm: {
        padding: '0.40625rem 1.25rem',
        fontSize: '0.6875rem',
        lineHeight: '1.5',
        borderRadius: '0.2rem'
    },
    round: {
        borderRadius: '30px'
    }
};

QFButton.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['linkedin', 'github', 'download']),
    size: PropTypes.oneOf(['sm', 'lg']),
    simple: PropTypes.bool,
    round: PropTypes.bool,
    link: PropTypes.bool,
    justIcon: PropTypes.bool
};

export default withStyles(styles)(QFButton);
