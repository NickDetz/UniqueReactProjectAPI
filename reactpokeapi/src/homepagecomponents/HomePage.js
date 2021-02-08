import React from 'react';
import './HomePage.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
//Remember with bootstrap 12 is the max columns
const HomePage = () => {
    return (
        <div>
           <Container>
                <Row>
                <Col lg={4}><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                            <Card.Body>
                             <Card.Title>PokeMon</Card.Title>
                                <Card.Text>
                                    Going To see PokeMon themselves
                                </Card.Text>
                                
                                    <Link to ='/PokePage'> To Pokemon Page</Link>
                                    
                                </Card.Body>
                                </Card></Col>
                <Col lg={4}><Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                <Card.Title>Move Set</Card.Title>
                                 <Card.Text>
                                     Going to see Move Sets
                                </Card.Text>
                                <Link to ='/PokiMoves'> To Pokemon Page</Link>
                                         </Card.Body>
                                    </Card></Col>
                <Col lg={4}><Card style={{ width: '18rem' }}>
                                     <Card.Img variant="top" src="" />
                                     <Card.Body>
                                         <Card.Title>Probably Type</Card.Title>
                                             <Card.Text>
                                                 Going to see a 3rd thing
                                            </Card.Text>
                                            <Link to ='/PokiTypes'> To Pokemon Page</Link>
                                    </Card.Body>
                                    </Card></Col>
                </Row>

           </Container>
        </div>
    )
}

export default HomePage;
