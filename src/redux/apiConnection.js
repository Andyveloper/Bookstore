import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postApiData = axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/');

export const currentApiKey = 'gwE0Bhw9RcasmYxC9anP';

const createBookList = (book) => {
  const bookList = [];
  const key = Object.keys(book);
  key.forEach((item) => {
    // console.log(item);
    bookList.push({
      item_id: item,
      title: book[item][0].title,
      category: book[item][0].category,
      author: book[item][0].author,
    });
  });
  return bookList;
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${currentApiKey}/books`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return createBookList(data);
  },
);

export const uploadBookThunk = createAsyncThunk(
  'uploadBook',
  async (book, thunkAPI) => {
    await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${currentApiKey}/books`, {
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    thunkAPI.dispatch(getBooks());
  },
);

export const deleteBookThunk = createAsyncThunk(
  'deleteBook',
  async (id, thunkAPI) => {
    await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${currentApiKey}/books/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
    });
    thunkAPI.dispatch(getBooks());
  },
);
