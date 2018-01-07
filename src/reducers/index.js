import { combineReducers } from 'redux';
import ReducerBooks from './reducer-books';

const rootReducer = combineReducers({
    books: ReducerBooks
});

export default rootReducer;
