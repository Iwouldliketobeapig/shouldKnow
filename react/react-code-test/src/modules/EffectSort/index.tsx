import React, { useEffect } from 'react';
import Child from './Child';

export default () => {
  useEffect(() => {
    console.log('effect father');
    return () => {
      console.log('destory father')
    }
  }, [])

  return <div><Child /></div>
}