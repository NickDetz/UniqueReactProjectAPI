import React from 'react'
import {Card} from 'react-bootstrap'

 const PokeInfo = ({pokimove}) => {
     console.log(pokimove)
    return (
        <Card>
            <Card.Title>Move</Card.Title>
            <Card.Title>{pokimove.name}</Card.Title>
            <Card.Body> Power = {pokimove.power} </Card.Body>
            <Card.Body> PP =   {pokimove.pp}/{pokimove.pp}</Card.Body>
            <Card.Body> Damage Type =  {pokimove.damage_class.name} </Card.Body>
            
            
        </Card>

    )
}

export default PokeInfo;