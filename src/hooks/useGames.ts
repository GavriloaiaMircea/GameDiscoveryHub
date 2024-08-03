import { GameQuerry } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuerry: GameQuerry | null) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuerry?.genre?.id,
        platforms: gameQuerry?.platform?.id,
        ordering : gameQuerry?.sortOrder,
        search : gameQuerry?.searchText
      },
    },
    [gameQuerry]
  );
export default useGames;
