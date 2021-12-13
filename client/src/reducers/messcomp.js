import {  MESSCOMPL } from '../constants/actionTypes';

export default (mcomp = [], action) => {
    switch(action.type ){
        case MESSCOMPL: 
            {
                // console.log(action.payload);
                // return {...crud ,data: action.payload};
                return action.payload;
            }
        default : 
        {
            return mcomp;
        }
    }
}