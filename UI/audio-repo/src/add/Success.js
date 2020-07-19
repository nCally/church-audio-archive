import React from 'react';
import { Link } from "react-router-dom";

export default function () {

  return (
    <div style={{ minHeight: "100vh" }}>
      <div>
        <div>Successfully uploaded</div>
        <div>
          <Link to="/add-to-archive">New upload</Link>
        </div>
      </div>

    </div>
  )
}