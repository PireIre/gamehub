import { useState } from "react";

import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GamesQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [selectedGenre, setGenre] = useState({ id: 14 });

  console.log(selectedGenre);
  return (
    <>
      <Box w="100%" p={4}>
        <NavBar />
      </Box>
      <Flex>
        <Box w="10%" p={4}>
          <GenreList setGenre={setGenre} />
        </Box>
        <Box w="90%" p={4}>
          <GameGrid genreId={selectedGenre.id} />
        </Box>
      </Flex>
    </>
  );
}

export default App;
