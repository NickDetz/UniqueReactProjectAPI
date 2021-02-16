import bug from './PokemonassetsPokiApi/bugtype.png';
import dark from './PokemonassetsPokiApi/darktype.png';
import dragon from './PokemonassetsPokiApi/dragontype.png';
import electric from './PokemonassetsPokiApi/electrictype.png';
import fairy from './PokemonassetsPokiApi/fairytype.png';
import fighting from './PokemonassetsPokiApi/fightingtype.png';
import fire from './PokemonassetsPokiApi/firetype.png';
import flying from './PokemonassetsPokiApi/flyingtype.png';
import ghost from './PokemonassetsPokiApi/ghosttype.png';
import grass from './PokemonassetsPokiApi/grasstype.png';
import ground from './PokemonassetsPokiApi/groundtype.png';
import ice from './PokemonassetsPokiApi/icetype.png';
import normal from './PokemonassetsPokiApi/normaltype.png';
import poisen from './PokemonassetsPokiApi/poisentype.png';
import pyschic from './PokemonassetsPokiApi/pyschictype.png';
import rock from './PokemonassetsPokiApi/rocktype.png';
import steel from './PokemonassetsPokiApi/steeltype.png';
import water from './PokemonassetsPokiApi/watertype.png';
import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'

const  PokiMovePic = ({pokimove}) => {
    const [checking, setCheckState] = useState(false)

    useEffect(() => {
        console.log('useEffect from PokiMove')
        console.log(checking)
        console.log(pokimove.type.name)
        switch(pokimove.type.name){
            case "fighting":{
                console.log('there is a fighting type')
                break;
            }
            default : {
                console.log('trains')
            }
        }
    }, [])
    
    
    return (
        <Card.Img src={bug}></Card.Img>
    )
}

export default PokiMovePic;
