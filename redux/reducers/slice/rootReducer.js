import { combineReducers } from "@reduxjs/toolkit";
import authUserReducer from "../slice/authSlice";

// import profileUserReducer from '../reducers/slice/profileSlice';
// import orderReducer from './slice/orderSlice';

const rootReducer = combineReducers({
  user: authUserReducer,
  // cart: cartReducer,
});

export default rootReducer;
