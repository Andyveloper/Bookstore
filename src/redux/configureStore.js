import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from 'bookstore/books/books';
import categoriesReducer from 'bookstore/categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = configureStore({
  rootReducer,
});

export default store;
