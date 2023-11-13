
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";

import CountriesPage from './pages/Countries';
import CountryDetailsPage from "./pages/CountryDetails";
import ErrorPage from "./pages/Error";
import { countriesLoader, countriesDetailsLoader } from "./utils/loaders";


const router = createBrowserRouter([
  {
    element: (<MainLayout />),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <CountriesPage />,
        loader: countriesLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/details/:code",
        element: <CountryDetailsPage />,
        loader: countriesDetailsLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
