import { WCOMPL } from '../constants/actionTypes';

export default (wcompl = [], action) => {
    switch(action.type ){
        case WCOMPL:
            {
                console.log(action.payload);
                // return {...crud ,data: action.payload};
                return action.payload;
            }
        default : 
        {
            return wcompl;
        }
    }
}