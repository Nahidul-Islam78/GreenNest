import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import HomePage from '../page/HomePage';
import PlantDetails from '../page/PlantDetails';
import AuthLayout from '../layout/AuthLayout';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';
import ProfilePage from '../page/ProfilePage';
import PrivetRoute from '../provider/PrivetRoute';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        loader: () => fetch('/plants.json'),
      },
      {
        path: '/details/:id',
        element: (
          <PrivetRoute>
            <PlantDetails></PlantDetails>
          </PrivetRoute>
        ),
        loader: () => fetch('/plants.json'),
      },
      {
        path: '/profile',
        element: (
          <PrivetRoute>
            <ProfilePage></ProfilePage>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <LoginPage></LoginPage>,
      },
      {
        path: '/auth/register',
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);