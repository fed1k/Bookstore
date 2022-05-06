import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerForCategory from './categories/categories';
import reducer from './books/books';

const rootReducer = combineReducers({ books: reducer, categories: reducerForCategory });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
