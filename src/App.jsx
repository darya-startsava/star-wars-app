import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import ErrorPage from './pages/errorPage/ErrorPage';
import DetailsPage from './pages/detailsPage/DetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  { path: 'details', element: <DetailsPage /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
