import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';

const HomeLayout = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <header>
        <Header></Header>
      </header>
      <Outlet>  
      </Outlet>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;