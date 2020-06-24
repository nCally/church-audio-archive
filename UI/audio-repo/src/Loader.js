import React, { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';


export default function (props) {

  if (props.loading) {
    useEffect(() => {
      document.body.classList.add("body-no-overflow");
    })

    return (
      <div className="loading">
        <div>
          <LoadingOutlined />
          <div>getting messages...</div>
        </div>
      </div>
    )
  } else {
    useEffect(() => {
      document.body.classList.remove("body-no-overflow");
    })

    return null;
  }
}