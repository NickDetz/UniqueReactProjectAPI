import React,{ Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeaderNav from './headercomponents/HeaderNav' 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
    <div className="App">
      <HeaderNav/>
    </div>
    </Fragment>
  );
}

export default App;
