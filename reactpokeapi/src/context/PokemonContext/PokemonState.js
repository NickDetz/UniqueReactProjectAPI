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
        id : 'id',
        moves : [],
        types : []

    }

    const [state, dispatch] = useReducer(PokeReducer, initialState)
}