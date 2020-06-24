import React, { useState } from 'react';
import Item from "./Item";
import Header from "./Header";
import Empty from "./Empty";
import Loader from './Loader';

function App() {

  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);

  function getArchive(){}

  return (
    <div>
      <Loader loading={loading} />

      <Header />

      <div className="results-wrapper">
        <div className="results">
          <div>
            {
              records.length > 0 ?
              (
                records.map(item => <Item />)
              ) : (<Empty />)
            }
          </div>
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
