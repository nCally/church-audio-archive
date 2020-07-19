import React from 'react';
import moment from 'moment';
import { CloudDownloadOutlined } from '@ant-design/icons';

export default function (props) {

  let { title, minister, size, day, month, year, link, file_id } = props.item;

  return (
    <div className="item">
      <div className="date">{moment(`${year}/${month}/${day}`).format("dddd DD")}</div>
      <div className="title">{title}</div>
      <div className="minister">{minister}</div>
      <div className="bottom-section">
        <div className="size">{size}MB</div>
        <div className="download">
          <a href={`https://drive.google.com/uc?export=download&id=${file_id}`} download>
            <CloudDownloadOutlined style={{ fontSize: 21 }} />
          </a>
        </div>
      </div>
    </div>
  )
}
