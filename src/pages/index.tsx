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
import { useState, useEffect } from "react";
import { BigNumber } from "ethers";

interface Bid {
  maker: string,
  tokenIn: string,
  tokenOut: string
}

const Home: NextPage = () => {
  const [bids, setBids] = useState<Bid[]>([]);
  const [auction, setAuction] = useState("Auction1");
  
  useEffect(() => {
    if(!process.env.REACT_APP_WEB_SOCKET) {
      setAuction("Auction1")
      setBids([{maker: "0x1", tokenIn: "10000000", tokenOut: "30000"}, {maker: "0x2", tokenIn: "10000000", tokenOut: "20000"}]);
      return;
    }
    const ws = new WebSocket(process.env.REACT_APP_WEB_SOCKET);

    const apiCall = {
    };
  
    ws.onopen = (event) => {
      ws.send(JSON.stringify(apiCall));
    };
  
    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      try {
        if ((json.event = "bid")) {
          setBids([...bids, json.data as Bid]);
        }
        else if ((json.event = "auction")) {
          setAuction(json.data);
          setBids([]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    
  }, []);
  

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
                bids
                .sort((a, b) => BigNumber.from(a.tokenOut).sub(b.tokenOut).isNegative() ? 1 : -1 )
                .map((bid, index) => {
                  return <Tr key={index}>
                  <Td>{index + 1}.</Td>
                  <Td>{bid.maker}</Td>
                  <Td isNumeric>{bid.tokenIn}</Td>
                  <Td isNumeric>{bid.tokenOut}</Td>
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
