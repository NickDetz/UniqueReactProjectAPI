import {
    GETPOKIMON,
    CLEARPOKIMON,
    GETPOKIMOVE1,
    GETPOKIMOVE2,
    GETPOKIMOVE3,
    GETPOKIMOVE4
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GETPOKIMON: 
        return{
            pokimon: action.payload
        }

        default:
            return state;
    }
}