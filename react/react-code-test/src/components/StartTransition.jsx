import { startTransition, useState, useEffect } from 'react';

const Index = () => {
  const [val, setVal] = useState();

  useEffect(() => {
    setTimeout(() => {
      startTransition(() => {
        setVal(Math.random());
      })
    }, 5000)
  }, [])

  const onButton = () => {
    startTransition(() => {
      setVal(Math.random());
    });
  }

  return (<div>
    <span>startTransition: {val}</span>
    <button onClick={onButton}>startTransition</button>
  </div>)
}

export default Index;