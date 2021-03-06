import React,{useState, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeaderNav from './headercomponents/HeaderNav' 
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './homepagecomponents/HomePage';
import BottomPage from './homepagecomponents/BottomPage';
import PokeComponent from './pokemoncomponents/PokeComponent';
import './pokemoncomponents/PokeDis.css';
import './PokiMovesComponents/PokiInterface.css';
import PokiMoveComponent from './PokiMovesComponents/PokiMoveComponent';
import PokiBuilder from './PokeBuilders/PokiBuilder';
import PokemonState from './context/PokemonContext/PokemonState';


const App = () => {
 
 

  return (
    <PokemonState>
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
              <PokiMoveComponent/>
              </>
            </Route>

            <Route exact path='/PokiTypes'>
              <>
              <PokiBuilder/>
              </>
            </Route>



        </Switch>      

        <BottomPage/>
      </Router>
      
    </div>
    </Fragment>
    </PokemonState>
  );
}

export default App;
