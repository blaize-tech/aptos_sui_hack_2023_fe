import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { HtmlMeta } from '@look/components';

export const Split = () => {
  return (
    <Box>
      <HtmlMeta title="Split" />
      <Box as="section">
        <Text as="h1">Split</Text>
      </Box>
    </Box>
  );
};
