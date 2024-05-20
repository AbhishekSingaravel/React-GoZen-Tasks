import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent inputValue={inputValue} handleChange={handleChange} />
    </div>
  );
};

export default ParentComponent;
