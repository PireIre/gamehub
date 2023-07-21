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
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform ) => void;
}

const SortingMenu = ({ onSelectPlatform }: Props) => {
  const onPlatformSelect = (platform: Platform) => {
    onSelectPlatform(platform);
  };

  const { platforms, error } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<MdChevronRight />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onPlatformSelect(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortingMenu;
