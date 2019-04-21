import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageContainer from '../container/PageContainer';
import GridContainer from '../container/GridContainer';
import { withStyles } from '@material-ui/core/styles';
import QFAvatar from '../components/QFAvatar';
import QFGridItem from '../components/QFGridItem';
import ProfileInfo from '../components/ProfileInfo';
import { resolver } from '../res/resolver';
import * as dimens from '../res/dimens';
import * as colors from '../res/colors';

class Profile extends Component {
    render() {
        const { classes, ...remainProps } = this.props;
        return (
            <PageContainer className={classes.container}>
                <div className={classes.profile}>
                    <GridContainer justify="center" {...remainProps}>
                        <QFGridItem xs={12} sm={12} md={6}>
                            <div className={classes.profile}>
                                <QFAvatar image={resolver.avatar} />
                            </div>
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
        zIndex: '3',
        position: 'relative',
        background: colors.transparent,
        marginTop: -dimens.fontSize.avatarSize / 2,
        width: '100%',
        margin: '0 auto'
    },
    profile: {
        textAlign: 'center',
        '& img': {
            margin: '0 auto'
        }
    }
};

Profile.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
