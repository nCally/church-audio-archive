import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import Item from "./Item";
import Header from "./Header";
import Empty from "./Empty";
import Loader from './Loader';
import { retrieveArchive } from "./methods";
import moment from "moment";

function App(props) {

  const params = props.match.params;
  console.log(params)


  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);

  function getArchive() { }

  useEffect(() => {
    if (!params.month || !params.year) {
      props.history.push(`/${moment().format('M')}/${moment().format("YYYY")}`)
    } else {
      retrieveArchive(params.month, params.year, setLoading, setRecords);
    }
  }, [])

  useEffect(() => {
    if (!params.month || !params.year) {
      props.history.push(`/${moment().format('M')}/${moment().format("YYYY")}`)
    } else {
      retrieveArchive(params.month, params.year, setLoading, setRecords);
    }
  }, [params])

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
                  records.map(item => <Item key={item.id} item={item} />)
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

export default withRouter(App);
