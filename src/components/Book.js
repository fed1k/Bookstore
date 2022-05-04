import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const dispatcher = () => {
    dispatch({ type: 'REMOVE_BOOK', payload: id });
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="button" onClick={dispatcher}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Book;
