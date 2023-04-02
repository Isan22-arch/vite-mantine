import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Group } from '@mantine/core';
import { routes } from '../MyRouter';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <nav>
        <Group position="center">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              style={{ textDecoration: route.path === pathname ? 'underline' : 'none' }}
            >
              {route.id}
            </Link>
          ))}
        </Group>
      </nav>
    </header>
  );
};

export default Header;
