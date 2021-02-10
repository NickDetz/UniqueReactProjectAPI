import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Container, Button, FormControl, InputGroup, Alert} from 'react-bootstrap'
import PokiDisplay from './PokiDisplay';

const PokeComponent = () => {
    const [pokimonId, findPokeId] = useState(1);
    const [pokiname, pokeName] = useState('');
     const [pokemon, pokeObject] = useState({});
     const [isfilled, fillObject] = useState(false)
     const [alertNameError, alertNameObj] = useState(false)
     

    const  getPokeValue = async pokemonId => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokimonId}/`).then(res => {
                pokeObject(res.data)
                console.log(res.data)
                fillObject(true);
            })
    }
    


    const getPokeByName = async pokiname => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokiname.toLowerCase()}/`).then(res => {
            console.log(res.data)
            pokeObject(res.data)
            fillObject(true)
        }).catch(error => {
            alertNameObj(true);
            setTimeout(() => alertNameObj(false), 15000);
        }) 

        
    } 

   


    const ClearPokeData = () => {
        pokeObject({})
        fillObject(false)
        findPokeId(1)
    }

    return (
        <div>
            <Container>
             <InputGroup className="container-sm" >
                <InputGroup.Prepend>
                     <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                         <FormControl type='text' placeholder="Pokemon Name or ID" className='mr-sm-2'
                            onChange = {e => pokeName(e.target.value)}

                         />
                        </InputGroup>
                        <Button onClick = {()=> getPokeByName(pokiname)} >Find Pokemon by name or number </Button>
                        </Container>      
            <Container>
            {isfilled  && <PokiDisplay pokemon = {pokemon}/>}
            <Button onClick={()=> findPokeId(pokimonId + 1)}>+</Button>
            {pokimonId > 1 && <Button onClick={()=> findPokeId(pokimonId - 1)}>-</Button>}
            <Button onClick ={() => getPokeValue()}>Get ID Pokemon</Button>
            {alertNameError && <Alert variant='danger'>Wrong Name check spelling or Id not Found</Alert>}
            {isfilled && <Button onClick={() => ClearPokeData()}>Clear</Button>}
            {isfilled || <div>{pokimonId}</div>}
            </Container> 
           
        </div>
        
    )
}




export default PokeComponent;
