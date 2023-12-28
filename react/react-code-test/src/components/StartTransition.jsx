import { startTransition, useState, useEffect, Suspense } from 'react';

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

  return (
    <Suspense >
      <div>
        <span>startTransition: {val}</span>
        <button onClick={onButton}>startTransition</button>
      </div>
    </Suspense >
  )
}

export default Index;