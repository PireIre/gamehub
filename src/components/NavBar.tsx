import { useState } from "react";
import { HStack, Image, Button } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <>
      <HStack>
        <Image
          src="/logo-black.png"
          alt="Black logo"
          boxSize="67px"
          objectFit="cover"
        />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
