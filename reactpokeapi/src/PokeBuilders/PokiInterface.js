import React, {useState, useEffect} from 'react'
import {Row, Container, Col} from'react-bootstrap'

 const PokiInterface = ({pokeMoveData}) => {

    const [arrayLength, setArrayLength] = useState()
    const [moveArray, setMoveArray] = useState([])
    const [numArray, setNumArray] = useState([])


   

    

    
    return (
        <div className='FightInterface'>
            <Container className='justify-content-center'>
            <Row>
                <Col>
                hello4
                </Col>
                <Col>
                hello1
                </Col>
            </Row>
            <Row>
                <Col>
                hello 2
                </Col>
                <Col>
                hello 3
                </Col>
            </Row>
            </Container>
        </div>
    )
}


export default PokiInterface;
