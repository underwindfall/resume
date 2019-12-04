import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { QFButton } from '../QFButton';
import * as colors from '../../res/colors';

const useStyles = makeStyles({
    icon: {
        width: 'auto',
        height: 'auto',
        '&:hover,&:focus': {
            color: 'inherit',
            background: colors.backgroundGrey
        }
    }
});

export default function CountryFlag({ code, styleProps, ...remainProps }) {
    const classes = useStyles();
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
}

CountryFlag.propTypes = {
    code: PropTypes.string.isRequired,
    styleProps: PropTypes.object
};
