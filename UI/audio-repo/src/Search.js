import React from 'react';
import { withRouter } from "react-router-dom";
import { CloseOutlined } from '@ant-design/icons';

export default withRouter(function (props) {
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
          <select className="select-style">
            <option>2019</option>
            <option>2020</option>
          </select>
        </div>
      </div>

      <br />

      <div>
        <div>Month</div>

        <div className="month-rack">
          {
            months.map((item, i) => (
              <div key={item.name} style={{ backgroundColor: item.color }} onClick={() => props.history.push(`/${i + 1}/${2020}`)}>
                <div>{item.name}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
})

const months = [
  { name: "Jan", color: "#ffd59a" },
  { name: "Feb", color: "#bb97c6" },
  { name: "Mar", color: "#bce5df" },
  { name: "Apr", color: "#DA4A52" },
  { name: "May", color: "#7bb661" },
  { name: "Jun", color: "#FFD858" },
  { name: "Jul", color: "#df9e8e" },
  { name: "Aug", color: "#FDB813" },
  { name: "Sep", color: "#5265B0" },
  { name: "Oct", color: "#2a52be" },
  { name: "Nov", color: "#7f1734" },
  { name: "Dec", color: "#128191" },
]
