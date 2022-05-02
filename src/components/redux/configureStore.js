import { createStore, combineReducers } from 'react-redux';
import { createActionForCategory, reducerForCategory } from './categories/categories';
import { reducer, createActionForBook } from './books/books';

const rootReducer = combineReducers({ books: reducer, categories: reducerForCategory });

const store = createStore(rootReducer);
store.dispatch(createActionForCategory());
store.dispatch(createActionForBook());
