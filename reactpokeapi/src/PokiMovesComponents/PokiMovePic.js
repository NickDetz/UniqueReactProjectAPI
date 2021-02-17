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
    const [type, setType] = useState()

    useEffect(() => {
        console.log('useEffect from PokiMove')
        console.log(checking)
        console.log(pokimove.type.name)
        switch(pokimove.type.name){
            case "fighting":{
                setType(fighting)
                break;
            }
            case 'normal':{
                setType(normal)
                break;
            }
            case 'dark' :{
                setType(dark)
                break;
            }
            case 'dragon' :{
                setType(dragon)
                break;
            }case 'electric' :{
                setType(electric)
                break;
            }case 'fairy' :{
                setType(fairy)
                break;
            }case 'fire' :{
                setType(fire)
                break;
            }case 'flying' :{
                setType(flying)
                break;
            }case 'ghost' :{
                setType(ghost)
                break;
            }case 'grass' :{
                setType(grass)
                break;
            }case 'ground' :{
                setType(ground)
                break;
            }case 'ice' :{
                setType(ice)
                break;
            }case 'poison' :{
                setType(poisen)
                break;
            }case 'psychic' :{
                setType(pyschic)
                break;
            }case 'rock' :{
                setType(rock)
                break;
            }case 'steel' :{
                setType(steel)
                break;
            }case 'water' :{
                setType(water)
                break;
            }
            case 'bug' :{
                console.log('bug type')
                setType(bug)
                break;
            }
            default : {
                console.log('trains')
                setType(null)
            }
           
        }
        setCheckState(true);
    }, [pokimove.type.name])
    
    
    return (
        checking && <Card.Img src={type}></Card.Img> 
        
    )
}

export default PokiMovePic;
