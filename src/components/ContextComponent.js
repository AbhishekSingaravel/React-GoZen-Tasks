import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ContextComponent = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div>
      <p>Context Value: {state}</p>
      <button onClick={() => setState('New Context Value')}>
        Update Context
      </button>
    </div>
  );
};

export default ContextComponent;
