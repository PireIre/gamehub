import { useState } from "react";

import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Box w="100%" p={4}>
        <NavBar />
      </Box>
      <Flex>
        <Box w="5%" p={4}>
          aside
        </Box>
        <Box w="100%" p={4}>
          <GameGrid />
        </Box>
      </Flex>
    </>
  );
}

export default App;
