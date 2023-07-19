import { useState } from "react";
import {
  Heading,
  List,
  ListItem,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "./../hooks/useGenres";

interface Props {
  setGenre: (genre: Genre) => void;
}

function GenreList({ setGenre }: Props) {
  const { genres, error } = useGenres();

  const onGengreClick = (genre: Genre) => {
    setGenre(genre);
  };

  return (
    <>
      <List spacing={2} paddingX="1px">
        <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
          Genres
        </Heading>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="40px"
                src={genre.image_background}
                borderRadius="lg"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onGengreClick(genre)}
                fontSize="md"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
