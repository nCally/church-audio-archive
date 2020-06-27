import React from 'react';
import moment from 'moment';

export default function (props) {

  let { title, minister, size, day, month, year, link, file_id } = props.item;

  return (
    <div className="item">
      <div className="date">{moment(`${year}/${month}/${day}`).format("ddd LL")}</div>
      <div className="title">{title}</div>
      <div className="minister">{minister}</div>
      <div className="bottom-section">
        <div className="size">{size}</div>
        <div className="download">
          <a href={`https://drive.google.com/uc?export=download&id=${file_id}`} download>Download</a>
        </div>
      </div>
    </div>
  )
}
