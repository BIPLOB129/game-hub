import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { PlatForm } from "../hooks/useGames";
interface Props {
  onSelect: (platform: PlatForm) => void;
  selectedPlatform: PlatForm | null;
}
const PlatFormSelector = ({ onSelect, selectedPlatform }: Props) => {
  const { data } = usePlatforms();
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platform"}
        </MenuButton>
        <MenuList>
          {" "}
          {data.map((platform) => (
            <MenuItem onClick={() => onSelect(platform)} key={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatFormSelector;
