import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

interface Props {
  genreId: number
  platformId: number
}

const GameGrid = ( {genreId, platformId}: Props ) => {
  const { games, error } = useGames(genreId, platformId);

  console.log(games);

  return (
    <>
      <SimpleGrid minChildWidth="400px" spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
