import { Stack } from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const MyLink = ({ routes }) => {
  return (
    <Stack
      align="center"
      justify="space-between"
    >
      {routes
        .filter((route) => route.id !== 'NotFound')
        .map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            style={({ isActive }) =>
              isActive ? { color: '#f00' } : { textDecoration: 'none' }
            }
          >
            {route.id}
          </NavLink>
        ))}
    </Stack>
  );
};

export default MyLink;
