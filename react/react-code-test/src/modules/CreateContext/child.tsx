import React, { useContext } from 'react';
import { TestContext } from './index';

const Chilid = () => {
  const test = useContext(TestContext)

  return (<div>
    <button onClick={() => { test.setValue('child' + performance.now()) }}>在chilid里面修改context</button>
    <span>TestContext: {test.value}</span>
  </div>)
}

export default React.memo(Chilid);