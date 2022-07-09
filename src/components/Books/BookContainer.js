import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import InputNewBook from './InputNewBook';

const BookContainer = () => {
  const [books, setBooks] = useState([]);

  const AddBook = (title, author, chapter, percentage) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      chapter,
      percentage,
    };
    setBooks([...books, newBook]);
  };
  return (
    <div className="book-container">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          percentage={book.percentage}
        />
      ))}
      <InputNewBook addBookProps={AddBook} />
    </div>
  );
};

export default BookContainer;
