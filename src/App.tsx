import { useState } from "react";

import { Box, Heading, Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import SortingMenu from "./components/SortingMenu";

export interface GamesQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [selectedGenre, setGenre] = useState({ name: "Action", id: 14 });
  const [selectedPlatform, setPlatform] = useState({ id: 1 });

  console.log(selectedPlatform);

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
          <Heading>{selectedGenre.name}</Heading>
          <SortingMenu setPlatform={setPlatform} />
          <br /> <br />
          <GameGrid
            genreId={selectedGenre.id}
            platformId={selectedPlatform.id}
          />
        </Box>
      </Flex>
    </>
  );
}

export default App;
