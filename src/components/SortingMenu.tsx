import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import usePlatforms from "./../hooks/usePlatforms";

import { MdChevronRight } from "react-icons/md";

const SortingMenu = () => {
  const { platforms, error } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<MdChevronRight />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortingMenu;
