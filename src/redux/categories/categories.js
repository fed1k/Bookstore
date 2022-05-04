const ACTIVE = 'ACTIVE';
// const NOT_ACTIVE = 'NOT_ACTIVE';

const reducerForCategory = (state = null, action) => {
  switch (action.type) {
    case ACTIVE:
      return 'Under construction';
    default:
      return state;
  }
};
const createActionForCategory = () => ({ type: ACTIVE });

export default reducerForCategory;
export { createActionForCategory };
