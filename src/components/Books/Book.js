import { CircularProgressbar } from 'react-circular-progressbar';

const Book = () => {
  const percentage = 50;

  return (
    <div className="book-list-container">
      <div className="book-list-info">
        <h2 className="book-list__book-title">Title Goes Here</h2>
        <p className="book-list__book-author">Author Goes Here</p>
        <div className="actions-container">
          <ul className="actions-list">
            <li className="action-list__item"><a href="/">Comments</a></li>
            <li className="action-list__item"><a href="/">Remove</a></li>
            <li className="action-list__item"><a href="/">Edit</a></li>
          </ul>
        </div>
        <div className="progress-bar">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div className="current-progress">
          <h2>CURRENT CHAPTER</h2>
          <p>Chapter 17</p>
          <button type="submit">UPDATE PROGRESS</button>
        </div>
      </div>

    </div>
  );
};

export default Book;
