import React from 'react';
import './style.css';

export const Timeline = ({ items, ...remainProps }) => (
    <div className="container">
        {items.map((item, index) => <TimeLineItem {...item} key={index} />)}
    </div>
);

export const TimeLineItem = ({
    style,
    startTime,
    endTime,
    companyName,
    title,
    description
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
                <h4>{companyName}</h4>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    </div>
);
