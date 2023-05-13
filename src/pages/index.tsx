import type { NextPage } from "next";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorModeValue,
  Flex,
  Box
} from "@chakra-ui/react";
import { useState } from "react";

const Home: NextPage = () => {
  let [bids, setBids] = useState([{}, {}]);
  let [auction, setAuction] = useState("Auction1");



  return (
    <Flex
      align="center"
      justify="center"
      bg={useColorModeValue("white", "gray.700")}
      borderRadius="md"
      color={useColorModeValue("gray.700", "whiteAlpha.900")}
      shadow="base"
    >
      <Box
        textAlign="center"
        borderRadius="lg"
        p={{ base: 5, lg: 16 }}
        bgSize={"lg"}
        maxH={"80vh"}
        w="100%"
      >
        <Box bg='tomato' w='100%' p={4} mb={4} color='white'>
          Current Auction: {auction}
        </Box>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>Place</Th>
                <Th>Maker</Th>
                <Th>TokenIn</Th>
                <Th>TokenOut</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                bids.map((bid, index) => {
                  return <Tr>
                  <Td>{index + 1}.</Td>
                  <Td>0x...</Td>
                  <Td isNumeric>1000000000</Td>
                  <Td isNumeric>200000</Td>
                </Tr>
                })
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};

export default Home;
