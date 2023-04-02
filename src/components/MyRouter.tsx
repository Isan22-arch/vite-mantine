import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';

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
