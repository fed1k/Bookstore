const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const reducer = (initialState = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { title: 'harry potter' };
    case REMOVE_BOOK:
      return {};
    default:
      return initialState;
  }
};

const createActionForBook = (actionType) => ({
  type: actionType,
});

export default reducer;
export { createActionForBook };
