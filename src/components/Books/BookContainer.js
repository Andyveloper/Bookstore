import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import InputNewBook from './InputNewBook';
import { getBooks } from '../../redux/apiConnection';

const BookContainer = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <section className="book-container">
      {books.length ? books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          chapter={book.chapter}
          category={book.category}
          percentage={book.percentage}
        />
      )) : <div className="not-found">No books added</div>}
      <InputNewBook />
    </section>
  );
};
export default BookContainer;
