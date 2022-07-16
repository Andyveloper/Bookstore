import { CircularProgressbar } from 'react-circular-progressbar';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookThunk } from '../../redux/apiConnection';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    author,
    category,
    chapter,
    percentage = 0,
  } = props;

  const percentageValue = Math.floor(Math.random() * 100);

  return (
    <section className="book-list-container">
      <div className="book-list-info">
        <h2 className="book-list__book-category">{category}</h2>
        <h2 id={id} className="book-list__book-title">{title || 'Title Goes Here'}</h2>
        <p className="book-list__book-author">{author || 'Author Goes Here'}</p>
        <div className="actions-container">
          <ul className="actions-list">
            <li className="action-list__item"><button type="button" className="book-list__button">Comments</button></li>
            <li className="action-list__item"><button type="button" className="book-list__button" onClick={() => dispatch(deleteBookThunk(id))}>Remove</button></li>
            <li className="action-list__item"><button type="button" className="book-list__button">Edit</button></li>
          </ul>
        </div>
      </div>
      <div className="booklist-progress">
        <div className="booklist-progress-bar">
          <CircularProgressbar value={percentageValue} />
        </div>
        <div className="booklist-progress-text">
          <p className="percentage">
            {percentage || percentageValue}
            %
            {' '}

          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="current-progress">
        <h2>CURRENT CHAPTER</h2>
        <p>{chapter || 'Chapter 17'}</p>
        <button type="submit">UPDATE PROGRESS</button>
      </div>

    </section>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  title: PropTypes.string.isRequired,
};
Book.defaultProps = {
  percentage: 0,
};

export default Book;
