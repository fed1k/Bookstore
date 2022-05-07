import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteDataFromApi } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch({ type: 'REMOVE_BOOK', payload: id });
  };
  const [changeableId, setChangeableId] = useState(id);
  const [progress, setProgress] = useState('UPDATE PROGRESS');
  const [progressClass, setProgressClass] = useState('update-progress-btn');
  return (
    <div className="book">
      <div>
        <p className="category-p">{category}</p>
        <h1>{title}</h1>
        <p className="author">{author}</p>
        <div>
          <button type="button" className="comments">Comments</button>
          <button
            className="remove"
            type="button"
            onClick={() => {
              dispatcher();
              setChangeableId(id);
              localStorage.setItem('id', JSON.stringify({ idkart: changeableId }));
              dispatch(deleteDataFromApi());
            }}
          >
            Remove

          </button>
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="chapter-div">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 3 A lesson learned</p>
        <button
          type="button"
          className={progressClass}
          onClick={() => {
            setProgress('UPDATED');
            setProgressClass('update-progress-btn-completed');
          }}
        >
          {progress}

        </button>
      </div>

    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
