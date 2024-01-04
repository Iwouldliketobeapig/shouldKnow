import React from 'react';

const Index = () => {
  const onClick = () => {
    console.log('onClick');
  }

  const onClickCapture = () => {
    console.log('onClickCapture');
  }

  const outerClick = () => {
    console.log('outerClick');
  }

  return <div onClick={outerClick}><div onClick={onClick} onClickCapture={onClickCapture}>captureAndBubbing</div></div>;
}

export default Index;