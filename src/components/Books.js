import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromAPi } from '../redux/books/books';
import Book from './Book';
import Input from './Input';
// import { getDataFromAPi } from './..redux/books/books';

let count = 0;
const assignmentLooper = (a) => {
  const books = (
    <Book
      title={a.title}
      author={a.author}
      id={a.item_id}
      key={count += 1}
      category={a.category}
    />
  );
  return books;
};

const Books = () => {
  const initialArrayOfBooks = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromAPi());
  }, []);
  return (
    <div className="main">
      {initialArrayOfBooks.books.map((i) => assignmentLooper(i))}
      <Input />
    </div>
  );
};
export default Books;
