import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import CriticBadge from "./CriticBadge";
import getOptimizedImage from "../services/get-optimized-image";
import Emoji from "./emojis";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getOptimizedImage(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={4}>
            <PlatFormIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticBadge score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name} <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
