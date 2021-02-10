import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Card, Container, Row, Col, Button} from 'react-bootstrap'
import PokiInterface from './PokiInterface';
import PokiMovePic from './PokiMovePic';



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
                <Col lg={3}><Card style={{ width: '18rem' }}>
                     <PokiMovePic />
                        <Card.Body>
                         <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                             Some quick example text to build on the card title and make up the bulk of
                             the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                </Card></Col>
                <Col lg={3}>
                <PokiMovePic />
                    column 2 </Col>
                <Col lg={3}>
                <PokiMovePic />
                column 3 </Col>
                <Col lg={3}>
                <PokiMovePic />
                column 4 </Col>
                </Row>
            </Container>

            <Container>
            <PokiInterface></PokiInterface>
            </Container>
        </div>
    )
}


export default PokiMoveComponent;