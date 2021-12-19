import { combineReducers } from 'redux';

import crud from './crud';
import comp from './comp';
// import leav from './leav';
// import hod from './hod';
// import updt from './updt';
// import balance from './balance';
// import aleav from './aleav'

export const reducers = combineReducers({ crud ,comp});
