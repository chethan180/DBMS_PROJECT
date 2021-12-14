import {  SOLV } from '../constants/actionTypes';

export default (solve = [], action) => {
    switch(action.type ){
        case SOLV:
            {
                console.log(action.payload);
                // return {...crud ,data: action.payload};
                return action.payload;
            }
        default : 
        {
            return solve;
        }
    }
}