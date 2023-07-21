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
  const [gameQuery, setGameQuery] = useState<GamesQuery>({} as GamesQuery);

  console.log(gameQuery);

  return (
    <>
      <Box w="100%" p={4}>
        <NavBar />
      </Box>
      <Flex>
        <Box w="10%" p={4}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </Box>
        <Box w="90%" p={4}>
          <Heading>{gameQuery.genre?.name || ""}</Heading>
          <SortingMenu
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <br /> <br />
          <GameGrid
            gameQuery={gameQuery}
          />
        </Box>
      </Flex>
    </>
  );
}

export default App;
