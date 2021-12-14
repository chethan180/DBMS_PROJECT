import { EM } from '../constants/actionTypes';

export default (em = [], action) => {
    switch(action.type ){
        case EM:
            {
                console.log(action.payload);
                // return {...crud ,data: action.payload};
                return action.payload;
            }
        default : 
        {
            return em;
        }
    }
}