import React from 'react'
import PropTypes from 'react'
import {Container, Card, Image} from 'react-bootstrap';



 const PokiDisplay = ({pokemon}) => {

    


    return (
        <>
            <Container>
                
            </Container>
                <div className='pokeimage'>
                <img src={pokemon.sprites.front_default} />
                </div>
                
              
         </>   
    )
}



export default PokiDisplay;
