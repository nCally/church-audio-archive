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

  const [year, setyear] = useState(moment().format("YYYY"));
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);

  /* useEffect(() => {
    if (!params.month || !params.year) {
      props.history.push(`/${moment().format('M')}/${year}`)
    } else {
      retrieveArchive(
        params.month,
        params.year,
        setLoading,
        setRecords
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) */

  useEffect(() => {
    if (!params.month || !params.year) {
      props.history.push(`/${moment().format('M')}/${year}`)
    } else {
      retrieveArchive(
        params.month,
        params.year,
        setLoading,
        setRecords
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return (
    <div>
      <Loader loading={loading} />

      <Header
        year={year}
        setyear={setyear} />

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
          <a href="/">How to use</a>
        </div>
        <div>
          <a href="/">About</a>
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
