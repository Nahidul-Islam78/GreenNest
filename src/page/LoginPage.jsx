import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const LoginPage = () => {
  const { signinUser ,setUser} = use(AuthContext);
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signinUser(email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
      console.log(user)
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  }

  return (
    <div className="flex justify-center items-center my-8">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelLogin} className="card-body">
          <h2 className="text-center font-semibold text-3xl">
            Login your account
          </h2>
          <fieldset className="fieldset">
            <label className="label font-bold">Email address</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          <p className="text-red-500"></p>
          <p>
            {' '}
            Dont’t Have An Account ?{' '}
            <Link className="text-secondary" to="/auth/register">
              Register
            </Link>
          </p>
        </form>
        <div className="login-google ">
          <button className="btn w-full bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;