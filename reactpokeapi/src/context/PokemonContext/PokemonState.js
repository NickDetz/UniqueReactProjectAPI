import React, {useReducer} from 'react';
import axios from 'axios';
import pokemonContext from './PokemonContext';
import PokeReducer from './PokeReducer';
import {
    GETPOKIMON,
    CLEARPOKIMON,
    GETPOKIMOVE1,
    GETPOKIMOVE2,
    GETPOKIMOVE3,
    GETPOKIMOVE4
} from '../types'

const PokemonState = props => {
    const initialState = {
        id : {},
        moves : [],
        types : [], 
        name : {},
        wieght : {}

    }
    //Search Pokimon
   









    const [state, dispatch] = useReducer(PokeReducer, initialState)

    return <pokemonContext.Provider
        value = {{
            pokemon : state.pokemon,
            pokimove1 : state.move1,
            pokimove2 : state.move2,
            pokimove3 : state.move3,
            pokimove4 : state.move4,
        }}>
            {props.children}

    </pokemonContext.Provider>
}

export default PokemonState;