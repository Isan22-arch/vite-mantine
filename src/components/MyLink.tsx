import { Stack } from '@mantine/core';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MyLink = ({ routes }) => {
  const { pathname } = useLocation();

  return (
    <Stack
      align="center"
      justify="space-between"
    >
      {routes.map((route) => (
        <Link
          key={route.path}
          to={route.path}
          style={
            route.path === pathname
              ? { textDecoration: 'underline', fontWeight: 'bold' }
              : { textDecoration: 'none' }
          }
        >
          {route.id}
        </Link>
      ))}
    </Stack>
  );
};

export default MyLink;
