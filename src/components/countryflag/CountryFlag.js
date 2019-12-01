import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import QFButton from '../QFButton';
import * as colors from '../../res/colors';

const CountryFlag = ({ code, classes, styleProps, ...remainProps }) => {
    const emoji = code
        .toUpperCase()
        .replace(/./g, char =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
        );
    return (
        <QFButton justIcon link className={classes.icon} {...remainProps}>
            <span
                aria-label={code}
                role="img"
                style={{
                    verticalAlign: 'middle',
                    ...styleProps
                }}
                title={code}
            >
                {emoji}
            </span>
        </QFButton>
    );
};

const styles = {
    icon: {
        width: 'auto',
        height: 'auto',
        '&:hover,&:focus': {
            color: 'inherit',
            background: colors.backgroundGrey
        }
    }
};

CountryFlag.propTypes = {
    code: PropTypes.string.isRequired,
    styleProps: PropTypes.object
};

export default withStyles(styles)(CountryFlag);
