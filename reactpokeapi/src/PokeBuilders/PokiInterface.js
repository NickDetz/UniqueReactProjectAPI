import React, {useState, useEffect} from 'react'
import {Row, Container, Col} from'react-bootstrap'

 const PokiInterface = ({pokeMoveData}) => {

    const [move1, setMove1] = useState(0)
    const [move2, setMove2] = useState(1)
    const [move3, setMove3] = useState(2)
    const [move4, setMove4] = useState(3)


   

    

    
    return (
        <div className='FightInterface'>
            <Container className='justify-content-center'>
            <Row>
                <Col>
                {pokeMoveData.moves[move1].move.name}
                </Col>
                <Col>
                {pokeMoveData.moves[move2].move.name}
                </Col>
            </Row>
            <Row>
                <Col>
                {pokeMoveData.moves[move3].move.name}
                </Col>
                <Col>
                {pokeMoveData.moves[move4].move.name}
                </Col>
            </Row>
            </Container>
        </div>
    )
}


export default PokiInterface;
