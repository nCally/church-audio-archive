import React, { useEffect, useRef } from 'react';
import { withRouter } from "react-router-dom";
import { CloseOutlined } from '@ant-design/icons';

export default withRouter(function (props) {

  const search = useRef(null);

  function closeDrawer(e) {
    if (search.current && !search.current.contains(e.target)) {
      props.close();
    }
  }

  useEffect(() => {
    if (props.open === 'open') {
      document.body.classList.add("body-no-overflow");
    } else {
      document.body.classList.remove("body-no-overflow");
    }
  }, [props.open])

  useEffect(() => {
    document.addEventListener("mousedown", closeDrawer);
    return () => {
      document.removeEventListener("mousedown", closeDrawer);
    }
  })

  return (
    <div className={`search ${props.open}`} ref={search}>
      <div>
        <span onClick={() => props.close()} className="cursor-pointer">
          <CloseOutlined />
        </span>
      </div>
      <div className="instruction">Choose the year and month of the message you want</div>

      <div>
        <div className="text-left">Choose Year</div>
        <div>
          <select
            className="select-style"
            onChange={(e) => props.setyear(e.target.value)}>
            <option
              value="2019"
              selected={props.year === '2019' ? true : false}>2019</option>
            <option
              value="2020"
              selected={props.year === '2020' ? true : false}>2020</option>
          </select>
        </div>
      </div>

      <br />
      <br />

      <div className="pb50">
        <div className="text-left">Select Month</div>

        <div className="month-rack">
          {
            months.map((item, i) => (
              <div
                className={props.match.params.month === String(i + 1) && 'active'}
                key={item.name}
                onClick={() => {
                  props.history.push(`/${i + 1}/${props.year}`);
                  props.close();
                }}>
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
