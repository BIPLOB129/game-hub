import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectsort: (value: string) => void;
  selectedSort: string;
}
const SortSelector = ({ onSelectsort, selectedSort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-date", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const sortOrder = sortOrders.find((sort) => sort.value === selectedSort);
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort by: {sortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((sort) => (
            <MenuItem
              key={sort.value}
              value={sort.value}
              onClick={() => onSelectsort(sort.value)}
            >
              {sort.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
