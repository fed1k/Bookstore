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

  const [errorMsg, setErrorMsg] = useState('ADD BOOK');
  const [errorMsgColor, setErrorMsgColor] = useState('addbook-btn');
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
    } else {
      setErrorMsg('FAILED');
      setErrorMsgColor('addbook-btn-failed');
    }
  };

  const enterEvent = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      addBook();
    }
  };

  const isTextAvailable = () => {
    if (state.title && state.author) {
      setErrorMsg('ADD BOOK');
      setErrorMsgColor('addbook-btn');
    }
  };
  return (
    <div className="input-div">
      <h2>ADD NEW BOOK</h2>
      <form action="post">
        <input
          type="text"
          placeholder="Book title"
          value={state.title}
          onChange={(e) => {
            handleChangeOfTitle(e);
            isTextAvailable();
          }}
          onKeyUp={(e) => enterEvent(e)}
        />
        <input
          type="text"
          placeholder="Author"
          value={state.author}
          onChange={(e) => {
            handleChangeOfAuthor(e);
            isTextAvailable();
          }}
          onKeyUp={(e) => enterEvent(e)}
        />
        <button className={errorMsgColor} type="button" onClick={addBook}>{errorMsg}</button>
      </form>
    </div>
  );
};

export default Input;
