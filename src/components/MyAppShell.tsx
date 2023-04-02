import { useState } from 'react';
import { AppShell } from '@mantine/core';
import MyHeader from './Header';
import MyNavbar from './MyNavbar';
import MyRouter, { routes } from './MyRouter';

const MyAppShell = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <MyNavbar
          opened={opened}
          routes={routes}
        />
      }
      header={
        <MyHeader
          opened={opened}
          setOpened={setOpened}
        />
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <MyRouter />
    </AppShell>
  );
};

export default MyAppShell;
