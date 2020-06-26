import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import Main from './App';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:month/:year" exact component={Main} />
        <Route path="*" component={Main} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
