import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Container, Button, FormControl, InputGroup} from 'react-bootstrap'
import PokiDisplay from './PokiDisplay';

const PokeComponent = () => {
    const [pokimonid, findPokeId] = useState(0);
    const [pokiname, pokeName] = useState('');
    const [pokemon, pokeObject] = ([{}]);


    

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
            <p>Poki id looking for is {pokimonid}</p>
            <Button onClick={()=> findPokeId(pokimonid + 1)}>Click me</Button>
            </Container> 
            <PokiDisplay></PokiDisplay> 
        </div>
    )
}




export default PokeComponent;
