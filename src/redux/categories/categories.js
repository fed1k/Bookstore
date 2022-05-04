const ACTIVE = 'ACTIVE';
// const NOT_ACTIVE = 'NOT_ACTIVE';

const undeCons = {
  cons: 'Under construction',
};

const reducerForCategory = (state = '', action) => {
  switch (action.type) {
    case ACTIVE:
      return undeCons;
    default:
      return state;
  }
};
const createActionForCategory = () => ({ type: ACTIVE });

export default reducerForCategory;
export { createActionForCategory };
