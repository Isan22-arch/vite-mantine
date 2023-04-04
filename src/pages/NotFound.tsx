import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Text, Title, Button } from '@mantine/core';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Title order={1}>404</Title>
      <Text size="xl">ページが見つかりません</Text>
      <Button
        component={RouterLink}
        to="/"
        type="button"
      >
        Back to home
      </Button>
    </div>
  );
};

export default NotFound;
