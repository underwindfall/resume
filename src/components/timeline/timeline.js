import React from 'react';
import Tag from '../Tag';
import './style.css';
import { strings } from '../../i18n';

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
    playRole,
    link
}) => (
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
                <h4>{title}</h4>
                <h5>{role}</h5>
                {link && (
                    <h6 onClick={handleClick(link)}>
                        {link ? strings.project.item : strings.project.itemWIP}
                    </h6>
                )}
                {techstack && (
                    <div className="row">
                        {techstack.map((item, index) => (
                            <Tag text={item} key={index} />
                        ))}
                    </div>
                )}
                <p>{description}</p>
                <ui>
                    {playRole &&
                        playRole.map((item, index) => (
                            <li key={index}>
                                <p>{item}</p>
                            </li>
                        ))}
                </ui>
            </div>
        </div>
    </div>
);
