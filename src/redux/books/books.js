import { createAsyncThunk, nanoid, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { currentApiKey } from '../apiConnection';

const initialState = {
  books: [
    {
      id: nanoid(),
      title: 'Eminence in Shadow',
      author: 'Daisuke Aizawa',
      category: 'Action',
      chapter: 'Chapter 5',
      percentage: 50,
    },
    {
      id: nanoid(),
      title: 'Jobless Reincarnation',
      author: 'Rifujin na Magonote',
      category: 'Comedy',
      chapter: 'Chapter 12',
      percentage: 65,
    },
  ],
};

const reducer = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    deleteBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
  extraReducer: (builder) => {
    builder.addDefaultCase((state) => state);
  },
});

export const { addBook, deleteBook } = reducer.actions;
export default reducer;

export const uploadBookThunk = createAsyncThunk(
  'uploadBook',
  async (book) => {
    const res = await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${currentApiKey}/books`, {
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    console.log(await res.data);
    return res.json();
  },
);

const getBookDataThunk = createAsyncThunk(
  'getBookData',
  async () => {
    const res = axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${currentApiKey}/books`)
      .then((response) => {
        console.log(response.data);
      });
  },
);
