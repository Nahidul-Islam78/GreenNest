import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <RotatingLines></RotatingLines>
    </div>
  );
};

export default Loading;