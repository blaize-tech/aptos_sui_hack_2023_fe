import Link from 'next/link';
import { Box, Grid, Image } from '@chakra-ui/react';
import { Navigation } from '@look/components';

const Sidebar = () => {
  return (
    <Box as="aside" p="104px 40px" w="200px">
      <Grid templateRows={{ base: '1fr', lg: 'auto 1fr auto' }} gap="90px">
        <Link href={'/'} passHref>
          <Image src="/assets/images/Logo.png" h="16px" w="92px" alt="Phizen" />
        </Link>
        <Navigation />
      </Grid>
    </Box>
  );
};

export default Sidebar;
