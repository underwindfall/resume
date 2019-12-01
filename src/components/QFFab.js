import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Fab } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const DELAY_SCROLL = 300;
const scrollToTop = () => setTimeout(() => window.scrollTo(0, 0), DELAY_SCROLL);
const QFFab = ({ classes, ...remainProps }) => {
    return (
        <Fab
            {...remainProps}
            color="secondary"
            component="button"
            aria-label="scroll"
            className={classes.fab}
            onClick={scrollToTop}
        >
            <ExpandLessIcon />
        </Fab>
    );
};

const styles = theme => ({
    fab: {
        margin: theme.spacing(1),
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        zIndex: 100000
    }
});
QFFab.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(QFFab);
