// App.tsx

import React from 'react';
import { MyProvider } from '../src/component/MyContext';
import MyComponent from '../src/component/MyComponent';

const App: React.FC = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

export default App;
