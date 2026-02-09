import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const ProfilePage = () => {
  const { user, updateUser, setUser, } = useContext(AuthContext);
  const updateName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    updateUser({ displayName: name }).then(()=> {
      console.log('hello')
      setUser({
        ...user,
        displayName: name
      });
    }).catch()
  }
  const updatePhoto = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    console.log(photo);
    updateUser({ photoURL: photo })
      .then(() => {
        console.log('hello');
        setUser({
          ...user,
          photoURL: photo,
        });
      })
      .catch();
  }
  return (
    <div className='min-h-screen'>
      <div className="flex justify-center items-center flex-col gap-5">
        <p>Name :{user.displayName}</p>
        <p>Email :{user.email}</p>
        <img className="rounded-full" src={user.photoURL} alt="" />
      </div>
      <div className="dropdown dropdown-hover flex justify-center items-center flex-col gap-5 mt-4">
        <div tabIndex={0} role="button" className="btn m-1">
          Update Profile
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="btn m-1">
              Name ➡️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <form onSubmit={updateName} className="join">
                <input
                  type="text"
                  name="name"
                  className="input join-item"
                  placeholder="your name"
                />
                <button type="submit" className="btn join-item">
                  save
                </button>
              </form>
            </ul>
          </div>
          <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="btn m-1">
              Photo ➡️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <form onSubmit={updatePhoto} className="join">
                <input
                  type="text"
                  name="photo"
                  className="input join-item"
                  placeholder="your photo url"
                />
                <button type="submit" className="btn join-item">
                  save
                </button>
              </form>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;