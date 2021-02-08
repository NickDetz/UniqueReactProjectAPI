import React,{ Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeaderNav from './headercomponents/HeaderNav' 
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './homepagecomponents/HomePage';
import BottomPage from './homepagecomponents/BottomPage';

const App = () => {
 

  return (
    <Fragment>
    <div className="App">
    <Router>
      <HeaderNav/>
      <Switch>
            <Route exact path='/'>
              <Fragment>
              <HomePage/>
              <BottomPage/>
              </Fragment>
               </Route>




        </Switch>      


      </Router>
    </div>
    </Fragment>
  );
}

export default App;
