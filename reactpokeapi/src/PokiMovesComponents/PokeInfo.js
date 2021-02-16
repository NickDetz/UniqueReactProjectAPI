import React from 'react'
import {Card} from 'react-bootstrap'

 const PokeInfo = ({pokimove}) => {
     console.log(pokimove)
    return (
        <Card>
            <Card.Title>{pokimove.name}</Card.Title>
        </Card>

    )
}

export default PokeInfo;