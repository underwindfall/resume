import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PageContainer from '../container/PageContainer';
import GridContainer from '../container/GridContainer';
import { withStyles } from '@material-ui/core/styles';
import QFGridItem from '../components/QFGridItem';
import ProfileInfo from '../components/ProfileInfo';
import * as colors from '../res/colors';

class Profile extends PureComponent {
    render() {
        const { classes, ...remainProps } = this.props;
        return (
            <PageContainer className={classes.container}>
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
                </div>
            </PageContainer>
        );
    }
}
const styles = {
    container: {
        position: 'relative',
        background: colors.transparent,
        width: '100%',
        margin: '0 auto'
    },
    textContainer: {
        textAlign: 'center'
    }
};

Profile.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
