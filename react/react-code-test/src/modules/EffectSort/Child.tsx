import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    console.log('effect child');
    return () => {
      console.log('destory child')
    }
  }, [])

  return <div>child</div>
}