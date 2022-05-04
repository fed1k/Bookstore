import React from 'react';
import { useDispatch } from 'react-redux';

const Input = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form action="post">
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button type="button" onClick={() => dispatch({ type: 'ADD_BOOK' })}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Input;
