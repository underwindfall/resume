import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { GridContainer } from '../../container/GridContainer';
import { QFText } from '../QFText';
import { QFGridItem } from '../QFGridItem';
import { SkillChip } from './SkillChip';
import { responsiveContainer } from '../../styles';
import { resolver } from '../../res/resolver';
import { strings } from '../../i18n';

const useStyles = makeStyles(theme => ({
    root: {
        marginRight: 'auto',
        marginLeft: 'auto',
        ...responsiveContainer(theme)
    },
    infoContainer: {
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    iconContainer: {
        flexWrap: 'wrap',
        textAlign: 'start',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    }
}));

const SkillRow = ({ items = [], ...props }) => {
    const classes = useStyles();
    return (
        <Fragment>
            <GridContainer
                container
                item
                xs={12}
                sm={4}
                md={4}
                className={classes.infoContainer}
            >
                <QFGridItem xs={12}>
                    <QFText
                        text={strings.skills.mobile}
                        font="bold"
                        variant="h5"
                        className={classes.title}
                    />
                </QFGridItem>
                <GridContainer
                    container
                    item
                    xs={12}
                    className={classes.iconContainer}
                >
                    <QFGridItem xs={12} sm={6} md={6}>
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

                    <QFGridItem xs={12} sm={6} md={6}>
                        <SkillChip
                            icon={resolver.rn}
                            text={strings.skills.rn.name}
                        />
                    </QFGridItem>
                </GridContainer>
            </GridContainer>
            <GridContainer
                container
                item
                xs={12}
                sm={4}
                md={4}
                className={classes.infoContainer}
            >
                <QFGridItem xs={12}>
                    <QFText
                        text={strings.skills.frontEnd}
                        font="bold"
                        variant="h5"
                        className={classes.title}
                    />
                </QFGridItem>
                <GridContainer
                    container
                    item
                    xs={12}
                    className={classes.iconContainer}
                >
                    <QFGridItem xs={12} sm={6} md={6}>
                        <SkillChip
                            icon={resolver.css}
                            text={strings.skills.css.name}
                        />
                        <SkillChip
                            icon={resolver.html}
                            text={strings.skills.html.name}
                        />
                        <SkillChip
                            icon={resolver.ruby}
                            text={strings.skills.ruby.name}
                        />
                    </QFGridItem>
                    <QFGridItem xs={12} sm={6} md={6}>
                        <SkillChip
                            icon={resolver.webpack}
                            text={strings.skills.webpack.name}
                        />
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
            </GridContainer>
            <GridContainer
                container
                item
                xs={12}
                sm={4}
                md={4}
                justify="center"
                className={classes.infoContainer}
            >
                <QFGridItem xs={12}>
                    <QFText
                        text={strings.skills.devOps}
                        font="bold"
                        variant="h5"
                        className={classes.title}
                    />
                </QFGridItem>
                <GridContainer
                    container
                    item
                    xs={12}
                    className={classes.iconContainer}
                >
                    <QFGridItem xs={12} sm={6} md={6}>
                        <SkillChip
                            icon={resolver.git}
                            text={strings.skills.git.name}
                        />
                        <SkillChip
                            icon={resolver.heroku}
                            text={strings.skills.heroku.name}
                        />
                        <SkillChip
                            icon={resolver.jekyll}
                            text={strings.skills.jekyll.name}
                        />
                    </QFGridItem>
                    <QFGridItem xs={12} sm={6} md={6}>
                        <SkillChip
                            icon={resolver.jenkins}
                            text={strings.skills.jenkins.name}
                        />
                        <SkillChip
                            icon={resolver.firebase}
                            text={strings.skills.firebase.name}
                        />
                    </QFGridItem>
                </GridContainer>
            </GridContainer>
        </Fragment>
    );
};

export const SkillInfo = ({ items = [], ...remainProps }) => {
    const classes = useStyles();
    return (
        <GridContainer
            justify="center"
            alignItems="center"
            container
            className={classes.root}
            spacing={1}
            {...remainProps}
        >
            <GridContainer
                container
                justify="center"
                alignItems="flex-start"
                item
                xs={12}
                spacing={3}
            >
                <SkillRow classes={classes} items={items} />
            </GridContainer>
        </GridContainer>
    );
};

SkillInfo.propTypes = {
    items: PropTypes.array
};
