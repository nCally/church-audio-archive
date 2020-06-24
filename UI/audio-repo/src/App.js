import React, { useState } from 'react';
import Item from "./Item";
import Header from "./Header";
import Empty from "./Empty";
import Loader from './Loader';

function App() {

  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Loader loading={loading} />

      <Header />

      <div className="results">
        <div>
          <Empty />
          <Item />
          <Item />
        </div>
      </div>

      <div className="footer">
        <div>
          <a href="/">Terms of use</a>
        </div>
        <div>
          <a href="/">About</a>
        </div>
      </div>
    </div>
  );
}

export default App;
