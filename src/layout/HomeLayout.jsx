import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';
import Footer from '../component/Footer';

const HomeLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto mt-0 ">
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;