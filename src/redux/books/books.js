const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const initialArrayOfBooks = [];

const reducer = (initialState = initialArrayOfBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...initialState, action.payload];
    case REMOVE_BOOK:
      return [...initialState.filter((book) => (book.item_id !== action.payload))];
    case 'UPDATE_STORE':
      return action.payload;
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

const createActionForUpdateStore = (list) => ({
  type: 'UPDATE_STORE',
  payload: list,
});

const globalAppApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ypxIDGTAyYvIOEECySyW/books';

export const postDataToApi = () => async (dispatch, getState) => {
  const identifyAddedBook = getState().books.length - 1;
  const dataInStore = getState().books[identifyAddedBook];

  await fetch(globalAppApi, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dataInStore),
  });
};

export const getDataFromAPi = () => async (dispatch) => {
  const response = await fetch(globalAppApi).then((data) => data.json());
  const books = Object.keys(response).map((key) => {
    const { title, author, category } = response[key][0];
    return {
      item_id: key, title, author, category,
    };
  });
  dispatch(createActionForUpdateStore(books));
};

export const deleteDataFromApi = () => async () => {
  const idkarta = JSON.parse(localStorage.getItem('id'));
  const real = idkarta.idkart;
  await fetch(`${globalAppApi}/${real}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: real }),
  });
};

export default reducer;
export { createActionForBookToAdd, createActionForBookToRemove };
