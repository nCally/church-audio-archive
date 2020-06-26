import React from 'react';
import moment from 'moment';

export default function (props) {

  let { title, minister, size, day, month, year, link } = props.item;

  return (
    <div className="item">
      <div className="date">{moment(`${year}/${month}/${day}`).format("ddd LL")}</div>
      <div className="title">{title}</div>
      <div className="minister">{minister}</div>
      <div className="bottom-section">
        <div className="size">{size}</div>
        <div className="download">
          <a>Download</a>
        </div>
      </div>
    </div>
  )
}
