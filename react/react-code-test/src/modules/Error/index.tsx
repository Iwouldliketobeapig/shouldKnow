import React from 'react';

const Index = () => {
  const onError = () => {
    try {
      // @ts-ignore
      console.log(asdasfasdasd);
    } catch(err) {
      console.log(err, '+++++++++++++++++++++++++++++++++++')
    }
  }

  return (
    <div>
      这是用来测试catch的
      <button onClick={onError}>onError</button>
    </div>
  )
}

export default Index;