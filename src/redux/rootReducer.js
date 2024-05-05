import { combineReducers } from '@reduxjs/toolkit';
import rolesReducer from './reducers'; // Import your roles reducer

const rootReducer = combineReducers({
  rolesSlice: rolesReducer // Add your roles reducer here
  // Add other reducers as needed
});

export default rootReducer;