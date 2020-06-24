import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

export default function (props) {
  return (
    <div className={`search ${props.open}`}>
      <div>
        <a onClick={() => props.close()}>
          <CloseOutlined />
        </a>
      </div>
      <div className="instruction">Choose the year and month of the message you want</div>

      <div>
        <div>Year</div>
        <div>
          <select>
            <option>2019</option>
            <option>2020</option>
          </select>
        </div>
      </div>

      <div>
        <div>Month</div>

        <div className="month-rack">

        </div>
      </div>
    </div>
  )
}

const months = [
  { name: "January" }
]