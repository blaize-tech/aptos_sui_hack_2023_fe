import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { HtmlMeta } from '@look/components';

export const Pools = () => {
  return (
    <Box>
      <HtmlMeta title="Pools" />
      <Box as="section">
        <Text as="h1">Pools</Text>
      </Box>
    </Box>
  );
};
