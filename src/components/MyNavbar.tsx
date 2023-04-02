import { Link, useLocation } from 'react-router-dom';
import { Navbar, Stack } from '@mantine/core';
import React from 'react';

const MyNavbar = ({ opened, routes }: { opened: boolean }) => {
  const { pathname } = useLocation();

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 300, lg: 400 }}
    >
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
    </Navbar>
  );
};

export default MyNavbar;
