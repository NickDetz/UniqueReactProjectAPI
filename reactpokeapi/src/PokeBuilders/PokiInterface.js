import React, {useState, useEffect} from 'react'
import {Row, Container, Col, Button} from'react-bootstrap'

 const PokiInterface = ({pokeMoveData}) => {

    const [move1, setMove1] = useState(0)
    const [move2, setMove2] = useState(1)
    const [move3, setMove3] = useState(2)
    const [move4, setMove4] = useState(3)


   console.log(pokeMoveData)

    

    
    return (
        <div className='FightInterface'>
            <Container className='justify-content-center'>
            <Row>
                <Col>
                <Button>
                {pokeMoveData.moves[move1].move.name}
                10/10
                </Button>
                </Col>
                <Col>
                <Button>
                {pokeMoveData.moves[move2].move.name}
                10/10
                </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button>
                {pokeMoveData.moves[move3].move.name}
                10/10
                </Button>
                </Col>
                <Col>
                <Button>
                {pokeMoveData.moves[move4].move.name}
                
                 10/10
                 </Button>
                </Col>
            </Row>
            </Container>
        </div>
    )
}


export default PokiInterface;
