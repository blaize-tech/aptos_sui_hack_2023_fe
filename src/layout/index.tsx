import { Box, Container, Grid } from '@chakra-ui/react';

import Sidebar from './components/Sidebar';
import {StoreProvider} from "@utils/store";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
      <StoreProvider>
        <Box py="88px">
          <Container>
            <Grid templateColumns="auto 1fr" borderRadius="40px" bgColor="blue.dark">
              <Sidebar />
              <Box
                  bgImage="/assets/images/bg_content.png"
                  borderRadius="40px 0 0 40px"
                  bgSize="cover"
                  p="80px"
              >
                {children}
              </Box>
            </Grid>
          </Container>
        </Box>
      </StoreProvider>
  );
};
export default Layout;
