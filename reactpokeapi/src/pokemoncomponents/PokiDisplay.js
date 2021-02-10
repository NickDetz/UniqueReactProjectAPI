import React from 'react'
import PropTypes from 'react'
import {Container, Card, Badge} from 'react-bootstrap';



 const PokiDisplay = ({pokemon}) => {

    


    return (
        <>
           <h1 className="Poketitle"><Badge>{pokemon.name}</Badge> </h1>
                <div className='pokeimage'>
                <img src={pokemon.sprites.front_default} />
                </div>
                <Container>
                <Card>
                    
                </Card>

            </Container>
              
         </>   
    )
}



export default PokiDisplay;
