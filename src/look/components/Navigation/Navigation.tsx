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
import { useRouter } from "next/router";

export const Navigation = () => {
  const router = useRouter();

  return (
    <VStack as={'nav'} spacing="48px" justifyContent="flex-start" fontSize="12px">
      <Link
        as={NextLink}
        href=""
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        gap="16px"
        opacity={0.4}
        cursor="not-allowed"
        color={router.pathname === "/" ? "white" : "gray"}
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
        color={router.pathname === "/stake" ? "white" : "gray"}
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
        color={router.pathname === "/split" ? "white" : "gray"}
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
        color={router.pathname === "/pools" ? "white" : "gray"}
      >
        <Pools />
        Pools
      </Link>
      <Link
        as={NextLink}
        href=""
        display="flex"
        opacity={0.4}
        cursor="not-allowed"
        alignItems="center"
        justifyContent="flex-start"
        gap="16px"
        color={router.pathname === "/swap" ? "white" : "gray"}
      >
        <Swap />
        Swap
      </Link>
      <Link
        as={NextLink}
        href=""
        display="flex"
        opacity={0.4}
        cursor="not-allowed"
        alignItems="center"
        justifyContent="flex-start"
        gap="16px"
        color={router.pathname === "/governance" ? "white" : "gray"}
      >
        <Governance />
        Governance
      </Link>
      <Link
        as={NextLink}
        href=""
        display="flex"
        opacity={0.4}
        cursor="not-allowed"
        alignItems="center"
        justifyContent="flex-start"
        gap="16px"
        color={router.pathname === "/analytics" ? "white" : "gray"}
      >
        <Analytics />
        Analytics
      </Link>
    </VStack>
  );
}
