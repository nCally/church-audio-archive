import React from 'react';
import { Link } from "react-router-dom";

export default function () {

  return (
    <div style={{ minHeight: "100vh", textAlign: 'center' }}>
      <div>
        <div style={{ marginTop: 50, fontSize: 36, fontWeight: 600, marginBottom: 20 }}>Successfully uploaded</div>
        <div className="flex justify-center">
          <Link className="text-decoration-none" to="/add-to-archive">New upload</Link>
          <div className="w2"></div>
          <Link className="text-decoration-none" to="/">Homepage</Link>
        </div>
      </div>

    </div>
  )
}