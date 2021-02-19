import React from 'react'
import {Container, Col, Row} from 'react-bootstrap';
import PokemonContext from '../context/PokemonContext/PokemonState'


 const PokiBuilder = () => {
    return (
        <PokemonContext>
        <Container>
            <Row>
            <Col lg={6}>
            <Row>
                Pokemon 1
            </Row>
            </Col>
            <Col lg={6}>
            <Row>
                Pokemon 2
            </Row>
            </Col>
            </Row>

        </Container>
        </PokemonContext>
    )
}

export default PokiBuilder;