import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import HomePage from '../page/HomePage';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element:<HomePage></HomePage>
      }
    ]
  },
]);