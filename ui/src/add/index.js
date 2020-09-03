import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import Loader from "../Loader";
import moment from "moment";
import { addArchive } from "../methods";
import Datepicker from 'react-datepicker';

export default withRouter(function (props) {

  const [load, setLoad] = useState(false);
  const [state, setState] = useState({})
  const [date, setdate] = useState(new Date());

  function onchange(e) {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })
  }

  function submit(e) {
    e.preventDefault();
    let data = {
      ...state,
      day: moment(date).format("D"),
      month: moment(date).format("M"),
      year: moment(date).format("YYYY")
    }

    addArchive(data, setLoad, () => props.history.push("/add-to-archive/success"))

  }

  return (
    <div style={{ minHeight: "100vh" }}>

      <Loader loading={load} />

      <div className="add-wrapper">
        <div className="upload-main">

          <div className="upload-a-message">Upload a message</div>

          <form onSubmit={submit}>

            <div className="entry">
              <div>Title of message</div>
              <div>
                <input
                  required
                  autoComplete="off"
                  name="title" onChange={onchange} />
              </div>
            </div>

            <div className="entry">
              <div>Minister</div>
              <div>
                <input
                  required
                  autoComplete="off"
                  name="minister" onChange={onchange} />
              </div>
            </div>

            <div className="entry">
              <div>File ID</div>
              <div>
                <input
                  required
                  autoComplete="off"
                  name="fileId" onChange={onchange} />
              </div>
            </div>

            <div className="entry">
              <div>Google Drive Link</div>
              <div>
                <input
                  required
                  autoComplete="off"
                  name="link" onChange={onchange} />
              </div>
            </div>

            <div className="entry">
              <div>Date of message</div>
              <div>
                <Datepicker
                  required
                  selected={date}
                  dateFormat="dd MMM yyyy"
                  onChange={date => setdate(date)} />
              </div>
            </div>

            <div className="entry">
              <div>Size</div>
              <div>
                <input
                  required
                  placeholder="Eg: 10.83"
                  autoComplete="off"
                  name="size" onChange={onchange} />
              </div>
            </div>

            <div>
              <button type="submit" className="upload">Submit</button>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
})