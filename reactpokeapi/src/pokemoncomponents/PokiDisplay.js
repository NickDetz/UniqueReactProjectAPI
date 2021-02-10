import React from 'react'
import PropTypes from 'react'
import {Container, Card, Badge, ListGroup} from 'react-bootstrap';
import PokeTypes from './PokeTypes';


 const PokiDisplay = ({pokemon}) => {

    const {types, height, base_experience, id} = pokemon;


    return (
        <>
           <h1 className="Poketitle"><Badge>{pokemon.name}</Badge> </h1>
                <div className='pokeimage'>
                <img src={pokemon.sprites.front_default} />
                </div>
                <Container>
                <ListGroup className="Poketitle">
                    <ListGroup.Item>Poke Index Id {pokemon.id}</ListGroup.Item>
                    <ListGroup.Item> Height {pokemon.height} ft</ListGroup.Item>
                    <ListGroup.Item>Base Experience {pokemon.base_experience} </ListGroup.Item>
                    {types.map(type => <ListGroup.Item key={type.slot}>{type.type.name}</ListGroup.Item> )}
                </ListGroup>
            </Container>
              
         </>   
    )
}



export default PokiDisplay;
