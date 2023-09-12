import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { HtmlMeta } from '@look/components';

export const Analytics = () => {
  return (
    <Box>
      <HtmlMeta title="Analytics" />
      <Box as="section">
        <Text as="h1">Analytics</Text>
      </Box>
    </Box>
  );
};
