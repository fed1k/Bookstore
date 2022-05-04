import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Input from './Input';

let count = 0;
const assignmentLooper = (a) => {
  const books = <Book title={a.title} author={a.author} id={a.id} key={count += 1} />;
  return books;
};

const Books = () => {
  const initialArrayOfBooks = useSelector((state) => state);
  return (
    <div>
      {initialArrayOfBooks.books.map((i) => assignmentLooper(i))}
      <Input />
    </div>
  );
};
export default Books;
