import { useSelector } from 'react-redux';
import Book from './Book';
import InputNewBook from './InputNewBook';

const BookContainer = () => {
  const book = useSelector((state) => state.books.books);
  return (
    <section className="book-container">
      {book.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          chapter={book.chapter}
          category={book.category}
          percentage={book.percentage}
        />
      ))}
      <InputNewBook />
    </section>
  );
};
export default BookContainer;
