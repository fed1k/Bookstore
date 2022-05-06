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

  return (
    <div className="book">
      <p className="category-p">{category}</p>
      <h1>{title}</h1>
      <p>{author}</p>
      <button
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
