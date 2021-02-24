import React from 'react'

 const PokeView = ({battler, spinnerRed}) => {
     
    return (
        <div>
            {battler ? (<p>{battler.name}</p>) : null}
            {battler ? (<img></img>) : null}
        </div>
    )

 }

export default PokeView;
