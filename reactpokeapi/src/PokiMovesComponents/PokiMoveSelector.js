import React, {useState, useEffect} from 'react'
import PropTypes from 'react'
import {Col, Card, Button} from 'react-bootstrap'
import PokiMovePic from './PokiMovePic';
import axios from 'axios';
import PokeInfo from './PokeInfo';

 const  PokiMoveSelector = ({defaultId}) => {
     const [pokiMove, pokiMoveObj] = useState();
     const [moveId, setMove] = useState(defaultId);
     

     useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/move/${moveId}/`).then(res =>{
            console.log(res.data)
            pokiMoveObj(res.data)
        })

     }, [])

    


    return (
        <Col lg={3}>
        <PokiMovePic pokimove={pokiMove}/>
           <Card.Body>
             {/* <Card.Title>Move Name {pokiMove.name} </Card.Title> */}
                <PokeInfo pokimove={pokiMove} />
               <Button variant="primary" onClick={() => {setMove()}}>Get new move data</Button>
               </Card.Body>
   </Col>
    )
}

export default PokiMoveSelector;