import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '@src/store';

export default () => {
  const count = useSelector((state: State) => state.count);
  const dispatch = useDispatch();

  const addDispatch = () => {
    dispatch({ type: 'ADD' })
  }

  const lessDispatch = () => {
    dispatch({ type: 'LESS' })
  }

  return (
    <div>
      <span>count: {count}</span>
      <button onClick={lessDispatch}>less</button>
      <button onClick={addDispatch}>add</button>
    </div>
  )
}