import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Input = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const handleChangeOfTitle = (e) => {
    setState({ title: e.target.value, author: state.author });
  };

  const handleChangeOfAuthor = (e) => {
    setState({ title: state.title, author: e.target.value });
  };

  const addBook = () => {
    dispatch({ type: 'ADD_BOOK', payload: { title: state.title, author: state.author } });
    setState({ title: '', author: '' });
  };

  const enterEvent = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      addBook();
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form action="post">
        <input type="text" placeholder="Book title" value={state.title} onChange={(e) => handleChangeOfTitle(e)} />
        <input type="text" placeholder="Author" value={state.author} onChange={(e) => handleChangeOfAuthor(e)} onKeyUp={(e) => enterEvent(e)} />
        <button type="button" onClick={addBook}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Input;
