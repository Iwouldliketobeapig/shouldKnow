import React from 'react'
import { useState, useEffect } from 'react';

const lazy = (importFn) => {
  return (props: Record<string, any>) => {
    const [Com, setCom] = useState<React.FC>();

    useEffect(() => {
      importFn.then(({ default: Com }) => {
        setCom(Com as any as React.FC);
      }).catch(err => console.log(err, 'lazy import error, 666666666'));
    }, [])

    // return <div>lazy</div>

    return Com ? <Com {...props} /> : null;
  }
};

export default lazy;