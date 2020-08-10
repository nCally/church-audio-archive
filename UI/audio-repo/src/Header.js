import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import Search from "./Search";
import moment from 'moment';

function Header(props) {
  const [open, setOpen] = useState(false);

  let params = props.match.params;

  return (
    <div className="header">
      <div>
        <div>M</div>
        <Link to="/how-to-use" className="text-decoration-none">How to Use</Link>
        <div>
          <a onClick={() => setOpen(true)}>
            <MenuOutlined />
          </a>

          <Search
            year={props.year}
            setyear={props.setyear}
            open={open ? "open" : ""}
            close={() => setOpen(false)} />

        </div>
      </div>

      <div>
        <div className="year">{params.year}</div>
        <div className="month">{params.month && moment(params.month, 'MM').format("MMMM")}</div>
      </div>
    </div>
  )
}

export default withRouter(Header);