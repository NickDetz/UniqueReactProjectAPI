import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Card, Container, Row, Col} from 'react-bootstrap'
import PokiInterface from './PokiInterface';

const PokiMoveComponent = () => {
    const [pokiMoveId1, pokeMoveId1] = useState(1)
    const [pokiMoveId2, pokeMoveId2] = useState(1)
    const [pokiMoveId3, pokeMoveId3] = useState(1)
    const [pokiMoveId4, pokeMoveId4] = useState(1)
    const [pokeMove, pokeMoves] = useState([]);

    


    return (
        <div>
            <Container>
               <Row>
                <Col lg={3}>column 1 </Col>
                <Col lg={3}>column 2 </Col>
                <Col lg={3}>column 3 </Col>
                <Col lg={3}>column 4 </Col>
                </Row>
            </Container>

            <Container>
            <PokiInterface></PokiInterface>
            </Container>
        </div>
    )
}


export default PokiMoveComponent;