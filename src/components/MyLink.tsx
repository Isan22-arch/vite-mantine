import { Stack } from '@mantine/core';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MyLink = ({ routes }) => {
  const location = useLocation();
  console.log(location);
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
            to={{
              pathname: route.path,
              search: '?api_key=eimaieU9',
            }}
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
