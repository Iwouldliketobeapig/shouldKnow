import React, { createContext, useState } from 'react';
import Child from './child';

type TestContext = {
  value: string;
  setValue: (val: string) => void;
}

export const TestContext = createContext<TestContext>({
  value: '',
  setValue: () => { },
});

export default () => {
  const [value, setValue] = useState('');

  return <TestContext.Provider value={{ value, setValue }}>
    <div>create context</div>
    <Child />
  </TestContext.Provider>
}