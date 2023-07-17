import { useState } from "react";

import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Box w="100%" p={4}>
        <NavBar />
      </Box>
      <Flex>
        <Box h="1000px" w="5%" p={4}>
          This is the Box
        </Box>
        <Box h="1000px" w="100%" p={4}>
          This is the Box
        </Box>
      </Flex>
    </>
  );
}

export default App;
