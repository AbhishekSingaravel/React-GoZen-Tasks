import React, { useEffect, useState } from 'react';

const LifecycleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

    return () => {
      // Cleanup code
      setData(null);
    };
  }, []);

  return (
    <div>
      {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
};

export default LifecycleComponent;
