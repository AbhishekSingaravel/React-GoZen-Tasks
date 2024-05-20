import React from 'react';

const ChildComponent = ({ inputValue, handleChange }) => {
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default ChildComponent;
