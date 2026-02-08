import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { Slide, toast, ToastContainer,} from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();
  // console.log(createUser);
  const handelRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    
    const passwordPattern =
    /^(?=.*[A-z])(?=.*[a-z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError('passWord is invalid!!');
      return;
    }
    console.log(email, password);
    createUser(email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        //console.log(user);
        updateUser({ displayName: name, photoURL:photo })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });
            navigate('/');
            console.log(user)
          })
          .catch(error => {
            console.log(error)
          });
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
    

  }
  const handelShowBtn = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }
  return (
    <div className="my-6">
      <form
        onSubmit={handelRegister}
        className="flex justify-center items-center"
      >
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-center font-semibold text-3xl">
              Register your account
            </h2>
            <fieldset className="fieldset">
              <label className="label font-bold">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Your Name"
                required
              />
              <p className="text-red-500"></p>
              <label className="label font-bold">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />
              <label className="label font-bold">Email address</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button
                  onClick={handelShowBtn}
                  className="btn absolute right-3"
                >
                  {showPassword ? (
                    <FaRegEyeSlash></FaRegEyeSlash>
                  ) : (
                    <FaRegEye></FaRegEye>
                  )}
                </button>
              </div>
              {error && <p className='text-red-500'>{error}</p>}

              <label className="label">
                <input type="checkbox" className="checkbox" />
                Accept Term & Conditions
              </label>

              <button type="submit" className="btn btn-neutral mt-4">
                Resister
              </button>
            </fieldset>
            <p>
              {' '}
              Already Have An Account ?{' '}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Slide}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;