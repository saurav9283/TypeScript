// MyComponent.tsx

import React from 'react';
import { useMyContext } from './MyContext';

const MyComponent: React.FC = () => {
  const { count, increment, decrement } = useMyContext();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
