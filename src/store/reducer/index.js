import { combineReducers } from "@reduxjs/toolkit";

import doctor from './doctor';
import department from './department';
import login from './login';

export default combineReducers({doctor,department,login})