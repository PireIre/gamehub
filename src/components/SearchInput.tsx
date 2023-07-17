import { useState } from "react";
import { Input } from "@chakra-ui/react";

function SearchInput() {
  return (
    <>
      <Input placeholder="Search" type="search" focusBorderColor="#fff" />
    </>
  );
}

export default SearchInput;
