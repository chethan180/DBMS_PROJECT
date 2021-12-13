import { combineReducers } from 'redux';

import crud from './crud';
import comp from './comp';
import messcomp from './messcomp';
import auth from './auth';
import wcomp from './wcomp';
import wupdt from './wupdt';
// import leav from './leav';
// import hod from './hod';
// import updt from './updt';
// import balance from './balance';
// import aleav from './aleav'

export const reducers = combineReducers({ auth ,crud ,comp ,messcomp ,wcomp, wupdt});
