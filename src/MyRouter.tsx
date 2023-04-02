import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';

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
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
