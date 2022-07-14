import { nanoid } from '@reduxjs/toolkit';

const createBook = (title, author) => ({
  id: nanoid(),
  title,
  author,
  category: 'Undetermined',
  chapter: 'Undetermined',
  percentage: 0,
});

export default createBook;
