import PlatformIcons from "./PlatformIcons";
import { Card, Heading, CardBody, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { getCroppedImageUrl } from "./../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius="30px">
        <CardBody>
          <Image
            objectFit="cover"
            height="200px"
            width="100%"
            paddingBottom="15px"
            src={getCroppedImageUrl(game.background_image)}
            borderRadius="lg"
          />
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIcons
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
