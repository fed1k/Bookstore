import { createStore, combineReducers } from 'react-redux';
import reducerForCategory, { createActionForCategory } from './categories/categories';
import reducer, { createActionForBookToAdd } from './books/books';

const rootReducer = combineReducers({ books: reducer, categories: reducerForCategory });

const store = createStore(rootReducer);
store.dispatch(createActionForCategory());
store.dispatch(createActionForBookToAdd());
