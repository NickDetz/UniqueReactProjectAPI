import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Container, Button, FormControl, InputGroup} from 'react-bootstrap'
import PokiDisplay from './PokiDisplay';

const PokeComponent = () => {
    const [pokimonId, findPokeId] = useState(1);
    const [pokiname, pokeName] = useState('');
     const [pokemon, pokeObject] = useState({});
     const [isfilled, fillObject] = useState(false)

    const  getPokeValue = async pokemonId => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokimonId}/`).then(res => {
                console.log(res.data)
                fillObject(true);
            })
    }
    

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
            <p>Poki id looking for is {pokimonId}</p>
            <Button onClick={()=> findPokeId(pokimonId + 1)}>Click me</Button>
            <Button onClick ={() => getPokeValue()}>Get ID Pokemon</Button>
            </Container> 
            {isfilled  && <PokiDisplay {...pokemon} />}
        </div>
        
    )
}




export default PokeComponent;
