import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';
import GridContainer from '../container/GridContainer';
import PageContainer from '../container/PageContainer';
import QFGridItem from '../components/QFGridItem';
import ProfileInfo from '../components/ProfileInfo';
import QFText from '../components/QFText';
import { strings } from '../i18n';
import * as colors from '../res/colors';

class Profile extends PureComponent {
    render() {
        const { classes, ...remainProps } = this.props;
        return (
            <PageContainer className={classes.container}>
                <Fade left>
                    <div className={classes.profile}>
                        <GridContainer justify="center" {...remainProps}>
                            <QFGridItem
                                style={styles.textContainer}
                                xs={12}
                                sm={12}
                                md={6}
                            >
                                <ProfileInfo />
                            </QFGridItem>
                        </GridContainer>
                        <div className={classes.descriptionContainer}>
                            <QFText
                                text={strings.about.info.description}
                                font="regular"
                                variant="subtitle1"
                                className={classes.description}
                            />
                        </div>
                    </div>
                </Fade>
            </PageContainer>
        );
    }
}
const styles = {
    container: {
        flexGrow: 1,
        position: 'relative',
        background: colors.transparent,
        width: '100%',
        margin: '0 auto'
    },
    profile: {
        textAlign: 'center',
        '& img': {
            margin: '0 auto'
        }
    },
    textContainer: {
        textAlign: 'center'
    },
    descriptionContainer: {
        margin: '1.071rem auto 0',
        maxWidth: '600px',
        textAlign: 'center !important'
    },
    description: {
        color: colors.gray,
        fontWeight: 400
    }
};

Profile.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
