const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const initialArrayOfBooks = [
  {
    title: 'Pride and Prejiduce',
    author: 'Jane Austen',
  },
  {
    title: 'Hamlet',
    author: 'William Shakespeare',
  },
];

const reducer = (initialState = initialArrayOfBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...initialState, action.payload];
    case REMOVE_BOOK:
      return [...initialState.filter((book) => (book.id !== action.id))];
    default:
      return initialState;
  }
};

const createActionForBookToAdd = (title, author) => ({
  type: 'NON_ACTIVE',
  payload: {
    title,
    author,
  },
});

const createActionForBookToRemove = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default reducer;
export { createActionForBookToAdd, createActionForBookToRemove };
