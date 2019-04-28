import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridContainer from '../../container/GridContainer';
import QFText from '../QFText';
import QFGridItem from '../QFGridItem';
import SkillChip from './SkillChip';
import { resolver } from '../../res/resolver';
import { strings } from '../../i18n';
import * as dimens from '../../res/dimens';

const SkillTitleRow = ({ classes, ...props }) => (
    <Fragment {...props}>
        <QFGridItem xs={12} sm={4} md={4}>
            <QFText
                text={strings.skills.mobile}
                font="bold"
                variant="h5"
                className={classes.title}
            />
        </QFGridItem>
        <QFGridItem xs={12} sm={4} md={4}>
            <QFText
                text={strings.skills.frontEnd}
                font="bold"
                variant="h5"
                className={classes.title}
            />
        </QFGridItem>
        <QFGridItem xs={12} sm={4} md={4}>
            <QFText
                text={strings.skills.devOps}
                font="bold"
                variant="h5"
                className={classes.title}
            />
        </QFGridItem>
    </Fragment>
);

const SkillRow = ({ classes, items, ...props }) => (
    <Fragment>
        <GridContainer
            container
            item
            xs={4}
            sm={4}
            md={4}
            className={classes.iconContainer}
        >
            <QFGridItem xs={6} sm={6} md={6}>
                <SkillChip
                    icon={resolver.android}
                    text={strings.skills.android.name}
                />
                <SkillChip
                    icon={resolver.kotlin}
                    text={strings.skills.kotlin.name}
                />
                <SkillChip
                    icon={resolver.java}
                    text={strings.skills.java.name}
                />
            </QFGridItem>
            <QFGridItem xs={6} sm={6} md={6}>
                <SkillChip icon={resolver.rn} text={strings.skills.rn.name} />
                <SkillChip
                    icon={resolver.react}
                    text={strings.skills.react.name}
                />
                <SkillChip
                    icon={resolver.javascript}
                    text={strings.skills.javascript.name}
                />
            </QFGridItem>
        </GridContainer>
        <GridContainer container item xs={4} sm={4} md={4}>
            <QFGridItem xs={6} sm={6} md={6}>
                <SkillChip icon={resolver.css} text={strings.skills.css.name} />
                <SkillChip
                    icon={resolver.html}
                    text={strings.skills.html.name}
                />
                <SkillChip
                    icon={resolver.ruby}
                    text={strings.skills.ruby.name}
                />
            </QFGridItem>
            <QFGridItem xs={6} sm={6} md={6}>
                <SkillChip
                    icon={resolver.webpack}
                    text={strings.skills.webpack.name}
                />
            </QFGridItem>
        </GridContainer>
        <GridContainer container item xs={4} sm={4} md={4}>
            <QFGridItem xs={6} sm={6} md={6}>
                <SkillChip icon={resolver.git} text={strings.skills.git.name} />
                <SkillChip
                    icon={resolver.heroku}
                    text={strings.skills.heroku.name}
                />
                <SkillChip
                    icon={resolver.jekyll}
                    text={strings.skills.jekyll.name}
                />
            </QFGridItem>
            <QFGridItem xs={6} sm={6} md={6}>
                <SkillChip
                    icon={resolver.jenkins}
                    text={strings.skills.jenkins.name}
                />
            </QFGridItem>
        </GridContainer>
    </Fragment>
);

const SkillInfo = ({ classes, items, ...remainProps }) => {
    return (
        <GridContainer
            justify="center"
            alignItems="center"
            container
            className={classes.root}
            spacing={8}
        >
            <GridContainer
                container
                justify="center"
                alignItems="center"
                item
                xs={12}
                spacing={24}
                className={classes.infoContainer}
            >
                <SkillTitleRow classes={classes} />
            </GridContainer>
            <GridContainer
                container
                justify="flex-start"
                alignItems="flex-start"
                item
                xs={12}
                spacing={24}
            >
                <SkillRow classes={classes} items={items} />
            </GridContainer>
        </GridContainer>
    );
};
const styles = theme => ({
    root: {
        paddingRight: dimens.spacing.sLarge,
        paddingLeft: dimens.spacing.sLarge,
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '750px'
        },
        [theme.breakpoints.up('md')]: {
            width: '970px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '1084px'
        }
    },
    infoContainer: {
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    iconContainer: {
        flexWrap: 'wrap',
        textAlign: 'start'
    }
});

SkillInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
};

SkillInfo.defaultProps = {
    items: []
};

export default withStyles(styles)(SkillInfo);
