import PlatformIcons from "./PlatformIcons";
import { Card, Heading, CardBody, Image, HStack, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  genre: Genre;
}

const GenreCard = ({ genre }: Props) => {
  return (
    <>
      <HStack>
        <Image boxSize="40px" src={genre.image_background} borderRadius="lg" />
        <Text fontSize="18px">{genre.name}</Text>
      </HStack>
    </>
  );
};

export default GenreCard;
