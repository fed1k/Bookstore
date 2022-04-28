import React from 'react';
import Book from './Book';
import Input from './Input';

const arrayOfBooksInfo = [
  {
    title: 'The Hunger games',
    author: 'Suzanne Collins',
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    title: 'Capital in the twentry-first Century',
    author: 'Suzanne Collins',
  },
];

const assignmentLooper = (a) => {
  const books = <Book title={a.title} author={a.author} />;
  return books;
};

const Books = () => (
  <div>
    {arrayOfBooksInfo.map((i) => assignmentLooper(i))}
    <Input />
  </div>
);

export default Books;
