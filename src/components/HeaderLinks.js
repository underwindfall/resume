import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';
import QFText from './QFText';
import * as dimens from '../res/dimens';

const HeaderLinks = ({ ...props }) => {
    const { classes } = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <QFText text={'About'} className={classes.navLink} />
            </ListItem>
            <ListItem className={classes.listItem}>
                <QFText text={'Experience'} className={classes.navLink} />
            </ListItem>
            <ListItem className={classes.listItem}>
                <QFText text={'Skills'} className={classes.navLink} />
            </ListItem>
            <ListItem className={classes.listItem}>
                <QFText text={'Education'} className={classes.navLink} />
            </ListItem>
            <ListItem className={classes.listItem}>
                <QFText text={'Contact'} className={classes.navLink} />
            </ListItem>
        </List>
    );
};
const headerLinksStyle = theme => ({
    list: {
        fontFamily: 'Montserrat-Regular',
        fontSize: dimens.fontSize.link,
        margin: dimens.spacing.zero,
        paddingLeft: dimens.spacing.zero,
        listStyle: 'none',
        paddingTop: dimens.spacing.zero,
        paddingBottom: dimens.spacing.zero,
        color: 'inherit'
    },
    listItem: {
        float: 'left',
        color: 'inherit',
        position: 'relative',
        display: 'block',
        width: 'auto',
        margin: dimens.spacing.zero,
        padding: dimens.spacing.zero,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            '&:after': {
                width: 'calc(100% - 30px)',
                content: '""',
                display: 'block',
                height: '1px',
                marginLeft: '15px',
                backgroundColor: '#e5e5e5'
            }
        }
    },
    navLink: {
        color: 'inherit',
        position: 'relative',
        padding: '0.9375rem',
        fontWeight: '400',
        fontSize: '12px',
        textTransform: 'uppercase',
        borderRadius: '3px',
        lineHeight: '20px',
        textDecoration: 'none',
        margin: '0px',
        display: 'inline-flex',
        '&:hover,&:focus': {
            color: 'inherit',
            background: 'rgba(200, 200, 200, 0.2)'
        },
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 30px)',
            marginLeft: '15px',
            marginBottom: '8px',
            marginTop: '8px',
            textAlign: 'left',
            '& > span:first-child': {
                justifyContent: 'flex-start'
            }
        }
    }
});

export default withStyles(headerLinksStyle)(HeaderLinks);
