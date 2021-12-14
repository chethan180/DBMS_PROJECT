import { ALLOT } from '../constants/actionTypes';

export default (al = [], action) => {
    switch(action.type ){
        case ALLOT:
            {
                console.log(action.payload);
                // return {...crud ,data: action.payload};
                return action.payload;
            }
        default : 
        {
            return al;
        }
    }
}