import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

interface Props {
  genreId: number
}

const GameGrid = ( {genreId}: Props ) => {
  const { games, error } = useGames(genreId);

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
