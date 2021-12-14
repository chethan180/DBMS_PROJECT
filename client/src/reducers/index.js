import { combineReducers } from 'redux';

import crud from './crud';
import comp from './comp';
import messcomp from './messcomp';
import auth from './auth';
import wcomp from './wcomp';
import wupdt from './wupdt';
import review from './review';
import allot from './allot';
import applyL from './applyL';
import empty from './empty';

// import leav from './leav';
// import hod from './hod';
// import updt from './updt';
// import balance from './balance';
// import aleav from './aleav'

export const reducers = combineReducers({ auth ,allot,crud ,empty,comp ,messcomp ,applyL,wcomp, wupdt ,review});
