import React from 'react';
import { Header, MediaQuery, Burger } from '@mantine/core';

const MyHeader = ({ opened, setOpened }) => {
  return (
    <Header
      height={60}
      p="xs"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <MediaQuery
          largerThan="sm"
          styles={{ display: 'none' }}
        >
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            // color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
      </div>
    </Header>
  );
};

export default MyHeader;
