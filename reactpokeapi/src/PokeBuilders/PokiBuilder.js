import React from 'react'
import {Container, Col, Row} from 'react-bootstrap';



 const PokiBuilder = () => {
    return (
        
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
        
    )
}

export default PokiBuilder;