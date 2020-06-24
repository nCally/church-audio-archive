import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import Search from "./Search";

export default function () {

  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div>
        <a onClick={() => setOpen(true)}>
          <MenuOutlined />
        </a>

        <Search open={open ? "open" : ""} close={() => setOpen(false)} />

      </div>

      <div>
        <div className="year">2020</div>
        <div className="month">February</div>
      </div>
    </div>
  )
}
