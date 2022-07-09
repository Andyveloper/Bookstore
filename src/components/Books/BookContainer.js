import Book from "./Book";
import InputNewBook from "./InputNewBook";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BookContainer = () => {
  const [books, setBooks] = useState([]);

  const AddBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title: title,
      author: author
    }
    setBooks([...books, newBook]);
  }
  return (
    <div className="book-container">
      <Book />
      <InputNewBook addBookProps={AddBook} />
    </div>
  );
}

export default BookContainer;