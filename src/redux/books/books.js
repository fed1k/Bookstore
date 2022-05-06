import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const initialArrayOfBooks = [
  {
    item_id: uuidv4(),
    title: 'Pride and Prejiduce',
    author: 'Jane Austen',
    category: 'Love',
  },
  {
    item_id: uuidv4(),
    title: 'Hamlet',
    author: 'William Shakespeare',
    category: 'Tragedy',
  },
];

const reducer = (initialState = initialArrayOfBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...initialState, action.payload];
    case REMOVE_BOOK:
      return [...initialState.filter((book) => (book.item_id !== action.payload))];
    default:
      return initialState;
  }
};

const createActionForBookToAdd = (title, author, id, category) => ({
  type: 'NON_ACTIVE',
  payload: {
    title,
    author,
    id,
    category,
  },
});

const createActionForBookToRemove = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// const globalAppApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3VUiqfgy3aXwGwDzzEyK/books';

// export const thunkFunction = () => async (dispatch, getState) => {
//   const dataInStore = getState().books[0];
//   console.log(dataInStore);

//   await fetch(globalAppApi, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(dataInStore),
//   }).then((response) => response.text()).then((json) => console.log(json));
// };
// console.log(uuidv4());

export default reducer;
export { createActionForBookToAdd, createActionForBookToRemove };
