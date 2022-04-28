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
const Books = () => (
  <div>
    <Book title={arrayOfBooksInfo[0].title} author={arrayOfBooksInfo[0].author} />
    <Book title={arrayOfBooksInfo[1].title} author={arrayOfBooksInfo[1].author} />
    <Book title={arrayOfBooksInfo[2].title} author={arrayOfBooksInfo[2].author} />
    <Input />
  </div>
);

export default Books;
