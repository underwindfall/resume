import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Chip from '@material-ui/core/es/Chip/Chip';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const Tag = ({ classes, text, ...props }) => {
    return <Chip {...props} className={classes.tag} label={text} />;
};
const styles = {
    tag: {
        color: colors.secondaryDarkColor,
        marginRight: dimens.spacing.mSmall
    }
};
Tag.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
};
Tag.defaultProps = {
    text: ''
};

export default withStyles(styles)(Tag);
