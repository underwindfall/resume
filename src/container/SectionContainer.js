import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RowContainer from './RowContainer';
import QFText from '../components/QFText';
import * as colors from '../res/colors';

const iconClassName = sectionIcon => () => {
    switch (sectionIcon.toLowerCase()) {
        case 'experience':
            return 'suitcase';
        case 'skills':
            return 'palette';
        case 'education':
            return 'graduation-cap';
        case 'project':
            return 'rocket';
        default:
            break;
    }
};

const SectionContainer = ({
    classes,
    style,
    sectionIcon,
    sectionTitle,
    children,
    ...remainProps
}) => {
    return (
        <div className={classes.container} style={style} {...remainProps}>
            <RowContainer>
                <i className={`fab fa-${iconClassName(sectionIcon)}`} />
                <QFText
                    variant="h4"
                    font="bold"
                    className={classes.icon}
                    text={sectionTitle}
                />
            </RowContainer>
            <div>{children}</div>
        </div>
    );
};
const styles = {
    container: {
        background: colors.white,
        position: 'relative',
        zIndex: '3',
        margin: '-60px 30px 0px',
        borderRadius: '6px',
        boxShadow:
            '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
    }
};

SectionContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    sectionIcon: PropTypes.oneOf([
        'experience',
        'skills',
        'education',
        'project'
    ]).isRequired,
    children: PropTypes.node,
    style: PropTypes.object
};
SectionContainer.defaultProps = {
    style: {},
    className: undefined
};

export default withStyles(styles)(SectionContainer);
