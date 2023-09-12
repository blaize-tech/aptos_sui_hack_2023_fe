import { Box, Text } from '@chakra-ui/react';
import { HtmlMeta } from '@look/components';

export const Dashboard = () => {
  return (
    <Box>
      <HtmlMeta title="Dashboard" />
      <Box as="section">
        <Text as="h1">Dashboard</Text>
      </Box>
    </Box>
  );
};
