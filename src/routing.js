import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import ErrorPage from './pages/errorPage/ErrorPage';
import DetailsPage from './pages/detailsPage/DetailsPage';
import People from './people/People';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <People />,
    errorElement: <ErrorPage />,
  },
  { path: 'details', element: <DetailsPage /> },
]);
