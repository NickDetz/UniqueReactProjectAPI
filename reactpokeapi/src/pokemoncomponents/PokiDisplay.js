import React from 'react'
import PropTypes from 'react'
import {Container, Card} from 'react-bootstrap';



 const PokiDisplay = ({pokemon}) => {

    


    return (
        <>
            <Container>
                <Card>
                    
                </Card>

            </Container>
                <div className='pokeimage'>
                <img src={pokemon.sprites.front_default} />
                </div>
                
              
         </>   
    )
}



export default PokiDisplay;
