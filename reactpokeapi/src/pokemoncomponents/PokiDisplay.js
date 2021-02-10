import React from 'react'
import PropTypes from 'react'
import {Container, Card} from 'react-bootstrap';



 const PokiDisplay = ({pokemon}) => {

    


    return (
        <>
           
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
