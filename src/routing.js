import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import ErrorPage from './pages/errorPage/ErrorPage';
import DetailsPage from './pages/detailsPage/DetailsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  { path: 'details/:id', element: <DetailsPage /> },
]);
