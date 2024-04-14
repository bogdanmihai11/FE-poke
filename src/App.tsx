import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Pokemon from "./pages/pokemon/pokemon";
import { AppContextProvider } from "./components/App/AppContextProvider";
import Layout from "./components/Layout/Layout";
import DataFetcher from "./components/DataFetcher/DataFetcher";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/pokemon/:pokemonId", element: <Pokemon /> },
]);

const App = () => {
  
  return (
    <>
      <AppContextProvider>
        <DataFetcher>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </DataFetcher>
      </AppContextProvider>
    </>
  );
};

export default App;
