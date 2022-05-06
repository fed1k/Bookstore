import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch({ type: 'REMOVE_BOOK', payload: id });
  };
  return (
    <div className="book">
      <p className="category-p">{category}</p>
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="button" onClick={dispatcher}>Remove</button>
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
