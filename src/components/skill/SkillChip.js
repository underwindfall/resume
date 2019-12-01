import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, Chip, Avatar } from '@material-ui/core';
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
            className={chipClasses}
            variant="outlined"
            component="div"
        />
    );
};
const styles = theme => ({
    chip: {
        margin: theme.spacing(1),
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
