import PlatformIcons from "./PlatformIcons";
import { Card, Heading, CardBody, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius="30px">
        <CardBody>
          <Image src={game.background_image} borderRadius="lg" />
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIcons platforms={game.parent_platforms?.map((p) => p.platform)} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
