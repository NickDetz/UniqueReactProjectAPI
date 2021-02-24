import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Container, Col, Row, Spinner} from 'react-bootstrap';
import PokeView from './PokeView';
import PokiInterface from './PokiInterface';



 const PokiBuilder = () => {

    const [pokeRed, getPokiRed] = useState();
    const [pokeBlue, getPokiBlue] = useState();
    const [spinnerRed, setSpinnerRed] = useState(true);
    const [spinnerBlue, setSpinnerBlue] = useState(true);

    useEffect(() => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${1}/`).then(res => {
                console.log(res.data)
                setSpinnerRed(false)
                getPokiRed(res.data)
    })
    },[])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${2}/`).then(res => {
            console.log(res.data)
            setSpinnerBlue(false)
            getPokiBlue(res.data)
})
},[])

// used to pick pokemon to build and then fight with team blue then red
//Will use this as the parent Element to send information down via props and hold
//Context here as data


    return (
        
        <Container>
            <Row>
            <Col lg={6}>
            <Row>
               {spinnerRed === true && <Spinner animation="border" variant="danger"/>}
               {spinnerRed === false && <PokeView battler = {pokeBlue} isGetting = {spinnerRed}/> }
               <PokiInterface/>
            </Row>
            </Col>
            <Col lg={6}>
            <Row>
                {spinnerBlue === true && <Spinner animation="border" variant="primary" />}
                {spinnerBlue === false && <PokeView battler = {pokeRed}/> }
                <PokiInterface/>
            </Row>
            </Col>
            </Row>

        </Container>
        
    )
}

export default PokiBuilder;