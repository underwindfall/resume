import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import * as colors from '../../res/colors';

const SkillChip = ({ icon, text, classes, className, ...remainProps }) => {
    const chipClasses = classNames({
        [classes.chip]: true,
        [className]: className !== undefined
    });
    return (
        <Chip
            {...remainProps}
            avatar={<Avatar src={icon} />}
            label={text}
            className={classes.chip}
            variant="outlined"
            component="div"
        />
    );
};
const styles = theme => ({
    chip: {
        margin: theme.spacing.unit,
        color: colors.accentColor
        // background: colors.chipGradient
    }
});
SkillChip.propTypes = {
    classes: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default withStyles(styles)(SkillChip);
