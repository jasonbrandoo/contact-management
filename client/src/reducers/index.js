import { combineReducers } from 'redux';
import carReducer from './carReducer';

export default combineReducers({
  carData: carReducer
});