import { combineReducers } from 'redux';
import heroSlice from '@/redux/heros/heros-slice';

const rootReducer = combineReducers({
  heroSlice,
});

export default rootReducer;
