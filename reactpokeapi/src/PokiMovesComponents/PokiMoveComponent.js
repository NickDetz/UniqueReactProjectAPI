import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Card, Container, Row, Col, Button} from 'react-bootstrap'

import PokiMoveSelector from './PokiMoveSelector';




const PokiMoveComponent = () => {
    

    return (
        <div>
            <Container>
               <Row>
                <PokiMoveSelector defaultId={1}/>
                <PokiMoveSelector defaultId={2}/>
                <PokiMoveSelector defaultId={3}/>
                <PokiMoveSelector defaultId={4}/>
                </Row>
            </Container>

            <Container>
        
            </Container>
        </div>
    )
}


export default PokiMoveComponent;