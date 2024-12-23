import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Stories from './Pages/Stories';
import Catalog from './Pages/Catalog';
import { CatalogDetail } from './Pages/CatalogDetail';
import Layout from './Components/Layout';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/stories', element: <Stories /> },
      { path: '/catalog', element: <Catalog /> },
      { path: '/catalog/:id', element: <CatalogDetail /> }, 
    ],
  },
]);

export default Router;
