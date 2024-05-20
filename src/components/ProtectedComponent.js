import React from 'react';

const ProtectedComponent = () => {
  return (
    <div className="container">
      <h2>Protected Component</h2>
      <p>This content is protected and requires authentication.</p>
    </div>
  );
};

export default ProtectedComponent;
