import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {
  const dispatch = useDispatch();
  const showTextUnderConstruction = () => {
    dispatch({ type: 'ACTIVE' });
  };
  return (
    <div className="category-div">
      <p id="construction-text">{useSelector((state) => state.categories.cons)}</p>
      <button type="button" onClick={showTextUnderConstruction}>Check status</button>
    </div>
  );
};

export default Categories;
