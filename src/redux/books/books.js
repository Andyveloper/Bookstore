import { nanoid, createSlice } from '@reduxjs/toolkit';

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
