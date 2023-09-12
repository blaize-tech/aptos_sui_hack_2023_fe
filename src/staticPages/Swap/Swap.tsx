import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { HtmlMeta } from '@look/components';

export const Swap = () => {
  return (
    <Box>
      <HtmlMeta title="Swap" />
      <Box as="section">
        <Text as="h1">Swap</Text>
      </Box>
    </Box>
  );
};
