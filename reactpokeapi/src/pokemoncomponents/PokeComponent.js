import React, {useState} from 'react'

const PokeComponent = () => {
    const [pokimon, findPoke] = useState('');

    return (
        <div>
            Hello From PokeComponent
        </div>
    )
}

export default PokeComponent;
