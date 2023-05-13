import React from "react";
import {
  Text,
  Flex,
  useColorModeValue,
  Spacer,
  Box,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Logo } from "../../Reusables/helper";
import { SITE_NAME } from "../../configuration/Config";
interface Props {
  className?: string;
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export function Header(props: Props) {
  const className = props.className ?? "";
  return (
    <Flex
      as="header"
      className={className}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      opacity={1}
      px={4}
      py={2}
      mb={8}
      //pos="fixed"
      pos="sticky"
      w="full"
      alignItems="center"
      borderBottom="1px"
      borderBottomWidth="small"
      borderBottomStyle="solid"
      borderBottomColor="white"
    >
      <Flex flex={{ base: 2 }} justify={{ base: "center", md: "start" }}>
        <Link
          href={"/"}
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          color={useColorModeValue("gray.800", "white")}
          _hover={{
            textDecoration: "none",
            color: useColorModeValue("gray.800", "white"),
            bg: useColorModeValue("green.200", "green.900"),
          }}
        >
          <Logo />
        </Link>
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
        </Flex>
      </Flex>

      <Spacer />

      <Flex alignItems="center" gap={4}>
        {/* <ConnectButton
          accountStatus={{
            smallScreen: "address",
            largeScreen: "full",
          }}
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        /> */}
        <ThemeSwitcher />
      </Flex>
    </Flex>
  );
}
