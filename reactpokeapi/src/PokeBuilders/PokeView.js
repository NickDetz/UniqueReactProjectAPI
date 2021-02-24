import React from 'react'

 const PokeView = ({battler, spinnerRed}) => {
     
    return (
        <div>
            {battler ? (<p>{battler.name}</p>) : null}
            {battler ? (<img src ={battler.sprites.front_default}/>) : null}
        </div>
    )

 }

export default PokeView;
