import { combineReducers, legacy_createStore as createStore } from 'redux';
import reducerForCategory, { createActionForCategory } from './categories/categories';
import reducer, { createActionForBookToAdd } from './books/books';

const rootReducer = combineReducers({ books: reducer, categories: reducerForCategory });

const store = createStore(rootReducer);
store.dispatch(createActionForCategory());
store.dispatch(createActionForBookToAdd());

export default store;
