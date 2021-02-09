import React, {useState} from 'react'
import axios from 'axios';
import {Container, Button, FormControl, InputGroup} from 'react-bootstrap'

const PokeComponent = () => {
    const [pokimon, findPoke] = useState(0);
    const [pokiname, pokeName] = useState('');

    const Consoling = (pokiname) => {
        console.log(pokiname)
    }

    return (
        <div>
             <InputGroup className="container-sm" >
                <InputGroup.Prepend>
                     <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                         <FormControl type='text' placeholder="Pokimon Name" className='mr-sm-2'
                            onChange = {e => pokeName(e.target.value)}

                         />
                        </InputGroup>
                        <Button onClick = {()=> Consoling(pokiname)}> Bleg Button</Button>
            <Container>
            <p>Poki id looking for is {pokimon}</p>
            <Button onClick={()=> findPoke(pokimon + 1)}>Click me</Button>
            </Container>  
        </div>
    )
}

export default PokeComponent;
