import React, { useContext } from 'react';
import Logo from './../assets/logo.png'
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { CgProfile } from 'react-icons/cg';

const Naver = () => {
  const { user, logout } = useContext(AuthContext);
  
  const handelLogout = () => {
    logout().then(() => {
      
    }).catch()

  }
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink className=" hover:bg-[#F3EEEA]">Home</NavLink>
            </li>
            <li>
              <NavLink className="hover:bg-[#F3EEEA]"> Plants</NavLink>
            </li>
            <li>
              <NavLink className="hover:bg-[#F3EEEA]">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <img className="h-20 w-fit" src={Logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="hover:bg-[#F3EEEA]">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:bg-[#F3EEEA]"> Plants</NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="hover:bg-[#F3EEEA]">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <CgProfile className="h-12 w-full" />
            <div>
              <details className="dropdown ">
                <summary className="btn bg-black text-[#ffffff] hover:bg-[#F3EEEA] hover:text-black ">{user.displayName }</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box  w-fit p-2 shadow-sm">
                  <li>
                    <button
                      onClick={handelLogout}
                      className="btn bg-black text-[#ffffff] hover:bg-[#F3EEEA] hover:text-black "
                    >
                      Logout
                    </button>
                  </li>
                  
                </ul>
              </details>
            </div>
          </div>
        ) : (
          <NavLink
            to="/auth/login"
            className="btn bg-black text-[#ffffff] hover:bg-[#F3EEEA] hover:text-black "
          >
            Login / Register
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Naver;