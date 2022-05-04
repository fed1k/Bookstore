import { combineReducers, legacy_createStore as createStore } from 'redux';
import reducerForCategory from './categories/categories';
import reducer from './books/books';

const rootReducer = combineReducers({ books: reducer, categories: reducerForCategory });
const store = createStore(rootReducer);

export default store;
