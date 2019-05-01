import React from 'react';
import Tag from '../Tag';
import './style.css';
import Tooltip from '@material-ui/core/Tooltip';
import QFText from '../QFText';
import { strings } from '../../i18n';
import { resolver } from '../../res/resolver';
import * as dimens from '../../res/dimens';
import * as colors from '../../res/colors';

const handleClick = url => () => {
    if (url) {
        window.open(url, '_blank');
    }
};

export const Timeline = ({ items, ...remainProps }) => {
    return (
        <div className="container">
            {items.map((item, index) => <TimeLineItem {...item} key={index} />)}
        </div>
    );
};

export const TimeLineItem = ({
    style,
    startTime,
    endTime,
    title,
    description,
    role,
    techstack,
    icon,
    playerRole,
    link
}) => {
    return (
        <div className="row workDetails">
            <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                <div className="workYear">
                    <span className="prevY">{startTime}</span>
                    <span className="afterY">{endTime}</span>
                </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
                <div className="arrowpart" />
                <div className="exCon">
                    <h4>
                        <img
                            src={resolver[icon]}
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                marginRight: dimens.spacing.medium
                            }}
                            alt="logo"
                        />
                        {title}
                    </h4>
                    <h5>{role}</h5>
                    <Tooltip
                        title={strings.project.tooltip}
                        enterDelay={500}
                        leaveDelay={200}
                        placement="top-start"
                    >
                        <h6 onClick={handleClick(link)}>
                            {link
                                ? strings.project.item
                                : strings.project.itemWIP}
                        </h6>
                    </Tooltip>
                    {techstack && (
                        <div className="row">
                            {techstack.map((item, index) => (
                                <Tag text={item} key={index} />
                            ))}
                        </div>
                    )}
                    <p
                        style={{
                            paddingTop: dimens.spacing.large,
                            paddingBottom: dimens.spacing.large
                        }}
                    >
                        {description}
                    </p>
                    {playerRole && (
                        <div>
                            <QFText
                                font="bold"
                                style={{
                                    colors: colors.accentColorDark,
                                    fontWeight: 600,
                                    paddingBottom: dimens.spacing.small
                                }}
                                variant="h4"
                                text={strings.project.occupation}
                            />
                            {playerRole.map((item, index) => (
                                <QFText
                                    key={index}
                                    style={{
                                        color: colors.primaryTextDarkColor,
                                        paddingBottom: dimens.spacing.lMedium,
                                        fontWeight: 500
                                    }}
                                    font="bold"
                                    text={item}
                                    variant="h5"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
