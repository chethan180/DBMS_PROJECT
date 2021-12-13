import { WUPDT } from '../constants/actionTypes';

export default (wupdates = [], action) => {
    switch(action.type ){
        case WUPDT:
            {
                console.log(action.payload);
                // return {...crud ,data: action.payload};
                return action.payload;
            }
        default : 
        {
            return wupdates;
        }
    }
}