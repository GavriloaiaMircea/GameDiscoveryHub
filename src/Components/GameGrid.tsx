import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErr(err.message));
  });
  return (
    <ul>
      {err && <Text color="tomato">{err}</Text>}
      {games.map((games) => (
        <li key={games.id}>{games.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
