import { startTransition, useState, useEffect, } from 'react';

const Index = () => {
  debugger
  const [val, setVal] = useState('默认值');
  const [otherVal, setOtherVal] = useState('默认值');

  // useEffect(() => {
  //   setTimeout(() => {
  //     startTransition(() => {
  //       setVal(Math.random());
  //     })
  //   }, 5000)
  // }, [])

  const onButton = () => {
    startTransition(() => {
      const random = Math.random();
      setVal(random);
      setVal(random + '你好+val');
      setVal(random + '你好你好+val');
      setOtherVal(random + '你好otherVal');
    });
  }

  return (
    <div>
      <div>{otherVal}
        <h1>{val}</h1>
      </div>
      <span>startTransition: {val}</span>
      <button onClick={onButton}>startTransition</button>
    </div>
  )
}

export default Index;