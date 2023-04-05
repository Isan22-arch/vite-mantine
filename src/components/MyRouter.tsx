import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import PostIndex from '../pages/PostIndex';

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
    path: '/posts',
    element: <Posts />,
    children: [
      {
        id: 'PostIndex',
        index: true,
        element: <PostIndex />,
      },
      {
        id: 'Post',
        path: ':postId',
        element: <Post />,
      },
    ],
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
        >
          {
            route.children &&
              // <Routes>
              route.children.map((childRoute) => (
                <Route
                  key={childRoute.id}
                  index={childRoute.index}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))
            // </Routes>
          }
        </Route>
      ))}
    </Routes>
  );
};

export default MyRouter;
