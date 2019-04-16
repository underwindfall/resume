import React from 'react';
import Grid from '@material-ui/core/Grid';
import {SocialIcon} from 'react-social-icons';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const socialResources = [
    {
        url: 'https://github.com/underwindfall',
        bgColor: colors.primaryText
    },
    {
        url: 'https://www.linkedin.com/in/qifan-yang/',
        bgColor: colors.primaryText
    }
];

export const SocialIconList = props => {
    return (
        <Grid style={styles.container} {...props}>
            {socialResources.map((item, index) => (
                <SocialIcon key={index} {...item} style={styles.item} />
            ))}
        </Grid>
    );
};

SocialIconList.propTypes = {};

const styles = {
    container: {
        item: true,
        container: true,
        spacing: dimens.spacing.small,
        backgroundColor: colors.transparent
    },
    item: {
        margin: dimens.spacing.small,
        fontSize: dimens.fontSize.socialIcon
    }
};
