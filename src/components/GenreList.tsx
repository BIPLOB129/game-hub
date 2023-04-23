import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getOptimizedImage from "../services/get-optimized-image";
interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((data) => (
          <ListItem key={data.id} paddingY="5px">
            <HStack>
              <Image
                src={getOptimizedImage(data.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                variant="link"
                onClick={() => onSelect(data)}
                fontSize="lg"
                fontWeight={data.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
