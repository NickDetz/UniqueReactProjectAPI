import React, {useState, useEffect} from 'react'
import PropTypes from 'react'
import {Col, Card, Button, Spinner} from 'react-bootstrap'
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

     }, [])

    
     
     
    return (
        <Col lg={3}>
       {loading && <PokiMovePic pokimove={pokiMove}/> }
           <Card.Body>
             {/* This code sometimes works  */}
               {loading && <PokeInfo pokimove={pokiMove} /> } 
               <Button variant="primary" onClick={() => {setMove()}}>Get new move data</Button>
               </Card.Body>
   </Col>
    )
     
}

export default PokiMoveSelector;