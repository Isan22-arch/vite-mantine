import { Navbar } from '@mantine/core';
import React from 'react';
import MyLink from './MyLink';

const MyNavbar = ({ opened, routes }: { opened: boolean }) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 300, lg: 400 }}
    >
      <MyLink routes={routes} />
    </Navbar>
  );
};

export default MyNavbar;
