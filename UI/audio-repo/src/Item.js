import React from 'react';
import moment from 'moment';
import { CloudDownloadOutlined } from '@ant-design/icons';

export default function (props) {

  let { title, minister, size, day, month, year, link, fileId } = props.item;

  return (
    <div className="item">
      <div className="date">{moment(`${year}/${month}/${day}`).format("dddd, Do MMM")}</div>
      <div className="title">{title}</div>
      <div className="minister">{minister}</div>
      <div className="bottom-section">
        <div className="size">~ {size}MB</div>
        <div>
          <a className="download" href={`https://drive.google.com/uc?export=download&id=${fileId}`} download>
            <CloudDownloadOutlined style={{ fontSize: 24 }} />
          </a>
        </div>
      </div>
    </div>
  )
}
