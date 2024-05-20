import React, { useState } from 'react';

const ConditionalRenderingComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back, user!</p>
      ) : (
        <p>Please log in.</p>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  );
};

export default ConditionalRenderingComponent;
