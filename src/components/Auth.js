import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication process
    setAuthenticated(true);
    navigate('/protected');
  };

  return (
    <div className="container">
      <h2>Auth Component</h2>
      {authenticated ? (
        <p>You are logged in!</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Auth;
