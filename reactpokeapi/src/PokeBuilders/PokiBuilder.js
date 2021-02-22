import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Container, Col, Row} from 'react-bootstrap';



 const PokiBuilder = () => {

    const [pokeRed, getPokiRed] = useState();
    const [pokeBlue, getPokiBlue] = useState();

    useEffect(() => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${1}/`).then(res => {
                console.log(res.data)
                getPokiRed(res.data)
    })
    },[])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${2}/`).then(res => {
            console.log(res.data)
            getPokiBlue(res.data)
})
},[])




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