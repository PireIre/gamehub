import { useState } from "react";
import { VStack, Heading, List, ListItem } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import Genre from "../hooks/useGenres";
import useGenres from "../hooks/useGenres";
import GenreCard from "./GenreCard";

function GenreList() {
  const { genres, error } = useGenres();

  console.log(genres);

  return (
    <>
      <List spacing={2} paddingX="1px">
        <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
          Genres
        </Heading>{" "}
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <GenreCard genre={genre} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
