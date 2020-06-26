import React from 'react';
import moment from 'moment';

export default function (props) {

  let { title, minister, size, day, month, year, link } = props.item;

  return (
    <div className="item">
      <div className="date">{moment(`${year}/${month}/${day}`).format("dddd DD")}</div>
      <div className="title">{title}</div>
      <div className="minister">{minister}</div>
      <div className="bottom-section">
        <div className="size">{size}MB</div>
        <div className="download">
          <a href={`${link}`} target="_blank">Download</a>
        </div>
      </div>
    </div>
  )
}
