import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridContainer from '../container/GridContainer';
import QFText from './QFText';
import QFButton from './QFButton';
import QFGridItem from './QFGridItem';
import { infoText } from '../styles';
import { strings } from '../i18n';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

class BannerInfo extends Component {
    state = {
        loading: false,
        success: false
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleButtonClick = url => () => {
        if (!this.state.loading) {
            this.setState(
                {
                    success: false,
                    loading: true
                },
                () => {
                    this.timer = setTimeout(() => {
                        this.setState({
                            loading: false,
                            success: true
                        });
                        window.open(url, '_blank');
                    }, 2000);
                }
            );
        }
    };

    render() {
        const { loading, success } = this.state;
        const { classes, ...remainProps } = this.props;
        const buttonClassname = classNames({
            [classes.buttonSuccess]: success
        });
        return (
            <GridContainer
                direction="column"
                justify="center"
                alignItems="center"
                style={styles.textContainer}
                spacing={24}
                {...remainProps}
            >
                <QFGridItem xs={12} sm={12} md={12}>
                    <QFText
                        font="bold"
                        className={classes.text}
                        text={strings.header.bannerInfo.word}
                    />
                </QFGridItem>
                <QFGridItem xs={12} sm={12} md={12}>
                    <QFButton
                        target="_blank"
                        color="download"
                        disabled={loading}
                        className={buttonClassname}
                        onClick={this.handleButtonClick(
                            `${process.env.PUBLIC_URL}/resume.pdf`
                        )}
                    >
                        {strings.header.bannerInfo.download}
                    </QFButton>
                    {loading && (
                        <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                        />
                    )}
                </QFGridItem>
            </GridContainer>
        );
    }
}

const styles = {
    textContainer: {
        marginTop: dimens.spacing.zero,
        textAlign: 'center',
        zIndex: 10
    },
    text: {
        ...infoText,
        textAlign: 'center',
        color: colors.white,
        fontSize: '5em',
        fontWeight: 500
    },
    buttonProgress: {
        color: colors.accentColorLight,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
    },
    buttonSuccess: {
        backgroundColor: colors.secondaryColor,
        '&:hover': {
            backgroundColor: colors.secondaryDarkColor
        }
    }
};

export default withStyles(styles)(BannerInfo);
