import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Posts from '../pages/Posts';

export const routes = [
  {
    id: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    id: 'About',
    path: '/about',
    element: <About />,
  },
  {
    id: 'Contact',
    path: '/contact',
    element: <Contact />,
  },
  {
    id: 'Posts',
    path: '/posts/*',
    element: <Posts />,
  },
  {
    id: 'NotFound',
    path: '*',
    element: <NotFound />,
  },
];

const MyRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default MyRouter;
