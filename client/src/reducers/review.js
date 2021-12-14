import { REVIEW } from '../constants/actionTypes';

export default (rvw = [], action) => {
    switch(action.type ){
        case REVIEW:
            {
                console.log(action.payload);
                // return {...crud ,data: action.payload};
                return action.payload;
            }
        default : 
        {
            return rvw;
        }
    }
}