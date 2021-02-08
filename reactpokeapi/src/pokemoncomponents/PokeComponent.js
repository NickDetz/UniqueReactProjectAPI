import React, {useState} from 'react'
import axios from 'axios';
import {Container, Button} from 'react-bootstrap'

const PokeComponent = () => {
    const [pokimon, findPoke] = useState(0);

    

    return (
        <div>
            <Container>
            <p>Poki id looking for is {pokimon}</p>
            <Button onClick={()=> findPoke(pokimon + 1)}>Click me</Button>
            </Container>  
        </div>
    )
}

export default PokeComponent;
