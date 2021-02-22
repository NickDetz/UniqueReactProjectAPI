import React from 'react'

 const PokeView = ({battler}) => {
    return (
        <div>
            <img src={battler.sprites.front_default} />
        </div>
    )
}

export default PokeView;
