import NextLink from 'next/link';
import { VStack, Link } from '@chakra-ui/react';
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
    <Link
      as={NextLink}
      href={'/'}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap="16px"
    >
      <Dashboard />
      Dashboard
    </Link>
    <Link
      as={NextLink}
      href={'/stake'}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap="16px"
    >
      <Stake />
      Stake
    </Link>
    <Link
      as={NextLink}
      href={'/split'}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap="16px"
    >
      <Split />
      Split
    </Link>
    <Link
      as={NextLink}
      href={'/pools'}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap="16px"
    >
      <Pools />
      Pools
    </Link>
    <Link
      as={NextLink}
      href={'/swap'}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap="16px"
    >
      <Swap />
      Swap
    </Link>
    <Link
      as={NextLink}
      href={'/governance'}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap="16px"
    >
      <Governance />
      Governance
    </Link>
    <Link
      as={NextLink}
      href={'/analytics'}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap="16px"
    >
      <Analytics />
      Analytics
    </Link>
  </VStack>
);
