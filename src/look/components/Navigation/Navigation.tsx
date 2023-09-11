import { Box, Container, Grid, Text, VStack, Link } from '@chakra-ui/react';
import {
  Dashboard,
  Stake,
  Split,
  Pools,
  Swap,
  Governance,
  Analytics,
} from '@look/components/Icons';

export const Navigation = () => (
  <VStack as={'nav'} spacing="48px" justifyContent="flex-start" fontSize="12px">
    <Link href={'#'} display="flex" alignItems="center" justifyContent="flex-start" gap="16px">
      <Dashboard />
      Dashboard
    </Link>
    <Link href={'#'} display="flex" alignItems="center" justifyContent="flex-start" gap="16px">
      <Stake />
      Stake
    </Link>
    <Link href={'#'} display="flex" alignItems="center" justifyContent="flex-start" gap="16px">
      <Split />
      Split
    </Link>
    <Link href={'#'} display="flex" alignItems="center" justifyContent="flex-start" gap="16px">
      <Pools />
      Pools
    </Link>
    <Link href={'#'} display="flex" alignItems="center" justifyContent="flex-start" gap="16px">
      <Swap />
      Swap
    </Link>
    <Link href={'#'} display="flex" alignItems="center" justifyContent="flex-start" gap="16px">
      <Governance />
      Governance
    </Link>
    <Link href={'#'} display="flex" alignItems="center" justifyContent="flex-start" gap="16px">
      <Analytics />
      Analytics
    </Link>
  </VStack>
);
