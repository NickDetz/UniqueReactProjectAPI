import React,{useState, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeaderNav from './headercomponents/HeaderNav' 
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './homepagecomponents/HomePage';
import BottomPage from './homepagecomponents/BottomPage';
import PokeComponent from './pokemoncomponents/PokeComponent';

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
              
              </Fragment>
               </Route>

            <Route exact path='/PokePage'>
              <Fragment>
              <PokeComponent/>
              </Fragment>
            </Route>

            <Route exact path='/PokiMoves'>
              <>
              {/* Components */}
              </>
            </Route>

            <Route exact path='/PokiTypes'>
              <>
              {/* Components */}
              </>
            </Route>



        </Switch>      

        <BottomPage/>
      </Router>
    </div>
    </Fragment>
  );
}

export default App;
