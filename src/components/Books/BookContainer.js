import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import InputNewBook from './InputNewBook';

const BookContainer = () => {
  const [books, setBooks] = useState([]);

  const AddBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };
  return (
    <div className="book-container">
      <Book />
      <InputNewBook addBookProps={AddBook} />
    </div>
  );
};

export default BookContainer;
