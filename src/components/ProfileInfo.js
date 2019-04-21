import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import QFText from './QFText';
import QFButton from './QFButton';
import RowContainer from '../container/RowContainer';
import { infoText } from '../styles';
import { strings } from '../i18n';
import * as dimens from '../res/dimens';

const ProfileInfo = ({ classes, ...remainProps }) => {
    return (
        <div className={classes.infoContainer} {...remainProps}>
            <QFText
                className={classes.name}
                text={strings.about.info.author}
                font="bold"
                variant="h3"
            />
            <QFText
                className={classes.title}
                text={strings.about.info.title}
                font="bold"
                variant="h5"
            />
            <RowContainer style={styles.iconContainer}>
                <QFButton justIcon link className={classes.icon}>
                    <i className={'fab fa-github'} />
                </QFButton>
                <QFButton justIcon link className={classes.icon}>
                    <i className={'fab fa-linkedin'} />
                </QFButton>
            </RowContainer>
        </div>
    );
};
const styles = {
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: dimens.spacing.zero
    },
    name: {
        ...infoText,
        marginTop: dimens.spacing.xxLarge,
        fontWeight: 700
    },
    title: {
        ...infoText
    },
    iconContainer: {
        justifyContent: 'center'
    },
    icon: {
        margin: dimens.spacing.mSmall
    }
};

ProfileInfo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileInfo);
