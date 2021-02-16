import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Card, Container, Row, Col, Button} from 'react-bootstrap'
import PokiInterface from './PokiInterface';
import PokiMoveSelector from './PokiMoveSelector';




const PokiMoveComponent = () => {
    

    
    //Pokemoves holds 4 moves
    // Move 1      Move 2
    // Move 3      Move 4


    

    


    return (
        <div>
            <Container>
               <Row>
                <PokiMoveSelector defaultId={1}/>
                <PokiMoveSelector defaultId={2}/>
                <PokiMoveSelector defaultId={3}/>
                <PokiMoveSelector defaultId={4}/>
                </Row>
            </Container>

            <Container>
            <PokiInterface></PokiInterface>
            </Container>
        </div>
    )
}


export default PokiMoveComponent;