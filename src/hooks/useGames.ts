import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id:number;
  name:string;
  slug:string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform : Platform}[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [game, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
      });

    return () => controller.abort();
  }, []);

  return { game, err };
};
export default useGames;
