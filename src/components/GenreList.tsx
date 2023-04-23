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
}
const GenreList = ({ onSelect }: Props) => {
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
