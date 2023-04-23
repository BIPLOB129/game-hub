import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getOptimizedImage from "../services/get-optimized-image";

const GenreList = () => {
  const { data } = useGenres();
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
              <Text fontSize="lg">{data.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
