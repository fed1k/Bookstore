import React from 'react';

const Input = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form action="post">
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default Input;
