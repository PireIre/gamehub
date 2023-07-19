import { useState } from "react";

import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Box w="100%" p={4}>
        <NavBar />
      </Box>
      <Flex>
        <Box w="10%" p={4}>
          <GenreList />
        </Box>
        <Box w="90%" p={4}>
          <GameGrid />
        </Box>
      </Flex>
    </>
  );
}

export default App;
