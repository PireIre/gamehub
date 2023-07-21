import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GamesQuery } from "../App";

interface Props {
  gameQuery: GamesQuery
}

const GameGrid = ( {gameQuery}: Props ) => {
  const { games, error } = useGames(gameQuery.genre?.id, gameQuery.platform?.id);

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
