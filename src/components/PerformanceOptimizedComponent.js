import React, { useState, useMemo, useCallback } from 'react';

const PerformanceOptimizedComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const expensiveCalculation = useMemo(() => {
    // Simulate an expensive calculation
    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={handleClick}>Increment Count</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default PerformanceOptimizedComponent;
