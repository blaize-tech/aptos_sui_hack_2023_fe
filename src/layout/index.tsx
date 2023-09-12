import { Box, Container, Grid } from '@chakra-ui/react';

import Sidebar from './components/Sidebar';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Box py="88px">
      <Container>
        <Grid templateColumns="auto 1fr" borderRadius="40px" bgColor="blue.dark">
          <Sidebar />
          <Box
            bgImage="/assets/images/bg_content.png"
            borderRadius="40px 0 0 40px"
            bgPosition="right"
            bgSize="cover"
            p="80px"
          >
            {children}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
export default Layout;
