import React, {useState, useEffect} from 'react'
import PropTypes from 'react'
import {Col, Card, Button, Badge, Row} from 'react-bootstrap'
import PokiMovePic from './PokiMovePic';
import axios from 'axios';
import PokeInfo from './PokeInfo';

 const  PokiMoveSelector = ({defaultId}) => {
     const [pokiMove, pokiMoveObj] = useState();
     const [moveId, setMove] = useState(defaultId);
     const [loading, setLoading] = useState(false);
     

     useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/move/${moveId}/`).then(res =>{
            console.log(res.data)
            pokiMoveObj(res.data)
            setLoading(true)
        }).catch(error => {
            console.log('Error: ', error)
          })

     }, [moveId])


     
    
     
     
    return (
        <Col lg={3}>
       {loading && <PokiMovePic pokimove={pokiMove}/> }
           <Card.Body>
             {/* This code sometimes works  */}
               {loading && <PokeInfo pokimove={pokiMove} /> } 
               <Row>
               <Button variant="primary" onClick={() => {setMove(moveId + 1)}}>+</Button>
               <Badge variant='danger'>{moveId}</Badge>
               {moveId > 1 && <Button variant='warning' onClick={() => {setMove(moveId -1)}}>-</Button>} 
                </Row>
               </Card.Body>
   </Col>
    )
     
}

export default PokiMoveSelector;