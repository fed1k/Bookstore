import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postDataToApi } from '../redux/books/books';

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
    if (state.author && state.title) {
      dispatch({
        type: 'ADD_BOOK',
        payload: {
          title: state.title, author: state.author, item_id: uuidv4(), category: 'General',
        },
      });
      setState({ title: '', author: '' });
      dispatch(postDataToApi());
    }
  };

  const enterEvent = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      addBook();
    }
  };
  // const store = useSelector((state) => state);

  // dispatch(thunkFunction());

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form action="post">
        <input type="text" placeholder="Book title" value={state.title} onChange={(e) => handleChangeOfTitle(e)} onKeyUp={(e) => enterEvent(e)} />
        <input type="text" placeholder="Author" value={state.author} onChange={(e) => handleChangeOfAuthor(e)} onKeyUp={(e) => enterEvent(e)} />
        <button type="button" onClick={addBook}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Input;
