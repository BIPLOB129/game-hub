import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.selectedSort,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
export default useGames;
